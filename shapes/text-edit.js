(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/clr-icons/shapes/text-edit.umd.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clr-icons/shapes/text-edit.ts":
/*!*******************************************!*\
  !*** ./src/clr-icons/shapes/text-edit.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var svg_tag_generator_1 = __webpack_require__(/*! ../utils/svg-tag-generator */ "./src/clr-icons/utils/svg-tag-generator.ts");
/* tslint:disable:variable-name */
var ClrShapeBoldSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M22.43,17.54a4.67,4.67,0,0,0,2.8-4.37v-.06a4.43,4.43,0,0,0-1.31-3.25,7.09,7.09,0,0,0-5.13-1.73h-7A1.71,1.71,0,0,0,10,9.86V26a1.72,1.72,0,0,0,1.74,1.74h7.33c4.37,0,7.25-1.88,7.25-5.38V22.3C26.32,19.64,24.73,18.32,22.43,17.54ZM13.68,11.4h4.54c2,0,3.15.89,3.15,2.33v.06c0,1.68-1.36,2.49-3.38,2.49H13.68ZM22.37,22c0,1.59-1.31,2.43-3.46,2.43H13.68V19.62h5c2.49,0,3.69.88,3.69,2.37Z\" class=\"clr-i-outline clr-i-outline-path-1\" />");
var ClrShapeBulletListSVG = svg_tag_generator_1.clrIconSVG("<circle cx=\"5.21\" cy=\"9.17\" r=\"2\" class=\"clr-i-outline clr-i-outline-path-1\" /><circle cx=\"5.21\" cy=\"17.17\" r=\"2\" class=\"clr-i-outline clr-i-outline-path-2\" /><circle cx=\"5.21\" cy=\"25.17\" r=\"2\" class=\"clr-i-outline clr-i-outline-path-3\" /><path d=\"M32.42,9a1,1,0,0,0-1-1H10v2H31.42A1,1,0,0,0,32.42,9Z\" class=\"clr-i-outline clr-i-outline-path-4\" /><path d=\"M31.42,16H10v2H31.42a1,1,0,0,0,0-2Z\" class=\"clr-i-outline clr-i-outline-path-5\" /><path d=\"M31.42,24H10v2H31.42a1,1,0,0,0,0-2Z\" class=\"clr-i-outline clr-i-outline-path-6\" />");
var ClrShapeCenterTextSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M30.88,8H5.12a1.1,1.1,0,0,0,0,2.2H30.88a1.1,1.1,0,1,0,0-2.2Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M25.5,16.2a1.1,1.1,0,1,0,0-2.2h-15a1.1,1.1,0,1,0,0,2.2Z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M30.25,20H5.75a1.1,1.1,0,0,0,0,2.2h24.5a1.1,1.1,0,0,0,0-2.2Z\" class=\"clr-i-outline clr-i-outline-path-3\" /><path d=\"M24.88,26H11.12a1.1,1.1,0,1,0,0,2.2H24.88a1.1,1.1,0,1,0,0-2.2Z\" class=\"clr-i-outline clr-i-outline-path-4\" />");
var ClrShapeCheckboxListSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M31.43,16H10v2H31.43a1,1,0,0,0,0-2Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M31.43,24H10v2H31.43a1,1,0,0,0,0-2Z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M15.45,10h16a1,1,0,0,0,0-2h-14Z\" class=\"clr-i-outline clr-i-outline-path-3\" /><path d=\"M17.5,3.42a1.09,1.09,0,0,0-1.55,0L7.89,11.48,4.51,7.84A1.1,1.1,0,1,0,2.9,9.34l4.94,5.3L17.5,5A1.1,1.1,0,0,0,17.5,3.42Z\" class=\"clr-i-outline clr-i-outline-path-4\" />");
var ClrShapeFontSizeSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M21,9.08A1.13,1.13,0,0,0,19.86,8H4.62a1.1,1.1,0,1,0,0,2.19H11V27a1.09,1.09,0,0,0,2.17,0V10.19h6.69A1.14,1.14,0,0,0,21,9.08Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M30.67,15H21.15a1.1,1.1,0,1,0,0,2.19H25V26.5a1.09,1.09,0,0,0,2.17,0V17.23h3.54a1.1,1.1,0,1,0,0-2.19Z\" class=\"clr-i-outline clr-i-outline-path-2\" />");
var ClrShapeAlignCenterSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M31,20H19V16h6a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H19V2a1,1,0,0,0-2,0V6H11a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h6v4H5a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H17v4a1,1,0,0,0,2,0V30H31a1,1,0,0,0,1-1V21A1,1,0,0,0,31,20ZM12,14V8H24v6ZM30,28H6V22H30Z\" class=\"clr-i-outline clr-i-outline-path-1\" />");
var ClrShapeAlignLeftSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M5,1A1,1,0,0,0,4,2V34a1,1,0,0,0,2,0V2A1,1,0,0,0,5,1Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M31,20H8V30H31a1,1,0,0,0,1-1V21A1,1,0,0,0,31,20Zm-1,8H10V22H30Z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M24,15V7a1,1,0,0,0-1-1H8V16H23A1,1,0,0,0,24,15Zm-2-1H10V8H22Z\" class=\"clr-i-outline clr-i-outline-path-3\" />");
var ClrShapeAlignRightSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M31,1a1,1,0,0,0-1,1V34a1,1,0,0,0,2,0V2A1,1,0,0,0,31,1Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M4,21v8a1,1,0,0,0,1,1H28V20H5A1,1,0,0,0,4,21Zm2,1H26v6H6Z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M12,7v8a1,1,0,0,0,1,1H28V6H13A1,1,0,0,0,12,7Zm2,1H26v6H14Z\" class=\"clr-i-outline clr-i-outline-path-3\" />");
var ClrShapeItalicSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M24.42,8H17.1a1.1,1.1,0,1,0,0,2.19h2.13L13.11,25.55H10.47a1.1,1.1,0,1,0,0,2.19H17.8a1.1,1.1,0,1,0,0-2.19H15.51l6.13-15.36h2.78a1.1,1.1,0,1,0,0-2.19Z\" class=\"clr-i-outline clr-i-outline-path-1\" />");
var ClrShapeJustifyTextSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M6,10.2H31.75a1.1,1.1,0,1,0,0-2.2H6a1.1,1.1,0,1,0,0,2.2Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M31.75,14H6a1.1,1.1,0,1,0,0,2.2H31.75a1.1,1.1,0,1,0,0-2.2Z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M31.12,20H6.62a1.1,1.1,0,1,0,0,2.2h24.5a1.1,1.1,0,1,0,0-2.2Z\" class=\"clr-i-outline clr-i-outline-path-3\" /><path d=\"M30.45,25.83H6.6a1.1,1.1,0,0,0,0,2.2H30.45a1.1,1.1,0,0,0,0-2.2Z\" class=\"clr-i-outline clr-i-outline-path-4\" />");
var ClrShapeAlignLeftTextSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M20.25,26H6v2.2H20.25a1.1,1.1,0,0,0,0-2.2Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M28,20H6v2.2H28A1.1,1.1,0,0,0,28,20Z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M22.6,15.1A1.1,1.1,0,0,0,21.5,14H6v2.2H21.5A1.1,1.1,0,0,0,22.6,15.1Z\" class=\"clr-i-outline clr-i-outline-path-3\" /><path d=\"M29.25,8H6v2.2H29.25a1.1,1.1,0,1,0,0-2.2Z\" class=\"clr-i-outline clr-i-outline-path-4\" />");
var ClrShapeNumberListSVG = svg_tag_generator_1.clrIconSVG("<polygon points=\"5.46 7.41 5.46 11.56 6.65 11.56 6.65 6.05 5.7 6.05 4.05 7.16 4.52 8 5.46 7.41\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M5.57,14.82a.76.76,0,0,1,.83.73c0,.38-.21.74-.87,1.27l-2,1.57v1H7.67V18.28H5.33l1-.77c1-.7,1.28-1.27,1.28-2a1.83,1.83,0,0,0-2-1.76,2.63,2.63,0,0,0-2.14,1.08l.76.73A1.75,1.75,0,0,1,5.57,14.82Z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M6.56,24.64a1.32,1.32,0,0,0,1-1.27c0-.87-.78-1.51-2-1.51a2.61,2.61,0,0,0-2.1,1l.69.72a1.78,1.78,0,0,1,1.3-.64c.54,0,.92.26.92.66s-.36.62-1,.62H4.79v1h.64c.74,0,1.07.21,1.07.63s-.35.68-1,.68a2,2,0,0,1-1.46-.65l-.7.78a2.85,2.85,0,0,0,2.21.93c1.29,0,2.13-.69,2.13-1.64A1.33,1.33,0,0,0,6.56,24.64Z\" class=\"clr-i-outline clr-i-outline-path-3\" /><path d=\"M32.42,9a1,1,0,0,0-1-1H10v2H31.42A1,1,0,0,0,32.42,9Z\" class=\"clr-i-outline clr-i-outline-path-4\" /><path d=\"M31.42,16H10v2H31.42a1,1,0,0,0,0-2Z\" class=\"clr-i-outline clr-i-outline-path-5\" /><path d=\"M31.42,24H10v2H31.42a1,1,0,0,0,0-2Z\" class=\"clr-i-outline clr-i-outline-path-6\" />");
var ClrShapePaintRollerSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M31,10V4a2,2,0,0,0-2-2H6A2,2,0,0,0,4,4v6a2,2,0,0,0,2,2H29A2,2,0,0,0,31,10ZM6,4H29v6H6Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M33,6H32v6.29L18.7,16.54a1,1,0,0,0-.7,1V19H16V33a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V19H20v-.73L33.3,14a1,1,0,0,0,.7-1V7A1,1,0,0,0,33,6ZM20,33H18V21h2Z\" class=\"clr-i-outline clr-i-outline-path-2\" /><rect x=\"4\" y=\"2\" width=\"27\" height=\"10\" rx=\"1\" ry=\"1\" class=\"clr-i-solid clr-i-solid-path-1\" /><path d=\"M33,6H32v6.24L18.71,16.45a1,1,0,0,0-.71,1V19H16V34a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V19H20v-.82L33.29,14A1,1,0,0,0,34,13V7A1,1,0,0,0,33,6Z\" class=\"clr-i-solid clr-i-solid-path-2\" />");
var ClrShapeBlockQuoteSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M11.86,16.55a4.31,4.31,0,0,0-2.11.56,14.44,14.44,0,0,1,4.36-6,1.1,1.1,0,0,0-1.4-1.7c-4,3.25-5.78,7.75-5.78,10.54A5.08,5.08,0,0,0,10,24.58a4.4,4.4,0,0,0,1.88.44,4.24,4.24,0,1,0,0-8.47Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M23,16.55a4.29,4.29,0,0,0-2.11.56,14.5,14.5,0,0,1,4.35-6,1.1,1.1,0,1,0-1.39-1.7c-4,3.25-5.78,7.75-5.78,10.54a5.08,5.08,0,0,0,3,4.61A4.37,4.37,0,0,0,23,25a4.24,4.24,0,1,0,0-8.47Z\" class=\"clr-i-outline clr-i-outline-path-2\" />");
var ClrShapeAlignRightTextSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M14.65,27.1a1.1,1.1,0,0,0,1.1,1.1H30V26H15.75A1.1,1.1,0,0,0,14.65,27.1Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M6.9,21.1A1.1,1.1,0,0,0,8,22.2H30V20H8A1.1,1.1,0,0,0,6.9,21.1Z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M13.4,15.1a1.1,1.1,0,0,0,1.1,1.1H30V14H14.5A1.1,1.1,0,0,0,13.4,15.1Z\" class=\"clr-i-outline clr-i-outline-path-3\" /><path d=\"M6.75,8a1.1,1.1,0,1,0,0,2.2H30V8Z\" class=\"clr-i-outline clr-i-outline-path-4\" />");
var ClrShapeTextSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M12.19,8.84a1.45,1.45,0,0,0-1.4-1h-.12a1.46,1.46,0,0,0-1.42,1L1.14,26.56a1.29,1.29,0,0,0-.14.59,1,1,0,0,0,1,1,1.12,1.12,0,0,0,1.08-.77l2.08-4.65h11l2.08,4.59a1.24,1.24,0,0,0,1.12.83,1.08,1.08,0,0,0,1.08-1.08,1.64,1.64,0,0,0-.14-.57ZM6.08,20.71l4.59-10.22,4.6,10.22Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M32.24,14.78A6.35,6.35,0,0,0,27.6,13.2a11.36,11.36,0,0,0-4.7,1,1,1,0,0,0-.58.89,1,1,0,0,0,.94.92,1.23,1.23,0,0,0,.39-.08,8.87,8.87,0,0,1,3.72-.81c2.7,0,4.28,1.33,4.28,3.92v.5a15.29,15.29,0,0,0-4.42-.61c-3.64,0-6.14,1.61-6.14,4.64v.05c0,2.95,2.7,4.48,5.37,4.48a6.29,6.29,0,0,0,5.19-2.48V26.9a1,1,0,0,0,1,1,1,1,0,0,0,1-1.06V19A5.71,5.71,0,0,0,32.24,14.78Zm-.56,7.7c0,2.28-2.17,3.89-4.81,3.89-1.94,0-3.61-1.06-3.61-2.86v-.06c0-1.8,1.5-3,4.2-3a15.2,15.2,0,0,1,4.22.61Z\" class=\"clr-i-outline clr-i-outline-path-2\" />");
var ClrShapeUnderlineSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M18,28.17c5.08,0,8.48-3.08,8.48-9V8.54a1.15,1.15,0,1,0-2.3,0v10.8c0,4.44-2.38,6.71-6.13,6.71s-6.21-2.47-6.21-6.85V8.54a1.15,1.15,0,1,0-2.3,0v10.8C9.53,25.09,13,28.17,18,28.17Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M31,30H5a1.11,1.11,0,0,0,0,2.21H31A1.11,1.11,0,0,0,31,30Z\" class=\"clr-i-outline clr-i-outline-path-2\" />");
var ClrShapeAlignBottomSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M34,30H2a1,1,0,0,0,0,2H34a1,1,0,0,0,0-2Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M16,5a1,1,0,0,0-1-1H7A1,1,0,0,0,6,5V28H16ZM14,26H8V6h6Z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M30,13a1,1,0,0,0-1-1H21a1,1,0,0,0-1,1V28H30ZM28,26H22V14h6Z\" class=\"clr-i-outline clr-i-outline-path-3\" />");
var ClrShapeAlignMiddleSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M34,17H30V11a1,1,0,0,0-1-1H21a1,1,0,0,0-1,1v6H16V5a1,1,0,0,0-1-1H7A1,1,0,0,0,6,5V17H2a1,1,0,0,0,0,2H6V31a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V19h4v6a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V19h4a1,1,0,0,0,0-2ZM14,30H8V6h6Zm14-6H22V12h6Z\" class=\"clr-i-outline clr-i-outline-path-1\" />");
var ClrShapeAlignTopSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M34,4H2A1,1,0,0,0,2,6H34a1,1,0,0,0,0-2Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M6,31a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V8H6ZM8,10h6V30H8Z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M20,23a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V8H20Zm2-13h6V22H22Z\" class=\"clr-i-outline clr-i-outline-path-3\" />");
var ClrShapeLanguageSVG = svg_tag_generator_1.clrIconSVG("<path d=\"M30,3H14v5h2V5h14c0.6,0,1,0.4,1,1v11c0,0.6-0.4,1-1,1H17v7h-5.3L8,27.9V25H5c-0.6,0-1-0.4-1-1V13c0-0.6,0.4-1,1-1h13v-2H5\n\t\tc-1.7,0-3,1.3-3,3v11c0,1.7,1.3,3,3,3h1v5.1l6.3-5.1H19v-7h11c1.7,0,3-1.3,3-3V6C33,4.3,31.7,3,30,3z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M6.2,22.9h2.4l0.6-1.6h3.1l0.6,1.6h2.4L11.9,14H9.5L6.2,22.9z M10.7,16.5l1,3.1h-2L10.7,16.5z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M20,17c1.1,0,2.6-0.3,4-1c1.4,0.7,3,1,4,1v-2c0,0-1,0-2.1-0.4c1.2-1.2,2.1-3,2.1-5.6V8h-3V6h-2v2h-3v2h5.9\n\t\tc-0.2,1.8-1,2.9-1.9,3.6c-0.6-0.5-1.2-1.2-1.6-2.1h-2.1c0.4,1.3,1,2.3,1.8,3.1C21.1,15,20.2,15,20,15V17z\" class=\"clr-i-outline clr-i-outline-path-3\" /><polygon points=\"11,16.5 10,19.6 12,19.6 11,16.5 \t\" class=\"clr-i-solid clr-i-solid-path-1\" /><path d=\"M30.3,3h-16v5h4v2h-13c-1.7,0-3,1.3-3,3v11c0,1.7,1.3,3,3,3h1v5.1l6.3-5.1h6.7v-7h11c1.7,0,3-1.3,3-3V6\n\t\tC33.3,4.3,32,3,30.3,3z M13.1,22.9l-0.5-1.6H9.5l-0.6,1.6H6.5L9.8,14h2.4l3.3,8.9L13.1,22.9z M28.3,15v2c-1.3,0-2.7-0.4-3.9-1\n\t\tc-1.2,0.6-2.6,0.9-4,1l-0.1-2c0.7,0,1.4-0.1,2.1-0.3c-0.9-0.9-1.5-2-1.8-3.2h2.1c0.3,0.9,0.9,1.6,1.6,2.2c1.1-0.9,1.8-2.2,1.9-3.7\n\t\th-6V8h3V6h2v2h3.3l0.1,1c0.1,2.1-0.7,4.2-2.2,5.7C27.1,14.9,27.7,15,28.3,15z\" class=\"clr-i-solid clr-i-solid-path-2\" />");
exports.ClrShapeBold = { bold: ClrShapeBoldSVG };
exports.ClrShapeBulletList = { 'bullet-list': ClrShapeBulletListSVG };
exports.ClrShapeCheckboxList = { 'checkbox-list': ClrShapeCheckboxListSVG };
exports.ClrShapeNumberList = { 'number-list': ClrShapeNumberListSVG };
exports.ClrShapeFontSize = { 'font-size': ClrShapeFontSizeSVG };
exports.ClrShapeItalic = { italic: ClrShapeItalicSVG };
exports.ClrShapeJustifyText = { 'justify-text': ClrShapeJustifyTextSVG };
exports.ClrShapeCenterText = { 'center-text': ClrShapeCenterTextSVG };
exports.ClrShapeAlignLeftText = { 'align-left-text': ClrShapeAlignLeftTextSVG };
exports.ClrShapeAlignRightText = { 'align-right-text': ClrShapeAlignRightTextSVG };
exports.ClrShapePaintRoller = { 'paint-roller': ClrShapePaintRollerSVG };
exports.ClrShapeBlockQuote = { 'block-quote': ClrShapeBlockQuoteSVG };
exports.ClrShapeText = { text: ClrShapeTextSVG };
exports.ClrShapeUnderline = { underline: ClrShapeUnderlineSVG };
exports.ClrShapeAlignCenter = { 'align-center': ClrShapeAlignCenterSVG };
exports.ClrShapeAlignLeft = { 'align-left': ClrShapeAlignLeftSVG };
exports.ClrShapeAlignRight = { 'align-right': ClrShapeAlignRightSVG };
exports.ClrShapeAlignBottom = { 'align-bottom': ClrShapeAlignBottomSVG };
exports.ClrShapeAlignMiddle = { 'align-middle': ClrShapeAlignMiddleSVG };
exports.ClrShapeAlignTop = { 'align-top': ClrShapeAlignTopSVG };
exports.ClrShapeLanguage = { language: ClrShapeLanguageSVG };
exports.ClrTextEditSet = __assign({}, exports.ClrShapeBold, exports.ClrShapeBulletList, exports.ClrShapeCheckboxList, exports.ClrShapeNumberList, exports.ClrShapeFontSize, exports.ClrShapeItalic, exports.ClrShapeJustifyText, exports.ClrShapeCenterText, exports.ClrShapeAlignLeftText, exports.ClrShapeAlignRightText, exports.ClrShapePaintRoller, exports.ClrShapeBlockQuote, exports.ClrShapeText, exports.ClrShapeUnderline, exports.ClrShapeAlignCenter, exports.ClrShapeAlignLeft, exports.ClrShapeAlignRight, exports.ClrShapeAlignBottom, exports.ClrShapeAlignMiddle, exports.ClrShapeAlignTop, exports.ClrShapeLanguage);


