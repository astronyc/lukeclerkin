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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _app=__webpack_require__(1);var _app2=_interopRequireDefault(_app);__webpack_require__(2);__webpack_require__(3);__webpack_require__(4);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxnQyx1Q0FHQSx1QkFDQSx1QkFDQSx1QiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBhcHBzIHN0eWxlc1xuaW1wb3J0IHNhc3MgZnJvbSBcIi4uL3Njc3MvYXBwLnNjc3NcIjtcblxuLy8gSW1wb3J0IG91ciBtb2R1bGVzXG5pbXBvcnQgXCIuL21vZHVsZXMvX2hlYWRlci5qc1wiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL19sYW5kaW5nLmpzXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvX2ludGVyaW9ycy5qc1wiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3NzL2FwcC5zY3NzP2VlOTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("$(function(){'use strict';console.log('header');});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tb2R1bGVzL19oZWFkZXIuanM/OWMxOCJdLCJuYW1lcyI6WyIkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUUsVUFBVyxDQUNYLGFBRUFDLFFBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQ0QsQ0FKRCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgY29uc29sZS5sb2coJ2hlYWRlcicpXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL21vZHVsZXMvX2hlYWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("$(document).ready(function(){console.log(\"landing\");console.log(\"test\");var referredWebsite=document.referrer.split(\"/\");function fadeInLandingPage(){// 1. Fade in page\nvar landingPage=document.querySelector(\".landing-page\");landingPage.style.display=\"flex\";setTimeout(function(){landingPage.querySelector(\".title-wrap\").classList.add(\"active\");landingPage.querySelector(\".button-wrap\").classList.add(\"active\");});// 2. Fade elements\n}function fadeInBody(){var siteContainer=document.querySelector(\".site-container\");siteContainer.classList.add(\"active\");}if(referredWebsite[2]==\"localhost:8888\"){// If the referring website is from the same url, just fade in the main page\nconsole.log(\"check\");fadeInBody();}else{// Otherwise, check if the user has been here\nconsole.log(\"check 2\");var haveTheyVisited=localStorage.getItem(\"websiteVisited\");if(haveTheyVisited==null){// they haven't been here before, so show them the landing page\nfadeInLandingPage();}else{// they have been here before, fade in the main page\nfadeInBody();}}var landingPageButton=document.querySelector(\".landing-page .button-wrap button\");landingPageButton.addEventListener(\"click\",function(){// 1. Hide the landing page\nvar landingPage=document.querySelector(\".landing-page\");landingPage.style.display=\"none\";fadeInBody();localStorage.setItem(\"websiteVisited\",\"yestheyhave\");});});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tb2R1bGVzL19sYW5kaW5nLmpzPzZjZTUiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjb25zb2xlIiwibG9nIiwicmVmZXJyZWRXZWJzaXRlIiwicmVmZXJyZXIiLCJzcGxpdCIsImZhZGVJbkxhbmRpbmdQYWdlIiwibGFuZGluZ1BhZ2UiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsImZhZGVJbkJvZHkiLCJzaXRlQ29udGFpbmVyIiwiaGF2ZVRoZXlWaXNpdGVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxhbmRpbmdQYWdlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEl0ZW0iXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsVUFBVyxDQUM1QkMsUUFBUUMsR0FBUixDQUFZLFNBQVosRUFDQUQsUUFBUUMsR0FBUixDQUFZLE1BQVosRUFFQSxHQUFNQyxpQkFBa0JKLFNBQVNLLFFBQVQsQ0FBa0JDLEtBQWxCLENBQXdCLEdBQXhCLENBQXhCLENBRUEsUUFBU0Msa0JBQVQsRUFBNkIsQ0FDNUI7QUFDQSxHQUFNQyxhQUFjUixTQUFTUyxhQUFULENBQXVCLGVBQXZCLENBQXBCLENBQ0FELFlBQVlFLEtBQVosQ0FBa0JDLE9BQWxCLENBQTRCLE1BQTVCLENBRUFDLFdBQVcsVUFBVyxDQUNyQkosWUFBWUMsYUFBWixDQUEwQixhQUExQixFQUF5Q0ksU0FBekMsQ0FBbURDLEdBQW5ELENBQXVELFFBQXZELEVBQ0FOLFlBQVlDLGFBQVosQ0FBMEIsY0FBMUIsRUFBMENJLFNBQTFDLENBQW9EQyxHQUFwRCxDQUF3RCxRQUF4RCxFQUNBLENBSEQsRUFJQTtBQUNBLENBQ0QsUUFBU0MsV0FBVCxFQUFzQixDQUNyQixHQUFNQyxlQUFnQmhCLFNBQVNTLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXRCLENBQ0FPLGNBQWNILFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFFBQTVCLEVBQ0EsQ0FFRCxHQUFJVixnQkFBZ0IsQ0FBaEIsR0FBc0IsZ0JBQTFCLENBQTRDLENBQzNDO0FBQ0FGLFFBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQ0FZLGFBQ0EsQ0FKRCxJQUlPLENBQ047QUFDQWIsUUFBUUMsR0FBUixDQUFZLFNBQVosRUFDQSxHQUFJYyxpQkFBa0JDLGFBQWFDLE9BQWIsQ0FBcUIsZ0JBQXJCLENBQXRCLENBQ0EsR0FBSUYsaUJBQW1CLElBQXZCLENBQTZCLENBQzVCO0FBQ0FWLG9CQUNBLENBSEQsSUFHTyxDQUNOO0FBQ0FRLGFBQ0EsQ0FDRCxDQUVELEdBQUlLLG1CQUFvQnBCLFNBQVNTLGFBQVQsQ0FDdkIsbUNBRHVCLENBQXhCLENBR0FXLGtCQUFrQkMsZ0JBQWxCLENBQW1DLE9BQW5DLENBQTRDLFVBQVcsQ0FDdEQ7QUFDQSxHQUFNYixhQUFjUixTQUFTUyxhQUFULENBQXVCLGVBQXZCLENBQXBCLENBQ0FELFlBQVlFLEtBQVosQ0FBa0JDLE9BQWxCLENBQTRCLE1BQTVCLENBQ0FJLGFBQ0FHLGFBQWFJLE9BQWIsQ0FBcUIsZ0JBQXJCLENBQXVDLGFBQXZDLEVBQ0EsQ0FORCxFQU9BLENBakREIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0Y29uc29sZS5sb2coXCJsYW5kaW5nXCIpO1xuXHRjb25zb2xlLmxvZyhcInRlc3RcIik7XG5cblx0Y29uc3QgcmVmZXJyZWRXZWJzaXRlID0gZG9jdW1lbnQucmVmZXJyZXIuc3BsaXQoXCIvXCIpO1xuXG5cdGZ1bmN0aW9uIGZhZGVJbkxhbmRpbmdQYWdlKCkge1xuXHRcdC8vIDEuIEZhZGUgaW4gcGFnZVxuXHRcdGNvbnN0IGxhbmRpbmdQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYW5kaW5nLXBhZ2VcIik7XG5cdFx0bGFuZGluZ1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdGxhbmRpbmdQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtd3JhcFwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdFx0bGFuZGluZ1BhZ2UucXVlcnlTZWxlY3RvcihcIi5idXR0b24td3JhcFwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdH0pO1xuXHRcdC8vIDIuIEZhZGUgZWxlbWVudHNcblx0fVxuXHRmdW5jdGlvbiBmYWRlSW5Cb2R5KCkge1xuXHRcdGNvbnN0IHNpdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpdGUtY29udGFpbmVyXCIpO1xuXHRcdHNpdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0fVxuXG5cdGlmIChyZWZlcnJlZFdlYnNpdGVbMl0gPT0gXCJsb2NhbGhvc3Q6ODg4OFwiKSB7XG5cdFx0Ly8gSWYgdGhlIHJlZmVycmluZyB3ZWJzaXRlIGlzIGZyb20gdGhlIHNhbWUgdXJsLCBqdXN0IGZhZGUgaW4gdGhlIG1haW4gcGFnZVxuXHRcdGNvbnNvbGUubG9nKFwiY2hlY2tcIik7XG5cdFx0ZmFkZUluQm9keSgpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIE90aGVyd2lzZSwgY2hlY2sgaWYgdGhlIHVzZXIgaGFzIGJlZW4gaGVyZVxuXHRcdGNvbnNvbGUubG9nKFwiY2hlY2sgMlwiKTtcblx0XHRsZXQgaGF2ZVRoZXlWaXNpdGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3ZWJzaXRlVmlzaXRlZFwiKTtcblx0XHRpZiAoaGF2ZVRoZXlWaXNpdGVkID09IG51bGwpIHtcblx0XHRcdC8vIHRoZXkgaGF2ZW4ndCBiZWVuIGhlcmUgYmVmb3JlLCBzbyBzaG93IHRoZW0gdGhlIGxhbmRpbmcgcGFnZVxuXHRcdFx0ZmFkZUluTGFuZGluZ1BhZ2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdGhleSBoYXZlIGJlZW4gaGVyZSBiZWZvcmUsIGZhZGUgaW4gdGhlIG1haW4gcGFnZVxuXHRcdFx0ZmFkZUluQm9keSgpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBsYW5kaW5nUGFnZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XCIubGFuZGluZy1wYWdlIC5idXR0b24td3JhcCBidXR0b25cIlxuXHQpO1xuXHRsYW5kaW5nUGFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0Ly8gMS4gSGlkZSB0aGUgbGFuZGluZyBwYWdlXG5cdFx0Y29uc3QgbGFuZGluZ1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmRpbmctcGFnZVwiKTtcblx0XHRsYW5kaW5nUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0ZmFkZUluQm9keSgpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2Vic2l0ZVZpc2l0ZWRcIiwgXCJ5ZXN0aGV5aGF2ZVwiKTtcblx0fSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL21vZHVsZXMvX2xhbmRpbmcuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("$(document).ready(function(){console.log(\"interiors\");var imageWrap=document.querySelector(\".image-wrap\");imageWrap.classList.add(\"active\");});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tb2R1bGVzL19pbnRlcmlvcnMuanM/NDZiZCJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZVdyYXAiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFVBQVcsQ0FDNUJDLFFBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBRUEsR0FBTUMsV0FBWUosU0FBU0ssYUFBVCxDQUF1QixhQUF2QixDQUFsQixDQUNBRCxVQUFVRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixRQUF4QixFQUNBLENBTEQiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRjb25zb2xlLmxvZyhcImludGVyaW9yc1wiKTtcblxuXHRjb25zdCBpbWFnZVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlLXdyYXBcIik7XG5cdGltYWdlV3JhcC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9tb2R1bGVzL19pbnRlcmlvcnMuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);