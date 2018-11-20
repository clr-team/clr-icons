/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ShapeTemplateObserverModule } from './utils/shape-template-observer';
import { ElementModule } from './element';
/* tslint:disable:no-namespace */
export var ApiModule;
(function (ApiModule) {
    class ClarityIconsApi {
        constructor() {
            this.iconShapeSources = {};
        }
        /**
         * @param {?} name
         * @return {?}
         */
        validateName(name) {
            if (name.length === 0) {
                throw new Error('Shape name or alias must be a non-empty string!');
            }
            if (/\s/.test(name)) {
                throw new Error('Shape name or alias must not contain any whitespace characters!');
            }
            return true;
        }
        /**
         * @param {?} shapeName
         * @param {?} shapeTemplate
         * @return {?}
         */
        setIconTemplate(shapeName, shapeTemplate) {
            /** @type {?} */
            const trimmedShapeTemplate = shapeTemplate.trim();
            if (this.validateName(shapeName)) {
                // if the shape name exists, delete it.
                if (this.iconShapeSources[shapeName]) {
                    delete this.iconShapeSources[shapeName];
                }
                this.iconShapeSources[shapeName] = trimmedShapeTemplate;
                ShapeTemplateObserverModule.instance.emitChanges(shapeName, trimmedShapeTemplate);
            }
        }
        /**
         * @param {?} templates
         * @param {?} shapeName
         * @param {?} aliasNames
         * @return {?}
         */
        setIconAliases(templates, shapeName, aliasNames) {
            for (const aliasName of aliasNames) {
                if (this.validateName(aliasName)) {
                    Object.defineProperty(templates, aliasName, {
                        get: function () {
                            return templates[shapeName];
                        },
                        enumerable: true,
                        configurable: true,
                    });
                }
            }
        }
        /**
         * @param {?=} icons
         * @return {?}
         */
        init(icons) {
            // check if there is a global object called "ClarityIcons"
            if (typeof window !== 'undefined') {
                if (window && !window.hasOwnProperty('ClarityIcons')) {
                    // Setting a global object called "ClarityIcons" to expose the ClarityIconsApi.
                    /* tslint:disable-next-line:no-string-literal */
                    window['ClarityIcons'] = ApiModule.instance;
                    // Defining clr-icon custom element
                    customElements.define('clr-icon', ElementModule.ClarityIconElement);
                }
            }
            if (icons) {
                ApiModule.instance.add(icons);
            }
        }
        /**
         * @param {?=} icons
         * @return {?}
         */
        add(icons) {
            if (typeof icons !== 'object') {
                throw new Error(`The argument must be an object literal passed in the following pattern: 
                  { "shape-name": "shape-template" }`);
            }
            for (const shapeName in icons) {
                if (icons.hasOwnProperty(shapeName)) {
                    this.setIconTemplate(shapeName, icons[shapeName]);
                }
            }
        }
        /**
         * @param {?} shapeName
         * @return {?}
         */
        has(shapeName) {
            return !!this.iconShapeSources[shapeName];
        }
        /**
         * @param {?=} shapeName
         * @return {?}
         */
        get(shapeName) {
            // if shapeName is not given, return all icon templates.
            if (!shapeName) {
                return this.iconShapeSources;
            }
            if (typeof shapeName !== 'string') {
                throw new TypeError('Only string argument is allowed in this method.');
            }
            return this.iconShapeSources[shapeName];
        }
        /**
         * @param {?=} aliases
         * @return {?}
         */
        alias(aliases) {
            if (typeof aliases !== 'object') {
                throw new Error(`The argument must be an object literal passed in the following pattern: 
                  { "shape-name": ["alias-name", ...] }`);
            }
            for (const shapeName in aliases) {
                if (aliases.hasOwnProperty(shapeName)) {
                    if (this.iconShapeSources.hasOwnProperty(shapeName)) {
                        // set an alias to the icon if it exists in iconShapeSources.
                        this.setIconAliases(this.iconShapeSources, shapeName, aliases[shapeName]);
                    }
                    else if (this.iconShapeSources.hasOwnProperty(shapeName)) {
                        // set an alias to the icon if it exists in iconShapeSources.
                        this.setIconAliases(this.iconShapeSources, shapeName, aliases[shapeName]);
                    }
                    else {
                        throw new Error(`An icon "${shapeName}" you are trying to set aliases to doesn't exist in the Clarity Icons sets!`);
                    }
                }
            }
        }
    }
    ApiModule.ClarityIconsApi = ClarityIconsApi;
    if (false) {
        /** @type {?} */
        ClarityIconsApi.prototype.iconShapeSources;
    }
    ApiModule.instance = new ClarityIconsApi();
})(ApiModule || (ApiModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9pY29ucy8iLCJzb3VyY2VzIjpbImFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUcxQyxNQUFNLEtBQVcsU0FBUyxDQXFIekI7QUFySEQsV0FBaUIsU0FBUztJQUN4QixNQUFhLGVBQWU7UUFBNUI7WUFDVSxxQkFBZ0IsR0FBcUIsRUFBRSxDQUFDO1FBZ0hsRCxDQUFDOzs7OztRQTlHUyxZQUFZLENBQUMsSUFBWTtZQUMvQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7YUFDcEU7WUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsaUVBQWlFLENBQUMsQ0FBQzthQUNwRjtZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQzs7Ozs7O1FBRU8sZUFBZSxDQUFDLFNBQWlCLEVBQUUsYUFBcUI7O2tCQUN4RCxvQkFBb0IsR0FBRyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBRWpELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDaEMsdUNBQXVDO2dCQUN2QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDcEMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3pDO2dCQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxvQkFBb0IsQ0FBQztnQkFFeEQsMkJBQTJCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsb0JBQW9C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QUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztxQkFDM0U7eUJBQU07d0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FDYixZQUFZLFNBQVMsNkVBQTZFLENBQ25HLENBQUM7cUJBQ0g7aUJBQ0Y7YUFDRjtRQUNILENBQUM7S0FDRjtJQWpIWSx5QkFBZSxrQkFpSDNCLENBQUE7OztRQWhIQywyQ0FBZ0Q7O0lBa0hyQyxrQkFBUSxHQUFHLElBQUksZUFBZSxFQUFFO0FBQy9DLENBQUMsRUFySGdCLFNBQVMsS0FBVCxTQUFTLFFBcUh6QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgSWNvbkFsaWFzLCBJY29uU2hhcGVTb3VyY2VzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2ljb24taW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTaGFwZVRlbXBsYXRlT2JzZXJ2ZXJNb2R1bGUgfSBmcm9tICcuL3V0aWxzL3NoYXBlLXRlbXBsYXRlLW9ic2VydmVyJztcbmltcG9ydCB7IEVsZW1lbnRNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnQnO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby1uYW1lc3BhY2UgKi9cbmV4cG9ydCBuYW1lc3BhY2UgQXBpTW9kdWxlIHtcbiAgZXhwb3J0IGNsYXNzIENsYXJpdHlJY29uc0FwaSB7XG4gICAgcHJpdmF0ZSBpY29uU2hhcGVTb3VyY2VzOiBJY29uU2hhcGVTb3VyY2VzID0ge307XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlTmFtZShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIGlmIChuYW1lLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoYXBlIG5hbWUgb3IgYWxpYXMgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmchJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICgvXFxzLy50ZXN0KG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2hhcGUgbmFtZSBvciBhbGlhcyBtdXN0IG5vdCBjb250YWluIGFueSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMhJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0SWNvblRlbXBsYXRlKHNoYXBlTmFtZTogc3RyaW5nLCBzaGFwZVRlbXBsYXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGNvbnN0IHRyaW1tZWRTaGFwZVRlbXBsYXRlID0gc2hhcGVUZW1wbGF0ZS50cmltKCk7XG5cbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlTmFtZShzaGFwZU5hbWUpKSB7XG4gICAgICAgIC8vIGlmIHRoZSBzaGFwZSBuYW1lIGV4aXN0cywgZGVsZXRlIGl0LlxuICAgICAgICBpZiAodGhpcy5pY29uU2hhcGVTb3VyY2VzW3NoYXBlTmFtZV0pIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5pY29uU2hhcGVTb3VyY2VzW3NoYXBlTmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmljb25TaGFwZVNvdXJjZXNbc2hhcGVOYW1lXSA9IHRyaW1tZWRTaGFwZVRlbXBsYXRlO1xuXG4gICAgICAgIFNoYXBlVGVtcGxhdGVPYnNlcnZlck1vZHVsZS5pbnN0YW5jZS5lbWl0Q2hhbmdlcyhzaGFwZU5hbWUsIHRyaW1tZWRTaGFwZVRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEljb25BbGlhc2VzKHRlbXBsYXRlczogSWNvblNoYXBlU291cmNlcywgc2hhcGVOYW1lOiBzdHJpbmcsIGFsaWFzTmFtZXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICBmb3IgKGNvbnN0IGFsaWFzTmFtZSBvZiBhbGlhc05hbWVzKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlTmFtZShhbGlhc05hbWUpKSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRlbXBsYXRlcywgYWxpYXNOYW1lLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGVtcGxhdGVzW3NoYXBlTmFtZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoaWNvbnM/OiBJY29uU2hhcGVTb3VyY2VzKSB7XG4gICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBhIGdsb2JhbCBvYmplY3QgY2FsbGVkIFwiQ2xhcml0eUljb25zXCJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAod2luZG93ICYmICF3aW5kb3cuaGFzT3duUHJvcGVydHkoJ0NsYXJpdHlJY29ucycpKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBhIGdsb2JhbCBvYmplY3QgY2FsbGVkIFwiQ2xhcml0eUljb25zXCIgdG8gZXhwb3NlIHRoZSBDbGFyaXR5SWNvbnNBcGkuXG4gICAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgICAgICAgd2luZG93WydDbGFyaXR5SWNvbnMnXSA9IGluc3RhbmNlO1xuXG4gICAgICAgICAgLy8gRGVmaW5pbmcgY2xyLWljb24gY3VzdG9tIGVsZW1lbnRcbiAgICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Nsci1pY29uJywgRWxlbWVudE1vZHVsZS5DbGFyaXR5SWNvbkVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaWNvbnMpIHtcbiAgICAgICAgaW5zdGFuY2UuYWRkKGljb25zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGQoaWNvbnM/OiBJY29uU2hhcGVTb3VyY2VzKTogdm9pZCB7XG4gICAgICBpZiAodHlwZW9mIGljb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBhcmd1bWVudCBtdXN0IGJlIGFuIG9iamVjdCBsaXRlcmFsIHBhc3NlZCBpbiB0aGUgZm9sbG93aW5nIHBhdHRlcm46IFxuICAgICAgICAgICAgICAgICAgeyBcInNoYXBlLW5hbWVcIjogXCJzaGFwZS10ZW1wbGF0ZVwiIH1gKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBzaGFwZU5hbWUgaW4gaWNvbnMpIHtcbiAgICAgICAgaWYgKGljb25zLmhhc093blByb3BlcnR5KHNoYXBlTmFtZSkpIHtcbiAgICAgICAgICB0aGlzLnNldEljb25UZW1wbGF0ZShzaGFwZU5hbWUsIGljb25zW3NoYXBlTmFtZV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFzKHNoYXBlTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gISF0aGlzLmljb25TaGFwZVNvdXJjZXNbc2hhcGVOYW1lXTtcbiAgICB9XG5cbiAgICBnZXQoc2hhcGVOYW1lPzogc3RyaW5nKTogYW55IHtcbiAgICAgIC8vIGlmIHNoYXBlTmFtZSBpcyBub3QgZ2l2ZW4sIHJldHVybiBhbGwgaWNvbiB0ZW1wbGF0ZXMuXG4gICAgICBpZiAoIXNoYXBlTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pY29uU2hhcGVTb3VyY2VzO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNoYXBlTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT25seSBzdHJpbmcgYXJndW1lbnQgaXMgYWxsb3dlZCBpbiB0aGlzIG1ldGhvZC4nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaWNvblNoYXBlU291cmNlc1tzaGFwZU5hbWVdO1xuICAgIH1cblxuICAgIGFsaWFzKGFsaWFzZXM/OiBJY29uQWxpYXMpOiB2b2lkIHtcbiAgICAgIGlmICh0eXBlb2YgYWxpYXNlcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QgbGl0ZXJhbCBwYXNzZWQgaW4gdGhlIGZvbGxvd2luZyBwYXR0ZXJuOiBcbiAgICAgICAgICAgICAgICAgIHsgXCJzaGFwZS1uYW1lXCI6IFtcImFsaWFzLW5hbWVcIiwgLi4uXSB9YCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3Qgc2hhcGVOYW1lIGluIGFsaWFzZXMpIHtcbiAgICAgICAgaWYgKGFsaWFzZXMuaGFzT3duUHJvcGVydHkoc2hhcGVOYW1lKSkge1xuICAgICAgICAgIGlmICh0aGlzLmljb25TaGFwZVNvdXJjZXMuaGFzT3duUHJvcGVydHkoc2hhcGVOYW1lKSkge1xuICAgICAgICAgICAgLy8gc2V0IGFuIGFsaWFzIHRvIHRoZSBpY29uIGlmIGl0IGV4aXN0cyBpbiBpY29uU2hhcGVTb3VyY2VzLlxuICAgICAgICAgICAgdGhpcy5zZXRJY29uQWxpYXNlcyh0aGlzLmljb25TaGFwZVNvdXJjZXMsIHNoYXBlTmFtZSwgYWxpYXNlc1tzaGFwZU5hbWVdKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWNvblNoYXBlU291cmNlcy5oYXNPd25Qcm9wZXJ0eShzaGFwZU5hbWUpKSB7XG4gICAgICAgICAgICAvLyBzZXQgYW4gYWxpYXMgdG8gdGhlIGljb24gaWYgaXQgZXhpc3RzIGluIGljb25TaGFwZVNvdXJjZXMuXG4gICAgICAgICAgICB0aGlzLnNldEljb25BbGlhc2VzKHRoaXMuaWNvblNoYXBlU291cmNlcywgc2hhcGVOYW1lLCBhbGlhc2VzW3NoYXBlTmFtZV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBBbiBpY29uIFwiJHtzaGFwZU5hbWV9XCIgeW91IGFyZSB0cnlpbmcgdG8gc2V0IGFsaWFzZXMgdG8gZG9lc24ndCBleGlzdCBpbiB0aGUgQ2xhcml0eSBJY29ucyBzZXRzIWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNvbnN0IGluc3RhbmNlID0gbmV3IENsYXJpdHlJY29uc0FwaSgpO1xufVxuIl19