webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/nav.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./styles/nav.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".nav-wrap {\\n  position: sticky;\\n  background: #fff;\\n  top: 0;\\n  padding: 1rem 0;\\n  min-height: 8vh;\\n  width: 100%;\\n  z-index: 22; }\\n\\n.items {\\n  color: #348bf3;\\n  width: 40%; }\\n\\n.flexnav {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.logo {\\n  width: 20rem;\\n  height: 5rem; }\\n\\n.lines {\\n  display: none;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n  width: 2.5rem;\\n  height: 2.5rem; }\\n\\n.line {\\n  z-index: 22;\\n  background-color: #348bf3;\\n  width: 100%;\\n  height: 0.3em; }\\n\\n.active .line1 {\\n  transform: rotate(45deg) translate(-0.1rem, 0.2rem); }\\n\\n.active .line2 {\\n  display: none; }\\n\\n.active .line3 {\\n  transition: all 0.5s;\\n  transform: rotate(-45deg) translate(0.4rem, -0.6rem); }\\n\\n.line1,\\n.line3 {\\n  transition: all 0.5s; }\\n\\n@media (max-width: 756px) {\\n  .nav-wrap {\\n    position: sticky; }\\n  .items {\\n    background-color: rgba(0, 0, 0, 0.822);\\n    position: absolute;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    align-items: center;\\n    opacity: 0;\\n    top: 25%;\\n    left: 0%;\\n    width: 0%;\\n    height: 92vh;\\n    overflow: hidden;\\n    color: #fff;\\n    font-weight: 500;\\n    transition: all 0.5s; }\\n  .menu {\\n    width: 60%;\\n    opacity: 1; }\\n  .lines {\\n    display: flex; } }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://nav.scss\"],\"names\":[],\"mappings\":\"AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,MAAM;EACN,eAAe;EACf,eAAe;EACf,WAAW;EACX,WAAW,EAAA;;AAEb;EACE,cAXmB;EAYnB,UAAU,EAAA;;AAEZ;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB,EAAA;;AAErB;EACE,YAAY;EACZ,YAAY,EAAA;;AAEd;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,aAAa;EACb,cAAc,EAAA;;AAEhB;EACE,WAAW;EACX,yBAhCmB;EAiCnB,WAAW;EACX,aAAa,EAAA;;AAGf;EAEI,mDAAmD,EAAA;;AAFvD;EAMI,aAAa,EAAA;;AANjB;EASI,oBAAoB;EACpB,oDAAoD,EAAA;;AAIxD;;EAEE,oBAAoB,EAAA;;AAGtB;EACE;IACE,gBAAgB,EAAA;EAElB;IACE,sCAAsC;IACtC,kBAAkB;IAClB,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,UAAU;IACV,QAAQ;IACR,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,oBAAoB,EAAA;EAEtB;IACE,UAAU;IACV,UAAU,EAAA;EAEZ;IACE,aAAa,EAAA,EACd\",\"sourcesContent\":[\"$primary-pup: #348bf3;\\n.nav-wrap {\\n  position: sticky;\\n  background: #fff;\\n  top: 0;\\n  padding: 1rem 0;\\n  min-height: 8vh;\\n  width: 100%;\\n  z-index: 22;\\n}\\n.items {\\n  color: $primary-pup;\\n  width: 40%;\\n}\\n.flexnav {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n.logo {\\n  width: 20rem;\\n  height: 5rem;\\n}\\n.lines {\\n  display: none;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n  width: 2.5rem;\\n  height: 2.5rem;\\n}\\n.line {\\n  z-index: 22;\\n  background-color: $primary-pup;\\n  width: 100%;\\n  height: 0.3em;\\n}\\n\\n.active {\\n  .line1 {\\n    transform: rotate(45deg) translate(-0.1rem, 0.2rem);\\n  }\\n\\n  .line2 {\\n    display: none;\\n  }\\n  .line3 {\\n    transition: all 0.5s;\\n    transform: rotate(-45deg) translate(0.4rem, -0.6rem);\\n  }\\n}\\n\\n.line1,\\n.line3 {\\n  transition: all 0.5s;\\n}\\n\\n@media (max-width: 756px) {\\n  .nav-wrap {\\n    position: sticky;\\n  }\\n  .items {\\n    background-color: rgba(0, 0, 0, 0.822);\\n    position: absolute;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    align-items: center;\\n    opacity: 0;\\n    top: 25%;\\n    left: 0%;\\n    width: 0%;\\n    height: 92vh;\\n    overflow: hidden;\\n    color: #fff;\\n    font-weight: 500;\\n    transition: all 0.5s;\\n  }\\n  .menu {\\n    width: 60%;\\n    opacity: 1;\\n  }\\n  .lines {\\n    display: flex;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL25hdi5zY3NzPzU3OTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLGNBQWMscUJBQXFCLHFCQUFxQixXQUFXLG9CQUFvQixvQkFBb0IsZ0JBQWdCLGdCQUFnQixFQUFFLFlBQVksbUJBQW1CLGVBQWUsRUFBRSxjQUFjLGtCQUFrQixtQ0FBbUMsd0JBQXdCLEVBQUUsV0FBVyxpQkFBaUIsaUJBQWlCLEVBQUUsWUFBWSxrQkFBa0IsMkJBQTJCLGtDQUFrQyxrQkFBa0IsbUJBQW1CLEVBQUUsV0FBVyxnQkFBZ0IsOEJBQThCLGdCQUFnQixrQkFBa0IsRUFBRSxvQkFBb0Isd0RBQXdELEVBQUUsb0JBQW9CLGtCQUFrQixFQUFFLG9CQUFvQix5QkFBeUIseURBQXlELEVBQUUscUJBQXFCLHlCQUF5QixFQUFFLCtCQUErQixlQUFlLHVCQUF1QixFQUFFLFlBQVksNkNBQTZDLHlCQUF5Qiw2QkFBNkIsb0NBQW9DLDBCQUEwQixpQkFBaUIsZUFBZSxlQUFlLGdCQUFnQixtQkFBbUIsdUJBQXVCLGtCQUFrQix1QkFBdUIsMkJBQTJCLEVBQUUsV0FBVyxpQkFBaUIsaUJBQWlCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxFQUFFLFNBQVMseUVBQXlFLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLGdCQUFnQixLQUFLLFdBQVcsaUJBQWlCLEtBQUssVUFBVSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxnQkFBZ0IsTUFBTSxVQUFVLGFBQWEsWUFBWSxnQkFBZ0IsS0FBSyxrQkFBa0IsTUFBTSxnQkFBZ0IsTUFBTSxZQUFZLG1CQUFtQixPQUFPLGtCQUFrQixNQUFNLEtBQUssaUJBQWlCLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxrQkFBa0IsTUFBTSxVQUFVLGVBQWUsS0FBSyw4REFBOEQsYUFBYSxxQkFBcUIscUJBQXFCLFdBQVcsb0JBQW9CLG9CQUFvQixnQkFBZ0IsZ0JBQWdCLEdBQUcsVUFBVSx3QkFBd0IsZUFBZSxHQUFHLFlBQVksa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRyxTQUFTLGlCQUFpQixpQkFBaUIsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsa0NBQWtDLGtCQUFrQixtQkFBbUIsR0FBRyxTQUFTLGdCQUFnQixtQ0FBbUMsZ0JBQWdCLGtCQUFrQixHQUFHLGFBQWEsWUFBWSwwREFBMEQsS0FBSyxjQUFjLG9CQUFvQixLQUFLLFlBQVksMkJBQTJCLDJEQUEyRCxLQUFLLEdBQUcscUJBQXFCLHlCQUF5QixHQUFHLCtCQUErQixlQUFlLHVCQUF1QixLQUFLLFlBQVksNkNBQTZDLHlCQUF5Qiw2QkFBNkIsb0NBQW9DLDBCQUEwQixpQkFBaUIsZUFBZSxlQUFlLGdCQUFnQixtQkFBbUIsdUJBQXVCLGtCQUFrQix1QkFBdUIsMkJBQTJCLEtBQUssV0FBVyxpQkFBaUIsaUJBQWlCLEtBQUssWUFBWSxvQkFBb0IsS0FBSyxHQUFHLHFCQUFxQjtBQUN4OUc7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3R5bGVzL25hdi5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5hdi13cmFwIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgbWluLWhlaWdodDogOHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAyMjsgfVxcblxcbi5pdGVtcyB7XFxuICBjb2xvcjogIzM0OGJmMztcXG4gIHdpZHRoOiA0MCU7IH1cXG5cXG4uZmxleG5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5sb2dvIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogNXJlbTsgfVxcblxcbi5saW5lcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtOyB9XFxuXFxuLmxpbmUge1xcbiAgei1pbmRleDogMjI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ4YmYzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDAuM2VtOyB9XFxuXFxuLmFjdGl2ZSAubGluZTEge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtMC4xcmVtLCAwLjJyZW0pOyB9XFxuXFxuLmFjdGl2ZSAubGluZTIge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5hY3RpdmUgLmxpbmUzIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMC40cmVtLCAtMC42cmVtKTsgfVxcblxcbi5saW5lMSxcXG4ubGluZTMge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzU2cHgpIHtcXG4gIC5uYXYtd3JhcCB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7IH1cXG4gIC5pdGVtcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44MjIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgbGVmdDogMCU7XFxuICAgIHdpZHRoOiAwJTtcXG4gICAgaGVpZ2h0OiA5MnZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7IH1cXG4gIC5tZW51IHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgLmxpbmVzIHtcXG4gICAgZGlzcGxheTogZmxleDsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25hdi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUViO0VBQ0UsY0FYbUI7RUFZbkIsVUFBVSxFQUFBOztBQUVaO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUVkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxXQUFXO0VBQ1gseUJBaENtQjtFQWlDbkIsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFHZjtFQUVJLG1EQUFtRCxFQUFBOztBQUZ2RDtFQU1JLGFBQWEsRUFBQTs7QUFOakI7RUFTSSxvQkFBb0I7RUFDcEIsb0RBQW9ELEVBQUE7O0FBSXhEOztFQUVFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFO0lBQ0UsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSxzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQW9CLEVBQUE7RUFFdEI7SUFDRSxVQUFVO0lBQ1YsVUFBVSxFQUFBO0VBRVo7SUFDRSxhQUFhLEVBQUEsRUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkcHJpbWFyeS1wdXA6ICMzNDhiZjM7XFxuLm5hdi13cmFwIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgbWluLWhlaWdodDogOHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAyMjtcXG59XFxuLml0ZW1zIHtcXG4gIGNvbG9yOiAkcHJpbWFyeS1wdXA7XFxuICB3aWR0aDogNDAlO1xcbn1cXG4uZmxleG5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmxvZ28ge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbn1cXG4ubGluZXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG59XFxuLmxpbmUge1xcbiAgei1pbmRleDogMjI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1wdXA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMC4zZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgLmxpbmUxIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtMC4xcmVtLCAwLjJyZW0pO1xcbiAgfVxcblxcbiAgLmxpbmUyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5saW5lMyB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgwLjRyZW0sIC0wLjZyZW0pO1xcbiAgfVxcbn1cXG5cXG4ubGluZTEsXFxuLmxpbmUzIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzU2cHgpIHtcXG4gIC5uYXYtd3JhcCB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICB9XFxuICAuaXRlbXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODIyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGxlZnQ6IDAlO1xcbiAgICB3aWR0aDogMCU7XFxuICAgIGhlaWdodDogOTJ2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgfVxcbiAgLm1lbnUge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgLmxpbmVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/nav.scss\n");

/***/ })

})