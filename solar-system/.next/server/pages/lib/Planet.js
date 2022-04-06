"use strict";
(() => {
var exports = {};
exports.id = 11;
exports.ids = [11,631];
exports.modules = {

/***/ 652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Planet)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

class Planet {
    constructor(radius, positionX, textureFile){
        this.radius = radius;
        this.positionX = positionX;
        this.textureFile = textureFile;
    }
    getMesh() {
        if (this.mesh === undefined || this.mesh === null) {
            const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(this.radius);
            const texture = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader().load(this.textureFile);
            const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({
                map: texture
            });
            this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);
            this.mesh.position.x += this.positionX;
        }
        return this.mesh;
    }
};


/***/ }),

/***/ 248:
/***/ ((module) => {

module.exports = require("three");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(652));
module.exports = __webpack_exports__;

})();