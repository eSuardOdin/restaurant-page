"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["print"],{

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printPage)
/* harmony export */ });
function printPage(
    baseElement, 
    pageElement, 
    cssClass) {
    let classList = baseElement.classList;
    while(classList.length > 0) {
        classList.remove(classList.item(0));
    };
    baseElement.classList.add(cssClass);
    baseElement.innerHTML = '';
    baseElement.appendChild(pageElement);
    
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludFBhZ2UoXG4gICAgYmFzZUVsZW1lbnQsIFxuICAgIHBhZ2VFbGVtZW50LCBcbiAgICBjc3NDbGFzcykge1xuICAgIGxldCBjbGFzc0xpc3QgPSBiYXNlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgd2hpbGUoY2xhc3NMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc0xpc3QuaXRlbSgwKSk7XG4gICAgfTtcbiAgICBiYXNlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICBiYXNlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICBiYXNlRWxlbWVudC5hcHBlbmRDaGlsZChwYWdlRWxlbWVudCk7XG4gICAgXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==