/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/* tslint:disable:no-namespace */
export var ShapeTemplateObserverModule;
(function (ShapeTemplateObserverModule) {
    ShapeTemplateObserverModule.changeHandlerCallbacks = {};
    class ShapeTemplateObserver {
        constructor() {
            this.callbacks = ShapeTemplateObserverModule.changeHandlerCallbacks;
        }
        /**
         * @param {?} shapeName
         * @param {?} changeHandlerCallback
         * @return {?}
         */
        subscribeTo(shapeName, changeHandlerCallback) {
            if (!this.callbacks[shapeName]) {
                this.callbacks[shapeName] = [changeHandlerCallback];
            }
            else {
                if (this.callbacks[shapeName].indexOf(changeHandlerCallback) === -1) {
                    this.callbacks[shapeName].push(changeHandlerCallback);
                }
            }
            // this returned function give users an ability to remove the subscription
            return () => {
                /** @type {?} */
                const removeAt = this.callbacks[shapeName].indexOf(changeHandlerCallback);
                this.callbacks[shapeName].splice(removeAt, 1);
                // if the array is empty, remove the property from the callbacks
                if (this.callbacks[shapeName].length === 0) {
                    delete this.callbacks[shapeName];
                }
            };
        }
        /**
         * @param {?} shapeName
         * @param {?} template
         * @return {?}
         */
        emitChanges(shapeName, template) {
            if (this.callbacks[shapeName]) {
                // this will emit changes to all observers
                // by calling their callback functions on template changes
                this.callbacks[shapeName].map((changeHandlerCallback) => {
                    changeHandlerCallback(template);
                });
            }
        }
    }
    if (false) {
        /** @type {?} */
        ShapeTemplateObserver.prototype.callbacks;
    }
    ShapeTemplateObserverModule.instance = new ShapeTemplateObserver();
})(ShapeTemplateObserverModule || (ShapeTemplateObserverModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcGUtdGVtcGxhdGUtb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2ljb25zLyIsInNvdXJjZXMiOlsidXRpbHMvc2hhcGUtdGVtcGxhdGUtb2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSxNQUFNLEtBQVcsMkJBQTJCLENBdUMzQztBQXZDRCxXQUFpQiwyQkFBMkI7SUFDN0Isa0RBQXNCLEdBQTZCLEVBQUU7SUFFbEUsTUFBTSxxQkFBcUI7UUFBM0I7WUFDVSxjQUFTLEdBQTZCLDRCQUFBLHNCQUFzQixDQUFDO1FBZ0N2RSxDQUFDOzs7Ozs7UUE5QlEsV0FBVyxDQUFDLFNBQWlCLEVBQUUscUJBQStCO1lBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUNyRDtpQkFBTTtnQkFDTCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ25FLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7aUJBQ3ZEO2FBQ0Y7WUFFRCwwRUFBMEU7WUFDMUUsT0FBTyxHQUFHLEVBQUU7O3NCQUNKLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztnQkFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUU5QyxnRUFBZ0U7Z0JBQ2hFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUMxQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ2xDO1lBQ0gsQ0FBQyxDQUFDO1FBQ0osQ0FBQzs7Ozs7O1FBRU0sV0FBVyxDQUFDLFNBQWlCLEVBQUUsUUFBZ0I7WUFDcEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUM3QiwwQ0FBMEM7Z0JBQzFDLDBEQUEwRDtnQkFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBK0IsRUFBRSxFQUFFO29CQUNoRSxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUM7S0FDRjs7O1FBaENDLDBDQUFxRTs7SUFrQzFELG9DQUFRLEdBQUcsSUFBSSxxQkFBcUIsRUFBRTtBQUNyRCxDQUFDLEVBdkNnQiwyQkFBMkIsS0FBM0IsMkJBQTJCLFFBdUMzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTcgVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBTaGFwZVRlbXBsYXRlT2JzZXJ2YWJsZXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ljb24taW50ZXJmYWNlcyc7XG5cbi8qIHRzbGludDpkaXNhYmxlOm5vLW5hbWVzcGFjZSAqL1xuZXhwb3J0IG5hbWVzcGFjZSBTaGFwZVRlbXBsYXRlT2JzZXJ2ZXJNb2R1bGUge1xuICBleHBvcnQgY29uc3QgY2hhbmdlSGFuZGxlckNhbGxiYWNrczogU2hhcGVUZW1wbGF0ZU9ic2VydmFibGVzID0ge307XG5cbiAgY2xhc3MgU2hhcGVUZW1wbGF0ZU9ic2VydmVyIHtcbiAgICBwcml2YXRlIGNhbGxiYWNrczogU2hhcGVUZW1wbGF0ZU9ic2VydmFibGVzID0gY2hhbmdlSGFuZGxlckNhbGxiYWNrcztcblxuICAgIHB1YmxpYyBzdWJzY3JpYmVUbyhzaGFwZU5hbWU6IHN0cmluZywgY2hhbmdlSGFuZGxlckNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgaWYgKCF0aGlzLmNhbGxiYWNrc1tzaGFwZU5hbWVdKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzW3NoYXBlTmFtZV0gPSBbY2hhbmdlSGFuZGxlckNhbGxiYWNrXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrc1tzaGFwZU5hbWVdLmluZGV4T2YoY2hhbmdlSGFuZGxlckNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmNhbGxiYWNrc1tzaGFwZU5hbWVdLnB1c2goY2hhbmdlSGFuZGxlckNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIHJldHVybmVkIGZ1bmN0aW9uIGdpdmUgdXNlcnMgYW4gYWJpbGl0eSB0byByZW1vdmUgdGhlIHN1YnNjcmlwdGlvblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVtb3ZlQXQgPSB0aGlzLmNhbGxiYWNrc1tzaGFwZU5hbWVdLmluZGV4T2YoY2hhbmdlSGFuZGxlckNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5jYWxsYmFja3Nbc2hhcGVOYW1lXS5zcGxpY2UocmVtb3ZlQXQsIDEpO1xuXG4gICAgICAgIC8vIGlmIHRoZSBhcnJheSBpcyBlbXB0eSwgcmVtb3ZlIHRoZSBwcm9wZXJ0eSBmcm9tIHRoZSBjYWxsYmFja3NcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tzW3NoYXBlTmFtZV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuY2FsbGJhY2tzW3NoYXBlTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGVtaXRDaGFuZ2VzKHNoYXBlTmFtZTogc3RyaW5nLCB0ZW1wbGF0ZTogc3RyaW5nKSB7XG4gICAgICBpZiAodGhpcy5jYWxsYmFja3Nbc2hhcGVOYW1lXSkge1xuICAgICAgICAvLyB0aGlzIHdpbGwgZW1pdCBjaGFuZ2VzIHRvIGFsbCBvYnNlcnZlcnNcbiAgICAgICAgLy8gYnkgY2FsbGluZyB0aGVpciBjYWxsYmFjayBmdW5jdGlvbnMgb24gdGVtcGxhdGUgY2hhbmdlc1xuICAgICAgICB0aGlzLmNhbGxiYWNrc1tzaGFwZU5hbWVdLm1hcCgoY2hhbmdlSGFuZGxlckNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xuICAgICAgICAgIGNoYW5nZUhhbmRsZXJDYWxsYmFjayh0ZW1wbGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjb25zdCBpbnN0YW5jZSA9IG5ldyBTaGFwZVRlbXBsYXRlT2JzZXJ2ZXIoKTtcbn1cbiJdfQ==