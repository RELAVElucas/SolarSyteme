"use strict";
exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 63:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SceneInit)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(365);
/* harmony import */ var three_examples_jsm_libs_stats_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);



class SceneInit {
    constructor(fov = 31, camera, scene, stats, controls, renderer){
        this.fov = fov;
        this.scene = scene;
        this.stats = stats;
        this.camera = camera;
        this.controls = controls;
        this.renderer = renderer;
    }
    initScene() {
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.z = 550;
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
            canvas: document.getElementById("myThreeJsCanvas"),
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__/* .OrbitControls */ .z(this.camera, this.renderer.domElement);
        this.stats = (0,three_examples_jsm_libs_stats_module__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
        document.body.appendChild(this.stats.dom);
        window.addEventListener("resize", ()=>this.onWindowResize()
        , false);
    }
    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        this.render();
        this.stats.update();
    }
    render() {
        this.renderer.render(this.scene, this.camera);
    }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
};


/***/ })

};
;