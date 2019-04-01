/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _app=__webpack_require__(74);var _app2=_interopRequireDefault(_app);__webpack_require__(75);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// Landing Page JS\n// Import the apps styles\n$(function(){$(\".title-wrap\").addClass(\"fade-in\",3000);});// Import our modules\n$(function(){$(\".button-wrap\").addClass(\"fade-delay\");});$(\".button-wrap\").click(function(){// Landing page fade out\n$(\".landing-page\").addClass(\"landing-clicked\",3000);$(\".inner-wrap\").addClass(\"fade-in\");$(\".image-wrap\").addClass(\"fade-delay\");});// Image Fade In\n$(\"project-page\").ready(function(){$(\".image-wrap\").addClass(\"fade-delay\");$(\".inner-wrap\").addClass(\"fade-in\");});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6WyIkIiwiYWRkQ2xhc3MiLCJjbGljayIsInJlYWR5Il0sIm1hcHBpbmdzIjoiQUFDQSxpQyx1Q0FHQSx3QixtRkFFQTtBQU5BO0FBT0FBLEVBQUUsVUFBVyxDQUNaQSxFQUFFLGFBQUYsRUFBaUJDLFFBQWpCLENBQTBCLFNBQTFCLENBQXFDLElBQXJDLEVBQ0EsQ0FGRCxFQUpBO0FBT0FELEVBQUUsVUFBVyxDQUNaQSxFQUFFLGNBQUYsRUFBa0JDLFFBQWxCLENBQTJCLFlBQTNCLEVBQ0EsQ0FGRCxFQUdBRCxFQUFFLGNBQUYsRUFBa0JFLEtBQWxCLENBQXdCLFVBQVcsQ0FDbEM7QUFDQUYsRUFBRSxlQUFGLEVBQW1CQyxRQUFuQixDQUE0QixpQkFBNUIsQ0FBK0MsSUFBL0MsRUFDQUQsRUFBRSxhQUFGLEVBQWlCQyxRQUFqQixDQUEwQixTQUExQixFQUNBRCxFQUFFLGFBQUYsRUFBaUJDLFFBQWpCLENBQTBCLFlBQTFCLEVBQ0EsQ0FMRCxFQU1BO0FBQ0FELEVBQUUsY0FBRixFQUFrQkcsS0FBbEIsQ0FBd0IsVUFBVyxDQUNsQ0gsRUFBRSxhQUFGLEVBQWlCQyxRQUFqQixDQUEwQixZQUExQixFQUNBRCxFQUFFLGFBQUYsRUFBaUJDLFFBQWpCLENBQTBCLFNBQTFCLEVBQ0EsQ0FIRCIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgYXBwcyBzdHlsZXNcbmltcG9ydCBzYXNzIGZyb20gXCIuLi9zY3NzL2FwcC5zY3NzXCI7XG5cbi8vIEltcG9ydCBvdXIgbW9kdWxlc1xuaW1wb3J0IFwiLi9tb2R1bGVzL19oZWFkZXIuanNcIjtcblxuLy8gTGFuZGluZyBQYWdlIEpTXG4kKGZ1bmN0aW9uKCkge1xuXHQkKFwiLnRpdGxlLXdyYXBcIikuYWRkQ2xhc3MoXCJmYWRlLWluXCIsIDMwMDApO1xufSk7XG4kKGZ1bmN0aW9uKCkge1xuXHQkKFwiLmJ1dHRvbi13cmFwXCIpLmFkZENsYXNzKFwiZmFkZS1kZWxheVwiKTtcbn0pO1xuJChcIi5idXR0b24td3JhcFwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0Ly8gTGFuZGluZyBwYWdlIGZhZGUgb3V0XG5cdCQoXCIubGFuZGluZy1wYWdlXCIpLmFkZENsYXNzKFwibGFuZGluZy1jbGlja2VkXCIsIDMwMDApO1xuXHQkKFwiLmlubmVyLXdyYXBcIikuYWRkQ2xhc3MoXCJmYWRlLWluXCIpO1xuXHQkKFwiLmltYWdlLXdyYXBcIikuYWRkQ2xhc3MoXCJmYWRlLWRlbGF5XCIpO1xufSk7XG4vLyBJbWFnZSBGYWRlIEluXG4kKFwicHJvamVjdC1wYWdlXCIpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHQkKFwiLmltYWdlLXdyYXBcIikuYWRkQ2xhc3MoXCJmYWRlLWRlbGF5XCIpO1xuXHQkKFwiLmlubmVyLXdyYXBcIikuYWRkQ2xhc3MoXCJmYWRlLWluXCIpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///37\n");

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3NzL2FwcC5zY3NzP2VlOTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2Nzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///74\n");

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("$(function(){'use strict';console.log('header');});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tb2R1bGVzL19oZWFkZXIuanM/OWMxOCJdLCJuYW1lcyI6WyIkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUUsVUFBVyxDQUNYLGFBRUFDLFFBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQ0QsQ0FKRCIsImZpbGUiOiI3NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIGNvbnNvbGUubG9nKCdoZWFkZXInKVxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9tb2R1bGVzL19oZWFkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///75\n");

/***/ })

/******/ });