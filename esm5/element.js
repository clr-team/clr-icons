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
    var clrIconId = 0;
    /** @type {?} */
    var offScreenSpan = document.createElement('span');
    offScreenSpan.className = 'is-off-screen';
    /** @type {?} */
    var parentConstructor = function () {
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
        var _instance = ((/** @type {?} */ (parentConstructor))).apply(this, arguments);
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
        var cloneOffScreenSpan = (/** @type {?} */ (offScreenSpan.cloneNode(false)));
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
        var _this = this;
        if (this.hasAttribute('size')) {
            /** @type {?} */
            var sizeAttrValue = this.getAttribute('size');
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
            var shapeAttrValue = this.getAttribute('shape').split(/\s/)[0];
            this._shapeTemplateSubscription = ShapeTemplateObserverModule.instance.subscribeTo(shapeAttrValue, function (updatedTemplate) {
                _this._injectTemplate(updatedTemplate);
            });
            this.currentShapeAttrVal = shapeAttrValue;
            if (ApiModule.instance.has(this.currentShapeAttrVal)) {
                /** @type {?} */
                var currentShapeTemplate = ApiModule.instance.get(this.currentShapeAttrVal);
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
            var titleAttrValue = this.getAttribute('title');
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
        var _this = this;
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
                this._shapeTemplateSubscription = ShapeTemplateObserverModule.instance.subscribeTo(this.currentShapeAttrVal, function (updatedTemplate) {
                    _this._injectTemplate(updatedTemplate);
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
        var existingAriaLabelledBy = this.getAttribute('aria-labelledby');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvaWNvbnMvIiwic291cmNlcyI6WyJlbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDbEMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBRzlFLE1BQU0sS0FBVyxhQUFhLENBa003QjtBQWxNRCxXQUFpQixhQUFhO0lBQzVCLDZCQUE2Qjs7O1FBRXpCLFNBQVMsR0FBRyxDQUFDOztRQUNYLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNwRCxhQUFhLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQzs7UUFFdEMsaUJBQWlCLEdBQUc7UUFDdEIsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7UUFDL0IsaUJBQWlCLEdBQUc7WUFDbEIsT0FBTyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlFLENBQUMsQ0FBQztLQUNIOzs7O0lBRUQsU0FBZ0Isa0JBQWtCO1FBQ2hDLFlBQVksQ0FBQzs7WUFFUCxTQUFTLEdBQUcsQ0FBQyxtQkFBQSxpQkFBaUIsRUFBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUM7UUFFbkUsU0FBUyxDQUFDLGFBQWEsR0FBRyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ25ELFNBQVMsRUFBRSxDQUFDO1FBRVosT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQVRlLGdDQUFrQixxQkFTakMsQ0FBQTtJQUVELENBQUMsbUJBQUEsa0JBQWtCLEVBQU8sQ0FBQyxD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LEVBQUU7WUFDM0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxzQkFBc0IsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3pGO0lBQ0gsQ0FBQyxDQUFDO0lBRUYsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxVQUFTLGFBQXNCO1FBQzVFLG1GQUFtRjtRQUNuRiw4QkFBOEI7UUFDOUIsSUFBSSxhQUFhLElBQUksYUFBYSxLQUFLLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUNoRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsYUFBYSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFFM0MsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDLENBQUM7SUFFRixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUc7UUFDbEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUM7QUFDSixDQUFDLEVBbE1nQixhQUFhLEtBQWIsYUFBYSxRQWtNN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgeyBTaGFwZVRlbXBsYXRlT2JzZXJ2ZXJNb2R1bGUgfSBmcm9tICcuL3V0aWxzL3NoYXBlLXRlbXBsYXRlLW9ic2VydmVyJztcblxuLyogdHNsaW50OmRpc2FibGU6bm8tbmFtZXNwYWNlICovXG5leHBvcnQgbmFtZXNwYWNlIEVsZW1lbnRNb2R1bGUge1xuICAvKiBDTFItSUNPTiBDVVNUT00gRUxFTUVOVCAqL1xuXG4gIGxldCBjbHJJY29uSWQgPSAwO1xuICBjb25zdCBvZmZTY3JlZW5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBvZmZTY3JlZW5TcGFuLmNsYXNzTmFtZSA9ICdpcy1vZmYtc2NyZWVuJztcblxuICBsZXQgcGFyZW50Q29uc3RydWN0b3IgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gSFRNTEVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0Jykge1xuICAgIHBhcmVudENvbnN0cnVjdG9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKFJlZmxlY3QgYXMgYW55KS5jb25zdHJ1Y3QoSFRNTEVsZW1lbnQsIGFyZ3VtZW50cywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgfTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBDbGFyaXR5SWNvbkVsZW1lbnQoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgY29uc3QgX2luc3RhbmNlID0gKHBhcmVudENvbnN0cnVjdG9yIGFzIGFueSkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIF9pbnN0YW5jZS5jbHJJY29uVW5pcUlkID0gJ19jbHJfaWNvbl8nICsgY2xySWNvbklkO1xuICAgIGNsckljb25JZCsrO1xuXG4gICAgcmV0dXJuIF9pbnN0YW5jZTtcbiAgfVxuXG4gIChDbGFyaXR5SWNvbkVsZW1lbnQgYXMgYW55KS5vYnNlcnZlZEF0dHJpYnV0ZXMgPSBbJ3NoYXBlJywgJ3NpemUnLCAndGl0bGUnXTtcblxuICBDbGFyaXR5SWNvbkVsZW1lbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShIVE1MRWxlbWVudC5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3RvcjogeyBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogQ2xhcml0eUljb25FbGVtZW50IH0sXG4gIH0pO1xuXG4gIENsYXJpdHlJY29uRWxlbWVudC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDbGFyaXR5SWNvbkVsZW1lbnQ7XG5cbiAgQ2xhcml0eUljb25FbGVtZW50LnByb3RvdHlwZS5fYXBwZW5kQ3VzdG9tVGl0bGUgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjbG9uZU9mZlNjcmVlblNwYW4gPSA8SFRNTEVsZW1lbnQ+b2ZmU2NyZWVuU3Bhbi5jbG9uZU5vZGUoZmFsc2UpO1xuICAgIGNsb25lT2ZmU2NyZWVuU3Bhbi5pZCA9IHRoaXMuY2xySWNvblVuaXFJZDtcbiAgICBjbG9uZU9mZlNjcmVlblNwYW4udGV4dENvbnRlbnQgPSB0aGlzLmN1cnJlbnRUaXRsZUF0dHJWYWw7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChjbG9uZU9mZlNjcmVlblNwYW4pO1xuICB9O1xuXG4gIENsYXJpdHlJY29uRWxlbWVudC5wcm90b3R5cGUuX3NldEljb25TaXplID0gZnVuY3Rpb24oc2l6ZTogc3RyaW5nKSB7XG4gICAgaWYgKCFOdW1iZXIoc2l6ZSkgfHwgTnVtYmVyKHNpemUpIDwgMCkge1xuICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IG51bGw7IC8vIGZhbGxiYWNrIHRvIHRoZSBvcmlnaW5hbCBzdHlsZXNoZWV0IHZhbHVlXG4gICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IG51bGw7IC8vIGZhbGxiYWNrIHRvIHRoZSBvcmlnaW5hbCBzdHlsZXNoZWV0IHZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBzaXplICsgJ3B4JztcbiAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gc2l6ZSArICdweCc7XG4gICAgfVxuICB9O1xuXG4gIENsYXJpdHlJY29uRWxlbWVudC5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBPbmUgdGhpbmcgdG8gbm90ZSBoZXJlIGlzIHRoYXQgdGhlIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBtZXRob2QgaXMgY2FsbGVkIGZvciBldmVyeSBhdHRyaWJ1dGUgZmlyc3RcbiAgICAvLyBiZWZvcmUgdGhpcyBjb25uZWN0ZWRDYWxsYmFjayBtZXRob2QgY2FsbGVkIG9ubHkgb25jZSB3aGVuIHRoZSBjdXN0b20gZWxlbWVudCBpcyBpbnNlcnRlZCBpbnRvIHRoZSBET00uXG4gICAgLy8gU28gd2UgY291bGQgY2hlY2sgd2hldGhlciB0aGUgYXR0cmlidXRlIHZhbHVlcyByZWFsbHkgY2hhbmdlZCBvciBub3QuXG4gICAgLy8gSWYgbm90LCB3ZSBkb24ndCBuZWVkIHRvIGV4ZWN1dGUgdGhlIHNhbWUgY29kZXMgYWdhaW4uXG5cbiAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ3NpemUnKSkge1xuICAgICAgY29uc3Qgc2l6ZUF0dHJWYWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdzaXplJyk7XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTaXplQXR0clZhbCAhPT0gc2l6ZUF0dHJWYWx1ZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTaXplQXR0clZhbCA9IHNpemVBdHRyVmFsdWU7XG4gICAgICAgIHRoaXMuX3NldEljb25TaXplKHNpemVBdHRyVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdGU6IHRoZSBzaXplIGF0dHJpYnV0ZSBpcyBpcnJlbGV2YW50IGZyb20gdGhlIHNoYXBlIHRlbXBsYXRlO1xuICAgIC8vIFRoYXQncyB3aHkgdGhlIHNpemUgY2hlY2tpbmcgcGxhY2VkIGJlZm9yZSBkZXRlY3RpbmcgY2hhbmdlcyBpbiBzaGFwZSBhbmQgdGl0bGUgYXR0cmlidXRlcy5cbiAgICAvLyBUaGlzIG1lYW5zIGV2ZW4gaWYgdGhlIHNoYXBlIGlzIG5vdCBmb3VuZCwgdGhlIGluamVjdGVkIHNoYXBlIHdpbGwgaGF2ZSB0aGUgdXNlci1naXZlbiBzaXplLlxuXG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdzaGFwZScpKSB7XG4gICAgICBjb25zdCBzaGFwZUF0dHJWYWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdzaGFwZScpLnNwbGl0KC9cXHMvKVswXTtcblxuICAgICAgdGhpcy5fc2hhcGVUZW1wbGF0ZVN1YnNjcmlwdGlvbiA9IFNoYXBlVGVtcGxhdGVPYnNlcnZlck1vZHVsZS5pbnN0YW5jZS5zdWJzY3JpYmVUbyhcbiAgICAgICAgc2hhcGVBdHRyVmFsdWUsXG4gICAgICAgICh1cGRhdGVkVGVtcGxhdGU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRoaXMuX2luamVjdFRlbXBsYXRlKHVwZGF0ZWRUZW1wbGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHRoaXMuY3VycmVudFNoYXBlQXR0clZhbCA9IHNoYXBlQXR0clZhbHVlO1xuXG4gICAgICBpZiAoQXBpTW9kdWxlLmluc3RhbmNlLmhhcyh0aGlzLmN1cnJlbnRTaGFwZUF0dHJWYWwpKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTaGFwZVRlbXBsYXRlID0gQXBpTW9kdWxlLmluc3RhbmNlLmdldCh0aGlzLmN1cnJlbnRTaGFwZUF0dHJWYWwpO1xuICAgICAgICBpZiAoY3VycmVudFNoYXBlVGVtcGxhdGUgPT09IHRoaXMuY3VycmVudFNoYXBlVGVtcGxhdGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2hhcGVUZW1wbGF0ZSA9IGN1cnJlbnRTaGFwZVRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbmplY3RFcnJvclRlbXBsYXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgIGNvbnN0IHRpdGxlQXR0clZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUaXRsZUF0dHJWYWwgIT09IHRpdGxlQXR0clZhbHVlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFRpdGxlQXR0clZhbCA9IHRpdGxlQXR0clZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuY3VycmVudFNoYXBlQXR0clZhbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5qZWN0VGVtcGxhdGUoKTtcbiAgfTtcblxuICBDbGFyaXR5SWNvbkVsZW1lbnQucHJvdG90eXBlLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uKFxuICAgIGF0dHJpYnV0ZU5hbWU6IHN0cmluZyxcbiAgICBvbGRWYWx1ZTogc3RyaW5nLFxuICAgIG5ld1ZhbHVlOiBzdHJpbmdcbiAgKSB7XG4gICAgaWYgKGF0dHJpYnV0ZU5hbWUgPT09ICdzaXplJykge1xuICAgICAgdGhpcy5fc2V0SWNvblNpemUobmV3VmFsdWUpO1xuICAgIH1cblxuICAgIC8vIE5vdGU6IHRoZSBzaXplIGF0dHJpYnV0ZSBpcyBpcnJlbGF2ZW50IGZyb20gdGhlIHNoYXBlIHRlbXBsYXRlO1xuICAgIC8vIFRoYXQncyB3aHkgdGhlIHNpemUgY2hlY2tpbmcgcGxhY2VkIGJlZm9yZSBkZXRlY3RpbmcgY2hhbmdlcyBpbiBzaGFwZSBhbmQgdGl0bGUgYXR0cmlidXRlcy5cbiAgICAvLyBUaGlzIG1lYW5zIGV2ZW4gaWYgdGhlIHNoYXBlIGlzIG5vdCBmb3VuZCwgdGhlIGluamVjdGVkIHNoYXBlIHdpbGwgaGF2ZSB0aGUgdXNlci1naXZlbiBzaXplLlxuXG4gICAgaWYgKGF0dHJpYnV0ZU5hbWUgPT09ICdzaGFwZScpIHtcbiAgICAgIHRoaXMuY3VycmVudFNoYXBlQXR0clZhbCA9IG5ld1ZhbHVlLnNwbGl0KC9cXHMvKVswXTtcblxuICAgICAgLy8gdHJhbnNmZXIgY2hhbmdlIGhhbmRsZXIgY2FsbGJhY2sgdG8gbmV3IHNoYXBlIG5hbWVcbiAgICAgIGlmICh0aGlzLl9zaGFwZVRlbXBsYXRlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIC8vIHJlbW92ZSB0aGUgZXhpc3RpbmcgY2hhbmdlIGhhbmRsZXIgY2FsbGJhY2sgb24gdGhlIG9sZCBzaGFwZSBuYW1lXG4gICAgICAgIHRoaXMuX3NoYXBlVGVtcGxhdGVTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgLy8gY3JlYXRlIGEgbmV3IHN1YnNjcmlwdGlvbiBvbiB0aGUgbmV3IHNoYXBlIG5hbWVcbiAgICAgICAgdGhpcy5fc2hhcGVUZW1wbGF0ZVN1YnNjcmlwdGlvbiA9IFNoYXBlVGVtcGxhdGVPYnNlcnZlck1vZHVsZS5pbnN0YW5jZS5zdWJzY3JpYmVUbyhcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZUF0dHJWYWwsXG4gICAgICAgICAgKHVwZGF0ZWRUZW1wbGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9pbmplY3RUZW1wbGF0ZSh1cGRhdGVkVGVtcGxhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFwaU1vZHVsZS5pbnN0YW5jZS5oYXModGhpcy5jdXJyZW50U2hhcGVBdHRyVmFsKSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGFwZVRlbXBsYXRlID0gQXBpTW9kdWxlLmluc3RhbmNlLmdldCh0aGlzLmN1cnJlbnRTaGFwZUF0dHJWYWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5qZWN0RXJyb3JUZW1wbGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhdHRyaWJ1dGVOYW1lID09PSAndGl0bGUnKSB7XG4gICAgICB0aGlzLmN1cnJlbnRUaXRsZUF0dHJWYWwgPSBuZXdWYWx1ZTtcblxuICAgICAgaWYgKCF0aGlzLmN1cnJlbnRTaGFwZUF0dHJWYWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2luamVjdFRlbXBsYXRlKCk7XG4gIH07XG5cbiAgQ2xhcml0eUljb25FbGVtZW50LnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGFzIHRoZSBpY29uIGVsZW1lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00sXG4gICAgLy8gcmVtb3ZlIGl0cyBsaXN0ZW5lciBjYWxsYmFjayBmdW5jdGlvbiBhcyB3ZWxsLlxuICAgIGlmICh0aGlzLl9zaGFwZVRlbXBsYXRlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9zaGFwZVRlbXBsYXRlU3Vic2NyaXB0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIENsYXJpdHlJY29uRWxlbWVudC5wcm90b3R5cGUuX3NldEFyaWFMYWJlbGxlZEJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZXhpc3RpbmdBcmlhTGFiZWxsZWRCeTogc3RyaW5nID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScpO1xuICAgIGlmICghZXhpc3RpbmdBcmlhTGFiZWxsZWRCeSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIHRoaXMuY2xySWNvblVuaXFJZCk7XG4gICAgfSBlbHNlIGlmIChleGlzdGluZ0FyaWFMYWJlbGxlZEJ5ICYmIGV4aXN0aW5nQXJpYUxhYmVsbGVkQnkuaW5kZXhPZih0aGlzLmNsckljb25VbmlxSWQpIDwgMCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGV4aXN0aW5nQXJpYUxhYmVsbGVkQnkgKyAnICcgKyB0aGlzLmNsckljb25VbmlxSWQpO1xuICAgIH1cbiAgfTtcblxuICBDbGFyaXR5SWNvbkVsZW1lbnQucHJvdG90eXBlLl9pbmplY3RUZW1wbGF0ZSA9IGZ1bmN0aW9uKHNoYXBlVGVtcGxhdGU/OiBzdHJpbmcpIHtcbiAgICAvLyBBY2NlcHRpbmcgdGhlIGFyZ3VtZW50LCBzaGFwZVRlbXBsYXRlLCB3aWxsIGhlbHAgdXMgdG8gdXBkYXRlIHRoZSBzaGFwZSB0ZW1wbGF0ZVxuICAgIC8vIHJpZ2h0IGJlZm9yZSB0aGUgaW5qZWN0aW9uLlxuICAgIGlmIChzaGFwZVRlbXBsYXRlICYmIHNoYXBlVGVtcGxhdGUgIT09IHRoaXMuY3VycmVudFNoYXBlVGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuY3VycmVudFNoYXBlVGVtcGxhdGUgPSBzaGFwZVRlbXBsYXRlO1xuICAgIH1cblxuICAgIHRoaXMuaW5uZXJIVE1MID0gdGhpcy5jdXJyZW50U2hhcGVUZW1wbGF0ZTtcblxuICAgIGlmICh0aGlzLmN1cnJlbnRUaXRsZUF0dHJWYWwpIHtcbiAgICAgIHRoaXMuX3NldEFyaWFMYWJlbGxlZEJ5KCk7XG4gICAgICB0aGlzLl9hcHBlbmRDdXN0b21UaXRsZSgpO1xuICAgIH1cbiAgfTtcblxuICBDbGFyaXR5SWNvbkVsZW1lbnQucHJvdG90eXBlLl9pbmplY3RFcnJvclRlbXBsYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jdXJyZW50U2hhcGVUZW1wbGF0ZSA9IEFwaU1vZHVsZS5pbnN0YW5jZS5nZXQoJ2Vycm9yJyk7XG4gICAgdGhpcy5faW5qZWN0VGVtcGxhdGUoKTtcbiAgfTtcbn1cbiJdfQ==