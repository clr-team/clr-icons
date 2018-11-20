/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ApiModule } from './api';
import { ShapeTemplateObserverModule } from './utils/shape-template-observer';
/* tslint:disable:no-namespace */
export var ElementModule;
(function (ElementModule) {
    /* CLR-ICON CUSTOM ELEMENT */
    /* CLR-ICON CUSTOM ELEMENT */
    /** @type {?} */
    let clrIconId = 0;
    /** @type {?} */
    const offScreenSpan = document.createElement('span');
    offScreenSpan.className = 'is-off-screen';
    /** @type {?} */
    let parentConstructor = function () {
        return HTMLElement.apply(this, arguments);
    };
    if (typeof Reflect === 'object') {
        parentConstructor = function () {
            return ((/** @type {?} */ (Reflect))).construct(HTMLElement, arguments, this.constructor);
        };
    }
    /**
     * @return {?}
     */
    function ClarityIconElement() {
        'use strict';
        /** @type {?} */
        const _instance = ((/** @type {?} */ (parentConstructor))).apply(this, arguments);
        _instance.clrIconUniqId = '_clr_icon_' + clrIconId;
        clrIconId++;
        return _instance;
    }
    ElementModule.ClarityIconElement = ClarityIconElement;
    ((/** @type {?} */ (ClarityIconElement))).observedAttributes = ['shape', 'size', 'title'];
    ClarityIconElement.prototype = Object.create(HTMLElement.prototype, {
        constructor: { configurable: true, writable: true, value: ClarityIconElement },
    });
    ClarityIconElement.prototype.constructor = ClarityIconElement;
    ClarityIconElement.prototype._appendCustomTitle = function () {
        /** @type {?} */
        const cloneOffScreenSpan = (/** @type {?} */ (offScreenSpan.cloneNode(false)));
        cloneOffScreenSpan.id = this.clrIconUniqId;
        cloneOffScreenSpan.textContent = this.currentTitleAttrVal;
        this.appendChild(cloneOffScreenSpan);
    };
    ClarityIconElement.prototype._setIconSize = function (size) {
        if (!Number(size) || Number(size) < 0) {
            this.style.width = null; // fallback to the original stylesheet value
            this.style.height = null; // fallback to the original stylesheet value
        }
        else {
            this.style.width = size + 'px';
            this.style.height = size + 'px';
        }
    };
    ClarityIconElement.prototype.connectedCallback = function () {
        // One thing to note here is that the attributeChangedCallback method is called for every attribute first
        // before this connectedCallback method called only once when the custom element is inserted into the DOM.
        // So we could check whether the attribute values really changed or not.
        // If not, we don't need to execute the same codes again.
        if (this.hasAttribute('size')) {
            /** @type {?} */
            const sizeAttrValue = this.getAttribute('size');
            if (this.currentSizeAttrVal !== sizeAttrValue) {
                this.currentSizeAttrVal = sizeAttrValue;
                this._setIconSize(sizeAttrValue);
            }
        }
        // Note: the size attribute is irrelevant from the shape template;
        // That's why the size checking placed before detecting changes in shape and title attributes.
        // This means even if the shape is not found, the injected shape will have the user-given size.
        if (this.hasAttribute('shape')) {
            /** @type {?} */
            const shapeAttrValue = this.getAttribute('shape').split(/\s/)[0];
            this._shapeTemplateSubscription = ShapeTemplateObserverModule.instance.subscribeTo(shapeAttrValue, (updatedTemplate) => {
                this._injectTemplate(updatedTemplate);
            });
            this.currentShapeAttrVal = shapeAttrValue;
            if (ApiModule.instance.has(this.currentShapeAttrVal)) {
                /** @type {?} */
                const currentShapeTemplate = ApiModule.instance.get(this.currentShapeAttrVal);
                if (currentShapeTemplate === this.currentShapeTemplate) {
                    return;
                }
                else {
                    this.currentShapeTemplate = currentShapeTemplate;
                }
            }
            else {
                this._injectErrorTemplate();
                return;
            }
        }
        if (this.hasAttribute('title')) {
            /** @type {?} */
            const titleAttrValue = this.getAttribute('title');
            if (this.currentTitleAttrVal !== titleAttrValue) {
                this.currentTitleAttrVal = titleAttrValue;
            }
            if (!this.currentShapeAttrVal) {
                return;
            }
        }
        this._injectTemplate();
    };
    ClarityIconElement.prototype.attributeChangedCallback = function (attributeName, oldValue, newValue) {
        if (attributeName === 'size') {
            this._setIconSize(newValue);
        }
        // Note: the size attribute is irrelavent from the shape template;
        // That's why the size checking placed before detecting changes in shape and title attributes.
        // This means even if the shape is not found, the injected shape will have the user-given size.
        if (attributeName === 'shape') {
            this.currentShapeAttrVal = newValue.split(/\s/)[0];
            // transfer change handler callback to new shape name
            if (this._shapeTemplateSubscription) {
                // remove the existing change handler callback on the old shape name
                this._shapeTemplateSubscription();
                // create a new subscription on the new shape name
                this._shapeTemplateSubscription = ShapeTemplateObserverModule.instance.subscribeTo(this.currentShapeAttrVal, (updatedTemplate) => {
                    this._injectTemplate(updatedTemplate);
                });
            }
            if (ApiModule.instance.has(this.currentShapeAttrVal)) {
                this.currentShapeTemplate = ApiModule.instance.get(this.currentShapeAttrVal);
            }
            else {
                this._injectErrorTemplate();
                return;
            }
        }
        if (attributeName === 'title') {
            this.currentTitleAttrVal = newValue;
            if (!this.currentShapeAttrVal) {
                return;
            }
        }
        this._injectTemplate();
    };
    ClarityIconElement.prototype.disconnectedCallback = function () {
        // as the icon element is removed from the DOM,
        // remove its listener callback function as well.
        if (this._shapeTemplateSubscription) {
            this._shapeTemplateSubscription();
        }
    };
    ClarityIconElement.prototype._setAriaLabelledBy = function () {
        /** @type {?} */
        const existingAriaLabelledBy = this.getAttribute('aria-labelledby');
        if (!existingAriaLabelledBy) {
            this.setAttribute('aria-labelledby', this.clrIconUniqId);
        }
        else if (existingAriaLabelledBy && existingAriaLabelledBy.indexOf(this.clrIconUniqId) < 0) {
            this.setAttribute('aria-labelledby', existingAriaLabelledBy + ' ' + this.clrIconUniqId);
        }
    };
    ClarityIconElement.prototype._injectTemplate = function (shapeTemplate) {
        // Accepting the argument, shapeTemplate, will help us to update the shape template
        // right before the injection.
        if (shapeTemplate && shapeTemplate !== this.currentShapeTemplate) {
            this.currentShapeTemplate = shapeTemplate;
        }
        this.innerHTML = this.currentShapeTemplate;
        if (this.currentTitleAttrVal) {
            this._setAriaLabelledBy();
            this._appendCustomTitle();
        }
    };
    ClarityIconElement.prototype._injectErrorTemplate = function () {
        this.currentShapeTemplate = ApiModule.instance.get('error');
        this._injectTemplate();
    };
})(ElementModule || (ElementModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvaWNvbnMvIiwic291cmNlcyI6WyJlbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDbEMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBRzlFLE1BQU0sS0FBVyxhQUFhLENBa003QjtBQWxNRCxXQUFpQixhQUFhO0lBQzVCLDZCQUE2Qjs7O1FBRXpCLFNBQVMsR0FBRyxDQUFDOztVQUNYLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNwRCxhQUFhLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQzs7UUFFdEMsaUJBQWlCLEdBQUc7UUFDdEIsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7UUFDL0IsaUJBQWlCLEdBQUc7WUFDbEIsT0FBTyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlFLENBQUMsQ0FBQztLQUNIOzs7O0lBRUQsU0FBZ0Isa0JBQWtCO1FBQ2hDLFlBQVksQ0FBQzs7Y0FFUCxTQUFTLEdBQUcsQ0FBQyxtQkFBQSxpQkFBaUIsRUFBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUM7UUFFbkUsU0FBUyxDQUFDLGFBQWEsR0FBRyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ25ELFNBQVMsRUFBRSxDQUFDO1FBRVosT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQVRlLGdDQUFrQixxQkFTakMsQ0FBQTtJQUVELENBQUMsbUJBQUEsa0JBQWtCLEVBQU8sQ0FBQyxD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QUMzRixJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLHNCQUFzQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekY7SUFDSCxDQUFDLENBQUM7SUFFRixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLFVBQVMsYUFBc0I7UUFDNUUsbUZBQW1GO1FBQ25GLDhCQUE4QjtRQUM5QixJQUFJLGFBQWEsSUFBSSxhQUFhLEtBQUssSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ2hFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxhQUFhLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUUzQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUMsQ0FBQztJQUVGLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsR0FBRztRQUNsRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQztBQUNKLENBQUMsRUFsTWdCLGFBQWEsS0FBYixhQUFhLFFBa003QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7IFNoYXBlVGVtcGxhdGVPYnNlcnZlck1vZHVsZSB9IGZyb20gJy4vdXRpbHMvc2hhcGUtdGVtcGxhdGUtb2JzZXJ2ZXInO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby1uYW1lc3BhY2UgKi9cbmV4cG9ydCBuYW1lc3BhY2UgRWxlbWVudE1vZHVsZSB7XG4gIC8qIENMUi1JQ09OIENVU1RPTSBFTEVNRU5UICovXG5cbiAgbGV0IGNsckljb25JZCA9IDA7XG4gIGNvbnN0IG9mZlNjcmVlblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIG9mZlNjcmVlblNwYW4uY2xhc3NOYW1lID0gJ2lzLW9mZi1zY3JlZW4nO1xuXG4gIGxldCBwYXJlbnRDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBIVE1MRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnKSB7XG4gICAgcGFyZW50Q29uc3RydWN0b3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoUmVmbGVjdCBhcyBhbnkpLmNvbnN0cnVjdChIVE1MRWxlbWVudCwgYXJndW1lbnRzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICB9O1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIENsYXJpdHlJY29uRWxlbWVudCgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBjb25zdCBfaW5zdGFuY2UgPSAocGFyZW50Q29uc3RydWN0b3IgYXMgYW55KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgX2luc3RhbmNlLmNsckljb25VbmlxSWQgPSAnX2Nscl9pY29uXycgKyBjbHJJY29uSWQ7XG4gICAgY2xySWNvbklkKys7XG5cbiAgICByZXR1cm4gX2luc3RhbmNlO1xuICB9XG5cbiAgKENsYXJpdHlJY29uRWxlbWVudCBhcyBhbnkpLm9ic2VydmVkQXR0cmlidXRlcyA9IFsnc2hhcGUnLCAnc2l6ZScsICd0aXRsZSddO1xuXG4gIENsYXJpdHlJY29uRWxlbWVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEhUTUxFbGVtZW50LnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlOiBDbGFyaXR5SWNvbkVsZW1lbnQgfSxcbiAgfSk7XG5cbiAgQ2xhcml0eUljb25FbGVtZW50LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENsYXJpdHlJY29uRWxlbWVudDtcblxuICBDbGFyaXR5SWNvbkVsZW1lbnQucHJvdG90eXBlLl9hcHBlbmRDdXN0b21UaXRsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNsb25lT2ZmU2NyZWVuU3BhbiA9IDxIVE1MRWxlbWVudD5vZmZTY3JlZW5TcGFuLmNsb25lTm9kZShmYWxzZSk7XG4gICAgY2xvbmVPZmZTY3JlZW5TcGFuLmlkID0gdGhpcy5jbHJJY29uVW5pcUlkO1xuICAgIGNsb25lT2ZmU2NyZWVuU3Bhbi50ZXh0Q29udGVudCA9IHRoaXMuY3VycmVudFRpdGxlQXR0clZhbDtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGNsb25lT2ZmU2NyZWVuU3Bhbik7XG4gIH07XG5cbiAgQ2xhcml0eUljb25FbGVtZW50LnByb3RvdHlwZS5fc2V0SWNvblNpemUgPSBmdW5jdGlvbihzaXplOiBzdHJpbmcpIHtcbiAgICBpZiAoIU51bWJlcihzaXplKSB8fCBOdW1iZXIoc2l6ZSkgPCAwKSB7XG4gICAgICB0aGlzLnN0eWxlLndpZHRoID0gbnVsbDsgLy8gZmFsbGJhY2sgdG8gdGhlIG9yaWdpbmFsIHN0eWxlc2hlZXQgdmFsdWVcbiAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gbnVsbDsgLy8gZmFsbGJhY2sgdG8gdGhlIG9yaWdpbmFsIHN0eWxlc2hlZXQgdmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IHNpemUgKyAncHgnO1xuICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4JztcbiAgICB9XG4gIH07XG5cbiAgQ2xhcml0eUljb25FbGVtZW50LnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIE9uZSB0aGluZyB0byBub3RlIGhlcmUgaXMgdGhhdCB0aGUgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIG1ldGhvZCBpcyBjYWxsZWQgZm9yIGV2ZXJ5IGF0dHJpYnV0ZSBmaXJzdFxuICAgIC8vIGJlZm9yZSB0aGlzIGNvbm5lY3RlZENhbGxiYWNrIG1ldGhvZCBjYWxsZWQgb25seSBvbmNlIHdoZW4gdGhlIGN1c3RvbSBlbGVtZW50IGlzIGluc2VydGVkIGludG8gdGhlIERPTS5cbiAgICAvLyBTbyB3ZSBjb3VsZCBjaGVjayB3aGV0aGVyIHRoZSBhdHRyaWJ1dGUgdmFsdWVzIHJlYWxseSBjaGFuZ2VkIG9yIG5vdC5cbiAgICAvLyBJZiBub3QsIHdlIGRvbid0IG5lZWQgdG8gZXhlY3V0ZSB0aGUgc2FtZSBjb2RlcyBhZ2Fpbi5cblxuICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnc2l6ZScpKSB7XG4gICAgICBjb25zdCBzaXplQXR0clZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NpemUnKTtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudFNpemVBdHRyVmFsICE9PSBzaXplQXR0clZhbHVlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNpemVBdHRyVmFsID0gc2l6ZUF0dHJWYWx1ZTtcbiAgICAgICAgdGhpcy5fc2V0SWNvblNpemUoc2l6ZUF0dHJWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm90ZTogdGhlIHNpemUgYXR0cmlidXRlIGlzIGlycmVsZXZhbnQgZnJvbSB0aGUgc2hhcGUgdGVtcGxhdGU7XG4gICAgLy8gVGhhdCdzIHdoeSB0aGUgc2l6ZSBjaGVja2luZyBwbGFjZWQgYmVmb3JlIGRldGVjdGluZyBjaGFuZ2VzIGluIHNoYXBlIGFuZCB0aXRsZSBhdHRyaWJ1dGVzLlxuICAgIC8vIFRoaXMgbWVhbnMgZXZlbiBpZiB0aGUgc2hhcGUgaXMgbm90IGZvdW5kLCB0aGUgaW5qZWN0ZWQgc2hhcGUgd2lsbCBoYXZlIHRoZSB1c2VyLWdpdmVuIHNpemUuXG5cbiAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ3NoYXBlJykpIHtcbiAgICAgIGNvbnN0IHNoYXBlQXR0clZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NoYXBlJykuc3BsaXQoL1xccy8pWzBdO1xuXG4gICAgICB0aGlzLl9zaGFwZVRlbXBsYXRlU3Vic2NyaXB0aW9uID0gU2hhcGVUZW1wbGF0ZU9ic2VydmVyTW9kdWxlLmluc3RhbmNlLnN1YnNjcmliZVRvKFxuICAgICAgICBzaGFwZUF0dHJWYWx1ZSxcbiAgICAgICAgKHVwZGF0ZWRUZW1wbGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGhpcy5faW5qZWN0VGVtcGxhdGUodXBkYXRlZFRlbXBsYXRlKTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgdGhpcy5jdXJyZW50U2hhcGVBdHRyVmFsID0gc2hhcGVBdHRyVmFsdWU7XG5cbiAgICAgIGlmIChBcGlNb2R1bGUuaW5zdGFuY2UuaGFzKHRoaXMuY3VycmVudFNoYXBlQXR0clZhbCkpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNoYXBlVGVtcGxhdGUgPSBBcGlNb2R1bGUuaW5zdGFuY2UuZ2V0KHRoaXMuY3VycmVudFNoYXBlQXR0clZhbCk7XG4gICAgICAgIGlmIChjdXJyZW50U2hhcGVUZW1wbGF0ZSA9PT0gdGhpcy5jdXJyZW50U2hhcGVUZW1wbGF0ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZVRlbXBsYXRlID0gY3VycmVudFNoYXBlVGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2luamVjdEVycm9yVGVtcGxhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgY29uc3QgdGl0bGVBdHRyVmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudFRpdGxlQXR0clZhbCAhPT0gdGl0bGVBdHRyVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VGl0bGVBdHRyVmFsID0gdGl0bGVBdHRyVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5jdXJyZW50U2hhcGVBdHRyVmFsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbmplY3RUZW1wbGF0ZSgpO1xuICB9O1xuXG4gIENsYXJpdHlJY29uRWxlbWVudC5wcm90b3R5cGUuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oXG4gICAgYXR0cmlidXRlTmFtZTogc3RyaW5nLFxuICAgIG9sZFZhbHVlOiBzdHJpbmcsXG4gICAgbmV3VmFsdWU6IHN0cmluZ1xuICApIHtcbiAgICBpZiAoYXR0cmlidXRlTmFtZSA9PT0gJ3NpemUnKSB7XG4gICAgICB0aGlzLl9zZXRJY29uU2l6ZShuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gTm90ZTogdGhlIHNpemUgYXR0cmlidXRlIGlzIGlycmVsYXZlbnQgZnJvbSB0aGUgc2hhcGUgdGVtcGxhdGU7XG4gICAgLy8gVGhhdCdzIHdoeSB0aGUgc2l6ZSBjaGVja2luZyBwbGFjZWQgYmVmb3JlIGRldGVjdGluZyBjaGFuZ2VzIGluIHNoYXBlIGFuZCB0aXRsZSBhdHRyaWJ1dGVzLlxuICAgIC8vIFRoaXMgbWVhbnMgZXZlbiBpZiB0aGUgc2hhcGUgaXMgbm90IGZvdW5kLCB0aGUgaW5qZWN0ZWQgc2hhcGUgd2lsbCBoYXZlIHRoZSB1c2VyLWdpdmVuIHNpemUuXG5cbiAgICBpZiAoYXR0cmlidXRlTmFtZSA9PT0gJ3NoYXBlJykge1xuICAgICAgdGhpcy5jdXJyZW50U2hhcGVBdHRyVmFsID0gbmV3VmFsdWUuc3BsaXQoL1xccy8pWzBdO1xuXG4gICAgICAvLyB0cmFuc2ZlciBjaGFuZ2UgaGFuZGxlciBjYWxsYmFjayB0byBuZXcgc2hhcGUgbmFtZVxuICAgICAgaWYgKHRoaXMuX3NoYXBlVGVtcGxhdGVTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBleGlzdGluZyBjaGFuZ2UgaGFuZGxlciBjYWxsYmFjayBvbiB0aGUgb2xkIHNoYXBlIG5hbWVcbiAgICAgICAgdGhpcy5fc2hhcGVUZW1wbGF0ZVN1YnNjcmlwdGlvbigpO1xuICAgICAgICAvLyBjcmVhdGUgYSBuZXcgc3Vic2NyaXB0aW9uIG9uIHRoZSBuZXcgc2hhcGUgbmFtZVxuICAgICAgICB0aGlzLl9zaGFwZVRlbXBsYXRlU3Vic2NyaXB0aW9uID0gU2hhcGVUZW1wbGF0ZU9ic2VydmVyTW9kdWxlLmluc3RhbmNlLnN1YnNjcmliZVRvKFxuICAgICAgICAgIHRoaXMuY3VycmVudFNoYXBlQXR0clZhbCxcbiAgICAgICAgICAodXBkYXRlZFRlbXBsYXRlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2luamVjdFRlbXBsYXRlKHVwZGF0ZWRUZW1wbGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXBpTW9kdWxlLmluc3RhbmNlLmhhcyh0aGlzLmN1cnJlbnRTaGFwZUF0dHJWYWwpKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNoYXBlVGVtcGxhdGUgPSBBcGlNb2R1bGUuaW5zdGFuY2UuZ2V0KHRoaXMuY3VycmVudFNoYXBlQXR0clZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbmplY3RFcnJvclRlbXBsYXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGF0dHJpYnV0ZU5hbWUgPT09ICd0aXRsZScpIHtcbiAgICAgIHRoaXMuY3VycmVudFRpdGxlQXR0clZhbCA9IG5ld1ZhbHVlO1xuXG4gICAgICBpZiAoIXRoaXMuY3VycmVudFNoYXBlQXR0clZhbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5qZWN0VGVtcGxhdGUoKTtcbiAgfTtcblxuICBDbGFyaXR5SWNvbkVsZW1lbnQucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gYXMgdGhlIGljb24gZWxlbWVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTSxcbiAgICAvLyByZW1vdmUgaXRzIGxpc3RlbmVyIGNhbGxiYWNrIGZ1bmN0aW9uIGFzIHdlbGwuXG4gICAgaWYgKHRoaXMuX3NoYXBlVGVtcGxhdGVTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3NoYXBlVGVtcGxhdGVTdWJzY3JpcHRpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgQ2xhcml0eUljb25FbGVtZW50LnByb3RvdHlwZS5fc2V0QXJpYUxhYmVsbGVkQnkgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBleGlzdGluZ0FyaWFMYWJlbGxlZEJ5OiBzdHJpbmcgPSB0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5Jyk7XG4gICAgaWYgKCFleGlzdGluZ0FyaWFMYWJlbGxlZEJ5KSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgdGhpcy5jbHJJY29uVW5pcUlkKTtcbiAgICB9IGVsc2UgaWYgKGV4aXN0aW5nQXJpYUxhYmVsbGVkQnkgJiYgZXhpc3RpbmdBcmlhTGFiZWxsZWRCeS5pbmRleE9mKHRoaXMuY2xySWNvblVuaXFJZCkgPCAwKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgZXhpc3RpbmdBcmlhTGFiZWxsZWRCeSArICcgJyArIHRoaXMuY2xySWNvblVuaXFJZCk7XG4gICAgfVxuICB9O1xuXG4gIENsYXJpdHlJY29uRWxlbWVudC5wcm90b3R5cGUuX2luamVjdFRlbXBsYXRlID0gZnVuY3Rpb24oc2hhcGVUZW1wbGF0ZT86IHN0cmluZykge1xuICAgIC8vIEFjY2VwdGluZyB0aGUgYXJndW1lbnQsIHNoYXBlVGVtcGxhdGUsIHdpbGwgaGVscCB1cyB0byB1cGRhdGUgdGhlIHNoYXBlIHRlbXBsYXRlXG4gICAgLy8gcmlnaHQgYmVmb3JlIHRoZSBpbmplY3Rpb24uXG4gICAgaWYgKHNoYXBlVGVtcGxhdGUgJiYgc2hhcGVUZW1wbGF0ZSAhPT0gdGhpcy5jdXJyZW50U2hhcGVUZW1wbGF0ZSkge1xuICAgICAgdGhpcy5jdXJyZW50U2hhcGVUZW1wbGF0ZSA9IHNoYXBlVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckhUTUwgPSB0aGlzLmN1cnJlbnRTaGFwZVRlbXBsYXRlO1xuXG4gICAgaWYgKHRoaXMuY3VycmVudFRpdGxlQXR0clZhbCkge1xuICAgICAgdGhpcy5fc2V0QXJpYUxhYmVsbGVkQnkoKTtcbiAgICAgIHRoaXMuX2FwcGVuZEN1c3RvbVRpdGxlKCk7XG4gICAgfVxuICB9O1xuXG4gIENsYXJpdHlJY29uRWxlbWVudC5wcm90b3R5cGUuX2luamVjdEVycm9yVGVtcGxhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmN1cnJlbnRTaGFwZVRlbXBsYXRlID0gQXBpTW9kdWxlLmluc3RhbmNlLmdldCgnZXJyb3InKTtcbiAgICB0aGlzLl9pbmplY3RUZW1wbGF0ZSgpO1xuICB9O1xufVxuIl19