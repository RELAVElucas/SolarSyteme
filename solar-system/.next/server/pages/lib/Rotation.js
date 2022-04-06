"use strict";
(() => {
var exports = {};
exports.id = 802;
exports.ids = [802,631];
exports.modules = {

/***/ 821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Rotation)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

class Rotation {
    constructor(planetMesh, showRotation = false){
        this.planetPositionX = planetMesh.position.x;
        this.y = 0.25;
        this.z = 0.25;
        this.showRotation = showRotation;
    }
    getMesh() {
        if (this.mesh === undefined || this.mesh === null) {
            const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.planetPositionX, 0.25, 0.25);
            const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshNormalMaterial();
            this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);
            this.mesh.position.x = this.planetPositionX / 2;
            this.mesh.visible = this.showRotation;
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
var __webpack_exports__ = (__webpack_exec__(821));
module.exports = __webpack_exports__;

})();