/***/ }),

/***/ "./src/clr-icons/shapes/text-edit.umd.ts":
/*!***********************************************!*\
  !*** ./src/clr-icons/shapes/text-edit.umd.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var text_edit_1 = __webpack_require__(/*! ./text-edit */ "./src/clr-icons/shapes/text-edit.ts");
__export(__webpack_require__(/*! ./text-edit */ "./src/clr-icons/shapes/text-edit.ts"));
if (typeof window !== 'undefined' && window.hasOwnProperty('ClarityIcons')) {
    window.ClarityIcons.add(text_edit_1.ClrTextEditSet);
}


/***/ }),

/***/ "./src/clr-icons/utils/svg-tag-generator.ts":
/*!**************************************************!*\
  !*** ./src/clr-icons/utils/svg-tag-generator.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BADGED_CLASS_SUBSTRING = '--badged';
var ALERTED_CLASS_SUBSTRING = '--alerted';
var SOLID_CLASS = 'clr-i-solid';
function clrIconSVG(content) {
    var classes = '';
    if (content.indexOf(BADGED_CLASS_SUBSTRING) > -1) {
        classes += 'can-badge ';
    }
    if (content.indexOf(ALERTED_CLASS_SUBSTRING) > -1) {
        classes += 'can-alert ';
    }
    if (content.indexOf(SOLID_CLASS) > -1) {
        classes += 'has-solid ';
    }
    var openingTag;
    if (classes) {
        openingTag = "<svg version=\"1.1\" class=\"" + classes + "\" viewBox=\"0 0 36 36\" preserveAspectRatio=\"xMidYMid meet\"\n    xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" focusable=\"false\" aria-hidden=\"true\" role=\"img\">";
    }
    else {
        openingTag = "<svg version=\"1.1\" viewBox=\"0 0 36 36\" preserveAspectRatio=\"xMidYMid meet\"\n    xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" focusable=\"false\" aria-hidden=\"true\" role=\"img\">";
    }
    var closingTag = "</svg>";
    return openingTag + content + closingTag;
}
exports.clrIconSVG = clrIconSVG;


/***/ })

/******/ });
});
//# sourceMappingURL=text-edit.js.map