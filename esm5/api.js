/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
    var ClarityIconsApi = /** @class */ (function () {
        function ClarityIconsApi() {
            this.iconShapeSources = {};
        }
        /**
         * @param {?} name
         * @return {?}
         */
        ClarityIconsApi.prototype.validateName = /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            if (name.length === 0) {
                throw new Error('Shape name or alias must be a non-empty string!');
            }
            if (/\s/.test(name)) {
                throw new Error('Shape name or alias must not contain any whitespace characters!');
            }
            return true;
        };
        /**
         * @param {?} shapeName
         * @param {?} shapeTemplate
         * @return {?}
         */
        ClarityIconsApi.prototype.setIconTemplate = /**
         * @param {?} shapeName
         * @param {?} shapeTemplate
         * @return {?}
         */
        function (shapeName, shapeTemplate) {
            /** @type {?} */
            var trimmedShapeTemplate = shapeTemplate.trim();
            if (this.validateName(shapeName)) {
                // if the shape name exists, delete it.
                if (this.iconShapeSources[shapeName]) {
                    delete this.iconShapeSources[shapeName];
                }
                this.iconShapeSources[shapeName] = trimmedShapeTemplate;
                ShapeTemplateObserverModule.instance.emitChanges(shapeName, trimmedShapeTemplate);
            }
        };
        /**
         * @param {?} templates
         * @param {?} shapeName
         * @param {?} aliasNames
         * @return {?}
         */
        ClarityIconsApi.prototype.setIconAliases = /**
         * @param {?} templates
         * @param {?} shapeName
         * @param {?} aliasNames
         * @return {?}
         */
        function (templates, shapeName, aliasNames) {
            var e_1, _a;
            try {
                for (var aliasNames_1 = tslib_1.__values(aliasNames), aliasNames_1_1 = aliasNames_1.next(); !aliasNames_1_1.done; aliasNames_1_1 = aliasNames_1.next()) {
                    var aliasName = aliasNames_1_1.value;
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
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (aliasNames_1_1 && !aliasNames_1_1.done && (_a = aliasNames_1.return)) _a.call(aliasNames_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * @param {?=} icons
         * @return {?}
         */
        ClarityIconsApi.prototype.init = /**
         * @param {?=} icons
         * @return {?}
         */
        function (icons) {
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
        };
        /**
         * @param {?=} icons
         * @return {?}
         */
        ClarityIconsApi.prototype.add = /**
         * @param {?=} icons
         * @return {?}
         */
        function (icons) {
            if (typeof icons !== 'object') {
                throw new Error("The argument must be an object literal passed in the following pattern: \n                  { \"shape-name\": \"shape-template\" }");
            }
            for (var shapeName in icons) {
                if (icons.hasOwnProperty(shapeName)) {
                    this.setIconTemplate(shapeName, icons[shapeName]);
                }
            }
        };
        /**
         * @param {?} shapeName
         * @return {?}
         */
        ClarityIconsApi.prototype.has = /**
         * @param {?} shapeName
         * @return {?}
         */
        function (shapeName) {
            return !!this.iconShapeSources[shapeName];
        };
        /**
         * @param {?=} shapeName
         * @return {?}
         */
        ClarityIconsApi.prototype.get = /**
         * @param {?=} shapeName
         * @return {?}
         */
        function (shapeName) {
            // if shapeName is not given, return all icon templates.
            if (!shapeName) {
                return this.iconShapeSources;
            }
            if (typeof shapeName !== 'string') {
                throw new TypeError('Only string argument is allowed in this method.');
            }
            return this.iconShapeSources[shapeName];
        };
        /**
         * @param {?=} aliases
         * @return {?}
         */
        ClarityIconsApi.prototype.alias = /**
         * @param {?=} aliases
         * @return {?}
         */
        function (aliases) {
            if (typeof aliases !== 'object') {
                throw new Error("The argument must be an object literal passed in the following pattern: \n                  { \"shape-name\": [\"alias-name\", ...] }");
            }
            for (var shapeName in aliases) {
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
                        throw new Error("An icon \"" + shapeName + "\" you are trying to set aliases to doesn't exist in the Clarity Icons sets!");
                    }
                }
            }
        };
        return ClarityIconsApi;
    }());
    ApiModule.ClarityIconsApi = ClarityIconsApi;
    if (false) {
        /** @type {?} */
        ClarityIconsApi.prototype.iconShapeSources;
    }
    ApiModule.instance = new ClarityIconsApi();
})(ApiModule || (ApiModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9pY29ucy8iLCJzb3VyY2VzIjpbImFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFHMUMsTUFBTSxLQUFXLFNBQVMsQ0FxSHpCO0FBckhELFdBQWlCLFNBQVM7SUFDeEI7UUFBQTtZQUNVLHFCQUFnQixHQUFxQixFQUFFLENBQUM7UUFnSGxELENBQUM7Ozs7O1FBOUdTLHNDQUFZOzs7O1FBQXBCLFVBQXFCLElBQVk7WUFDL0IsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO2FBQ3BFO1lBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7YUFDcEY7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7Ozs7OztRQUVPLHlDQUFlOzs7OztRQUF2QixVQUF3QixTQUFpQixFQUFFLGFBQXFCOztnQkFDeEQsb0JBQW9CLEdBQUcsYUFBYSxDQUFDLElBQUksRUFBRTtZQUVqRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ2hDLHVDQUF1QztnQkFDdkMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ3BDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN6QztnQkFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsb0JBQW9CLENBQUM7Z0JBRXhELDJCQUEyQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FB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RSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztxQkFDM0U7eUJBQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO3dCQUMxRCw2REFBNkQ7d0JBQzdELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztxQkFDM0U7eUJBQU07d0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FDYixlQUFZLFNBQVMsaUZBQTZFLENBQ25HLENBQUM7cUJBQ0g7aUJBQ0Y7YUFDRjtRQUNILENBQUM7UUFDSCxzQkFBQztJQUFELENBQUMsQUFqSEQsSUFpSEM7SUFqSFkseUJBQWUsa0JBaUgzQixDQUFBOzs7UUFoSEMsMkNBQWdEOztJQWtIckMsa0JBQVEsR0FBRyxJQUFJLGVBQWUsRUFBRTtBQUMvQyxDQUFDLEVBckhnQixTQUFTLEtBQVQsU0FBUyxRQXFIekIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IEljb25BbGlhcywgSWNvblNoYXBlU291cmNlcyB9IGZyb20gJy4vaW50ZXJmYWNlcy9pY29uLWludGVyZmFjZXMnO1xuaW1wb3J0IHsgU2hhcGVUZW1wbGF0ZU9ic2VydmVyTW9kdWxlIH0gZnJvbSAnLi91dGlscy9zaGFwZS10ZW1wbGF0ZS1vYnNlcnZlcic7XG5pbXBvcnQgeyBFbGVtZW50TW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50JztcblxuLyogdHNsaW50OmRpc2FibGU6bm8tbmFtZXNwYWNlICovXG5leHBvcnQgbmFtZXNwYWNlIEFwaU1vZHVsZSB7XG4gIGV4cG9ydCBjbGFzcyBDbGFyaXR5SWNvbnNBcGkge1xuICAgIHByaXZhdGUgaWNvblNoYXBlU291cmNlczogSWNvblNoYXBlU291cmNlcyA9IHt9O1xuXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZU5hbWUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICBpZiAobmFtZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGFwZSBuYW1lIG9yIGFsaWFzIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nIScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoL1xccy8udGVzdChuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoYXBlIG5hbWUgb3IgYWxpYXMgbXVzdCBub3QgY29udGFpbiBhbnkgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEljb25UZW1wbGF0ZShzaGFwZU5hbWU6IHN0cmluZywgc2hhcGVUZW1wbGF0ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICBjb25zdCB0cmltbWVkU2hhcGVUZW1wbGF0ZSA9IHNoYXBlVGVtcGxhdGUudHJpbSgpO1xuXG4gICAgICBpZiAodGhpcy52YWxpZGF0ZU5hbWUoc2hhcGVOYW1lKSkge1xuICAgICAgICAvLyBpZiB0aGUgc2hhcGUgbmFtZSBleGlzdHMsIGRlbGV0ZSBpdC5cbiAgICAgICAgaWYgKHRoaXMuaWNvblNoYXBlU291cmNlc1tzaGFwZU5hbWVdKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuaWNvblNoYXBlU291cmNlc1tzaGFwZU5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pY29uU2hhcGVTb3VyY2VzW3NoYXBlTmFtZV0gPSB0cmltbWVkU2hhcGVUZW1wbGF0ZTtcblxuICAgICAgICBTaGFwZVRlbXBsYXRlT2JzZXJ2ZXJNb2R1bGUuaW5zdGFuY2UuZW1pdENoYW5nZXMoc2hhcGVOYW1lLCB0cmltbWVkU2hhcGVUZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJY29uQWxpYXNlcyh0ZW1wbGF0ZXM6IEljb25TaGFwZVNvdXJjZXMsIHNoYXBlTmFtZTogc3RyaW5nLCBhbGlhc05hbWVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgICAgZm9yIChjb25zdCBhbGlhc05hbWUgb2YgYWxpYXNOYW1lcykge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZU5hbWUoYWxpYXNOYW1lKSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0ZW1wbGF0ZXMsIGFsaWFzTmFtZSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlc1tzaGFwZU5hbWVdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KGljb25zPzogSWNvblNoYXBlU291cmNlcykge1xuICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYSBnbG9iYWwgb2JqZWN0IGNhbGxlZCBcIkNsYXJpdHlJY29uc1wiXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHdpbmRvdyAmJiAhd2luZG93Lmhhc093blByb3BlcnR5KCdDbGFyaXR5SWNvbnMnKSkge1xuICAgICAgICAgIC8vIFNldHRpbmcgYSBnbG9iYWwgb2JqZWN0IGNhbGxlZCBcIkNsYXJpdHlJY29uc1wiIHRvIGV4cG9zZSB0aGUgQ2xhcml0eUljb25zQXBpLlxuICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgICAgICAgIHdpbmRvd1snQ2xhcml0eUljb25zJ10gPSBpbnN0YW5jZTtcblxuICAgICAgICAgIC8vIERlZmluaW5nIGNsci1pY29uIGN1c3RvbSBlbGVtZW50XG4gICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjbHItaWNvbicsIEVsZW1lbnRNb2R1bGUuQ2xhcml0eUljb25FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGljb25zKSB7XG4gICAgICAgIGluc3RhbmNlLmFkZChpY29ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWRkKGljb25zPzogSWNvblNoYXBlU291cmNlcyk6IHZvaWQge1xuICAgICAgaWYgKHR5cGVvZiBpY29ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QgbGl0ZXJhbCBwYXNzZWQgaW4gdGhlIGZvbGxvd2luZyBwYXR0ZXJuOiBcbiAgICAgICAgICAgICAgICAgIHsgXCJzaGFwZS1uYW1lXCI6IFwic2hhcGUtdGVtcGxhdGVcIiB9YCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3Qgc2hhcGVOYW1lIGluIGljb25zKSB7XG4gICAgICAgIGlmIChpY29ucy5oYXNPd25Qcm9wZXJ0eShzaGFwZU5hbWUpKSB7XG4gICAgICAgICAgdGhpcy5zZXRJY29uVGVtcGxhdGUoc2hhcGVOYW1lLCBpY29uc1tzaGFwZU5hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGhhcyhzaGFwZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICEhdGhpcy5pY29uU2hhcGVTb3VyY2VzW3NoYXBlTmFtZV07XG4gICAgfVxuXG4gICAgZ2V0KHNoYXBlTmFtZT86IHN0cmluZyk6IGFueSB7XG4gICAgICAvLyBpZiBzaGFwZU5hbWUgaXMgbm90IGdpdmVuLCByZXR1cm4gYWxsIGljb24gdGVtcGxhdGVzLlxuICAgICAgaWYgKCFzaGFwZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWNvblNoYXBlU291cmNlcztcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBzaGFwZU5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09ubHkgc3RyaW5nIGFyZ3VtZW50IGlzIGFsbG93ZWQgaW4gdGhpcyBtZXRob2QuJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmljb25TaGFwZVNvdXJjZXNbc2hhcGVOYW1lXTtcbiAgICB9XG5cbiAgICBhbGlhcyhhbGlhc2VzPzogSWNvbkFsaWFzKTogdm9pZCB7XG4gICAgICBpZiAodHlwZW9mIGFsaWFzZXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0IGxpdGVyYWwgcGFzc2VkIGluIHRoZSBmb2xsb3dpbmcgcGF0dGVybjogXG4gICAgICAgICAgICAgICAgICB7IFwic2hhcGUtbmFtZVwiOiBbXCJhbGlhcy1uYW1lXCIsIC4uLl0gfWApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IHNoYXBlTmFtZSBpbiBhbGlhc2VzKSB7XG4gICAgICAgIGlmIChhbGlhc2VzLmhhc093blByb3BlcnR5KHNoYXBlTmFtZSkpIHtcbiAgICAgICAgICBpZiAodGhpcy5pY29uU2hhcGVTb3VyY2VzLmhhc093blByb3BlcnR5KHNoYXBlTmFtZSkpIHtcbiAgICAgICAgICAgIC8vIHNldCBhbiBhbGlhcyB0byB0aGUgaWNvbiBpZiBpdCBleGlzdHMgaW4gaWNvblNoYXBlU291cmNlcy5cbiAgICAgICAgICAgIHRoaXMuc2V0SWNvbkFsaWFzZXModGhpcy5pY29uU2hhcGVTb3VyY2VzLCBzaGFwZU5hbWUsIGFsaWFzZXNbc2hhcGVOYW1lXSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmljb25TaGFwZVNvdXJjZXMuaGFzT3duUHJvcGVydHkoc2hhcGVOYW1lKSkge1xuICAgICAgICAgICAgLy8gc2V0IGFuIGFsaWFzIHRvIHRoZSBpY29uIGlmIGl0IGV4aXN0cyBpbiBpY29uU2hhcGVTb3VyY2VzLlxuICAgICAgICAgICAgdGhpcy5zZXRJY29uQWxpYXNlcyh0aGlzLmljb25TaGFwZVNvdXJjZXMsIHNoYXBlTmFtZSwgYWxpYXNlc1tzaGFwZU5hbWVdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgQW4gaWNvbiBcIiR7c2hhcGVOYW1lfVwiIHlvdSBhcmUgdHJ5aW5nIHRvIHNldCBhbGlhc2VzIHRvIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIENsYXJpdHkgSWNvbnMgc2V0cyFgXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjb25zdCBpbnN0YW5jZSA9IG5ldyBDbGFyaXR5SWNvbnNBcGkoKTtcbn1cbiJdfQ==