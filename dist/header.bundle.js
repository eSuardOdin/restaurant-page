"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["header"],{

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHeader)
/* harmony export */ });
function getHeader() {
    // Create header element
    const header = document.createElement('div');
    header.classList.add('header');
    // Header box (for title and page links/buttons)
    const headerBox = document.createElement('div');
    headerBox.classList.add('header-box');

    // Title of the page
    const title = document.createElement('p');
    title.classList.add('header-title');
    title.innerText = 'Best Coffee Shop in town';

    // Buttons of different pages
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const aboutBtn = document.createElement('button');

    homeBtn.classList.add('header-btn');
    homeBtn.classList.add('home-btn');
    menuBtn.classList.add('header-btn');
    menuBtn.classList.add('menu-btn');
    aboutBtn.classList.add('header-btn');
    aboutBtn.classList.add('about-btn');


    homeBtn.innerText = 'Home';
    menuBtn.innerText = 'Menu';
    aboutBtn.innerText = 'About';


    // Appending 
    headerBox.appendChild(title);
    headerBox.appendChild(homeBtn);
    headerBox.appendChild(aboutBtn);
    headerBox.appendChild(menuBtn);

    header.appendChild(headerBox);

    console.log('Header created');
    return header;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/header.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIZWFkZXIoKSB7XG4gICAgLy8gQ3JlYXRlIGhlYWRlciBlbGVtZW50XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIC8vIEhlYWRlciBib3ggKGZvciB0aXRsZSBhbmQgcGFnZSBsaW5rcy9idXR0b25zKVxuICAgIGNvbnN0IGhlYWRlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckJveC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYm94Jyk7XG5cbiAgICAvLyBUaXRsZSBvZiB0aGUgcGFnZVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10aXRsZScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdCZXN0IENvZmZlZSBTaG9wIGluIHRvd24nO1xuXG4gICAgLy8gQnV0dG9ucyBvZiBkaWZmZXJlbnQgcGFnZXNcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idG4nKTtcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2hvbWUtYnRuJyk7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYnRuJyk7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bicpO1xuICAgIGFib3V0QnRuLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idG4nKTtcbiAgICBhYm91dEJ0bi5jbGFzc0xpc3QuYWRkKCdhYm91dC1idG4nKTtcblxuXG4gICAgaG9tZUJ0bi5pbm5lclRleHQgPSAnSG9tZSc7XG4gICAgbWVudUJ0bi5pbm5lclRleHQgPSAnTWVudSc7XG4gICAgYWJvdXRCdG4uaW5uZXJUZXh0ID0gJ0Fib3V0JztcblxuXG4gICAgLy8gQXBwZW5kaW5nIFxuICAgIGhlYWRlckJveC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZGVyQm94LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgIGhlYWRlckJveC5hcHBlbmRDaGlsZChhYm91dEJ0bik7XG4gICAgaGVhZGVyQm94LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckJveCk7XG5cbiAgICBjb25zb2xlLmxvZygnSGVhZGVyIGNyZWF0ZWQnKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==