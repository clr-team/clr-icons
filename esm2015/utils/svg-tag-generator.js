/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/** @type {?} */
const BADGED_CLASS_SUBSTRING = '--badged';
/** @type {?} */
const ALERTED_CLASS_SUBSTRING = '--alerted';
/** @type {?} */
const SOLID_CLASS = 'clr-i-solid';
/**
 * @param {?} content
 * @return {?}
 */
export function clrIconSVG(content) {
    /** @type {?} */
    let classes = '';
    if (content.indexOf(BADGED_CLASS_SUBSTRING) > -1) {
        classes += 'can-badge ';
    }
    if (content.indexOf(ALERTED_CLASS_SUBSTRING) > -1) {
        classes += 'can-alert ';
    }
    if (content.indexOf(SOLID_CLASS) > -1) {
        classes += 'has-solid ';
    }
    /** @type {?} */
    let openingTag;
    if (classes) {
        openingTag = `<svg version="1.1" class="${classes}" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" role="img">`;
    }
    else {
        openingTag = `<svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" role="img">`;
    }
    /** @type {?} */
    const closingTag = `</svg>`;
    return openingTag + content + closingTag;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLXRhZy1nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2ljb25zLyIsInNvdXJjZXMiOlsidXRpbHMvc3ZnLXRhZy1nZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztNQU1NLHNCQUFzQixHQUFHLFVBQVU7O01BQ25DLHVCQUF1QixHQUFHLFdBQVc7O01BQ3JDLFdBQVcsR0FBRyxhQUFhOzs7OztBQUVqQyxNQUFNLFVBQVUsVUFBVSxDQUFDLE9BQWU7O1FBQ3BDLE9BQU8sR0FBVyxFQUFFO0lBRXhCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2hELE9BQU8sSUFBSSxZQUFZLENBQUM7S0FDekI7SUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUNqRCxPQUFPLElBQUksWUFBWSxDQUFDO0tBQ3pCO0lBRUQsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3JDLE9BQU8sSUFBSSxZQUFZLENBQUM7S0FDekI7O1FBRUcsVUFBa0I7SUFDdEIsSUFBSSxPQUFPLEVBQUU7UUFDWCxVQUFVLEdBQUcsNkJBQTZCLE9BQU87bUlBQzhFLENBQUM7S0FDakk7U0FBTTtRQUNMLFVBQVUsR0FBRzttSUFDa0gsQ0FBQztLQUNqSTs7VUFDSyxVQUFVLEdBQUcsUUFBUTtJQUUzQixPQUFPLFVBQVUsR0FBRyxPQUFPLEdBQUcsVUFBVSxDQUFDO0FBQzNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmNvbnN0IEJBREdFRF9DTEFTU19TVUJTVFJJTkcgPSAnLS1iYWRnZWQnO1xuY29uc3QgQUxFUlRFRF9DTEFTU19TVUJTVFJJTkcgPSAnLS1hbGVydGVkJztcbmNvbnN0IFNPTElEX0NMQVNTID0gJ2Nsci1pLXNvbGlkJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNsckljb25TVkcoY29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGNsYXNzZXM6IHN0cmluZyA9ICcnO1xuXG4gIGlmIChjb250ZW50LmluZGV4T2YoQkFER0VEX0NMQVNTX1NVQlNUUklORykgPiAtMSkge1xuICAgIGNsYXNzZXMgKz0gJ2Nhbi1iYWRnZSAnO1xuICB9XG5cbiAgaWYgKGNvbnRlbnQuaW5kZXhPZihBTEVSVEVEX0NMQVNTX1NVQlNUUklORykgPiAtMSkge1xuICAgIGNsYXNzZXMgKz0gJ2Nhbi1hbGVydCAnO1xuICB9XG5cbiAgaWYgKGNvbnRlbnQuaW5kZXhPZihTT0xJRF9DTEFTUykgPiAtMSkge1xuICAgIGNsYXNzZXMgKz0gJ2hhcy1zb2xpZCAnO1xuICB9XG5cbiAgbGV0IG9wZW5pbmdUYWc6IHN0cmluZztcbiAgaWYgKGNsYXNzZXMpIHtcbiAgICBvcGVuaW5nVGFnID0gYDxzdmcgdmVyc2lvbj1cIjEuMVwiIGNsYXNzPVwiJHtjbGFzc2VzfVwiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIGZvY3VzYWJsZT1cImZhbHNlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiPmA7XG4gIH0gZWxzZSB7XG4gICAgb3BlbmluZ1RhZyA9IGA8c3ZnIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDM2IDM2XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIj5gO1xuICB9XG4gIGNvbnN0IGNsb3NpbmdUYWcgPSBgPC9zdmc+YDtcblxuICByZXR1cm4gb3BlbmluZ1RhZyArIGNvbnRlbnQgKyBjbG9zaW5nVGFnO1xufVxuIl19