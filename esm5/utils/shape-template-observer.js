/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/* tslint:disable:no-namespace */
export var ShapeTemplateObserverModule;
(function (ShapeTemplateObserverModule) {
    ShapeTemplateObserverModule.changeHandlerCallbacks = {};
    var ShapeTemplateObserver = /** @class */ (function () {
        function ShapeTemplateObserver() {
            this.callbacks = ShapeTemplateObserverModule.changeHandlerCallbacks;
        }
        /**
         * @param {?} shapeName
         * @param {?} changeHandlerCallback
         * @return {?}
         */
        ShapeTemplateObserver.prototype.subscribeTo = /**
         * @param {?} shapeName
         * @param {?} changeHandlerCallback
         * @return {?}
         */
        function (shapeName, changeHandlerCallback) {
            var _this = this;
            if (!this.callbacks[shapeName]) {
                this.callbacks[shapeName] = [changeHandlerCallback];
            }
            else {
                if (this.callbacks[shapeName].indexOf(changeHandlerCallback) === -1) {
                    this.callbacks[shapeName].push(changeHandlerCallback);
                }
            }
            // this returned function give users an ability to remove the subscription
            return function () {
                /** @type {?} */
                var removeAt = _this.callbacks[shapeName].indexOf(changeHandlerCallback);
                _this.callbacks[shapeName].splice(removeAt, 1);
                // if the array is empty, remove the property from the callbacks
                if (_this.callbacks[shapeName].length === 0) {
                    delete _this.callbacks[shapeName];
                }
            };
        };
        /**
         * @param {?} shapeName
         * @param {?} template
         * @return {?}
         */
        ShapeTemplateObserver.prototype.emitChanges = /**
         * @param {?} shapeName
         * @param {?} template
         * @return {?}
         */
        function (shapeName, template) {
            if (this.callbacks[shapeName]) {
                // this will emit changes to all observers
                // by calling their callback functions on template changes
                this.callbacks[shapeName].map(function (changeHandlerCallback) {
                    changeHandlerCallback(template);
                });
            }
        };
        return ShapeTemplateObserver;
    }());
    if (false) {
        /** @type {?} */
        ShapeTemplateObserver.prototype.callbacks;
    }
    ShapeTemplateObserverModule.instance = new ShapeTemplateObserver();
})(ShapeTemplateObserverModule || (ShapeTemplateObserverModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcGUtdGVtcGxhdGUtb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2ljb25zLyIsInNvdXJjZXMiOlsidXRpbHMvc2hhcGUtdGVtcGxhdGUtb2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSxNQUFNLEtBQVcsMkJBQTJCLENBdUMzQztBQXZDRCxXQUFpQiwyQkFBMkI7SUFDN0Isa0RBQXNCLEdBQTZCLEVBQUU7SUFFbEU7UUFBQTtZQUNVLGNBQVMsR0FBNkIsNEJBQUEsc0JBQXNCLENBQUM7UUFnQ3ZFLENBQUM7Ozs7OztRQTlCUSwyQ0FBVzs7Ozs7UUFBbEIsVUFBbUIsU0FBaUIsRUFBRSxxQkFBK0I7WUFBckUsaUJBbUJDO1lBbEJDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUNyRDtpQkFBTTtnQkFDTCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ25FLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7aUJBQ3ZEO2FBQ0Y7WUFFRCwwRUFBMEU7WUFDMUUsT0FBTzs7b0JBQ0MsUUFBUSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDO2dCQUN6RSxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRTlDLGdFQUFnRTtnQkFDaEUsSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQzFDLE9BQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDbEM7WUFDSCxDQUFDLENBQUM7UUFDSixDQUFDOzs7Ozs7UUFFTSwyQ0FBVzs7Ozs7UUFBbEIsVUFBbUIsU0FBaUIsRUFBRSxRQUFnQjtZQUNwRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzdCLDBDQUEwQztnQkFDMUMsMERBQTBEO2dCQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLHFCQUErQjtvQkFDNUQscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDO1FBQ0gsNEJBQUM7SUFBRCxDQUFDLEFBakNELElBaUNDOzs7UUFoQ0MsMENBQXFFOztJQWtDMUQsb0NBQVEsR0FBRyxJQUFJLHFCQUFxQixFQUFFO0FBQ3JELENBQUMsRUF2Q2dCLDJCQUEyQixLQUEzQiwyQkFBMkIsUUF1QzNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxNyBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IFNoYXBlVGVtcGxhdGVPYnNlcnZhYmxlcyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaWNvbi1pbnRlcmZhY2VzJztcblxuLyogdHNsaW50OmRpc2FibGU6bm8tbmFtZXNwYWNlICovXG5leHBvcnQgbmFtZXNwYWNlIFNoYXBlVGVtcGxhdGVPYnNlcnZlck1vZHVsZSB7XG4gIGV4cG9ydCBjb25zdCBjaGFuZ2VIYW5kbGVyQ2FsbGJhY2tzOiBTaGFwZVRlbXBsYXRlT2JzZXJ2YWJsZXMgPSB7fTtcblxuICBjbGFzcyBTaGFwZVRlbXBsYXRlT2JzZXJ2ZXIge1xuICAgIHByaXZhdGUgY2FsbGJhY2tzOiBTaGFwZVRlbXBsYXRlT2JzZXJ2YWJsZXMgPSBjaGFuZ2VIYW5kbGVyQ2FsbGJhY2tzO1xuXG4gICAgcHVibGljIHN1YnNjcmliZVRvKHNoYXBlTmFtZTogc3RyaW5nLCBjaGFuZ2VIYW5kbGVyQ2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICBpZiAoIXRoaXMuY2FsbGJhY2tzW3NoYXBlTmFtZV0pIHtcbiAgICAgICAgdGhpcy5jYWxsYmFja3Nbc2hhcGVOYW1lXSA9IFtjaGFuZ2VIYW5kbGVyQ2FsbGJhY2tdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tzW3NoYXBlTmFtZV0uaW5kZXhPZihjaGFuZ2VIYW5kbGVyQ2FsbGJhY2spID09PSAtMSkge1xuICAgICAgICAgIHRoaXMuY2FsbGJhY2tzW3NoYXBlTmFtZV0ucHVzaChjaGFuZ2VIYW5kbGVyQ2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHRoaXMgcmV0dXJuZWQgZnVuY3Rpb24gZ2l2ZSB1c2VycyBhbiBhYmlsaXR5IHRvIHJlbW92ZSB0aGUgc3Vic2NyaXB0aW9uXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjb25zdCByZW1vdmVBdCA9IHRoaXMuY2FsbGJhY2tzW3NoYXBlTmFtZV0uaW5kZXhPZihjaGFuZ2VIYW5kbGVyQ2FsbGJhY2spO1xuICAgICAgICB0aGlzLmNhbGxiYWNrc1tzaGFwZU5hbWVdLnNwbGljZShyZW1vdmVBdCwgMSk7XG5cbiAgICAgICAgLy8gaWYgdGhlIGFycmF5IGlzIGVtcHR5LCByZW1vdmUgdGhlIHByb3BlcnR5IGZyb20gdGhlIGNhbGxiYWNrc1xuICAgICAgICBpZiAodGhpcy5jYWxsYmFja3Nbc2hhcGVOYW1lXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5jYWxsYmFja3Nbc2hhcGVOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW1pdENoYW5nZXMoc2hhcGVOYW1lOiBzdHJpbmcsIHRlbXBsYXRlOiBzdHJpbmcpIHtcbiAgICAgIGlmICh0aGlzLmNhbGxiYWNrc1tzaGFwZU5hbWVdKSB7XG4gICAgICAgIC8vIHRoaXMgd2lsbCBlbWl0IGNoYW5nZXMgdG8gYWxsIG9ic2VydmVyc1xuICAgICAgICAvLyBieSBjYWxsaW5nIHRoZWlyIGNhbGxiYWNrIGZ1bmN0aW9ucyBvbiB0ZW1wbGF0ZSBjaGFuZ2VzXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzW3NoYXBlTmFtZV0ubWFwKChjaGFuZ2VIYW5kbGVyQ2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgICAgY2hhbmdlSGFuZGxlckNhbGxiYWNrKHRlbXBsYXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNvbnN0IGluc3RhbmNlID0gbmV3IFNoYXBlVGVtcGxhdGVPYnNlcnZlcigpO1xufVxuIl19