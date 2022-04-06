"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,11,802,631];
exports.modules = {

/***/ 878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(248);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_SceneInit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony import */ var _lib_Planet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(652);
/* harmony import */ var _lib_Rotation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(821);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






function Home() {
    let gui;
    const initGui = async ()=>{
        const dat = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 344, 23));
        gui = new dat.GUI();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(async ()=>{
        let scene = new _lib_SceneInit__WEBPACK_IMPORTED_MODULE_2__["default"]();
        scene.initScene();
        scene.animate();
        const sunGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(30);
        const sunTexture = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader().load("sun.jpeg");
        const sunMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({
            map: sunTexture
        });
        const sunMesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(sunGeometry, sunMaterial);
        const solarSystem = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        solarSystem.add(sunMesh);
        const STAR_COUNT = 10000;
        const geometry = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry();
        const material = new three__WEBPACK_IMPORTED_MODULE_1__.PointsMaterial({
            color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("lightblue"),
            size: 2
        });
        const vertices = [];
        for(let i = 0; i < STAR_COUNT; i++){
            const x = Math.random() * 600 - 300;
            const y = Math.random() * 600 - 300;
            const z = Math.random() * 600 - 300;
            vertices.push(x, y, z);
        }
        geometry.velocity = 0;
        geometry.acceleration = 0.02;
        geometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_1__.Float32BufferAttribute(vertices, 3));
        const stars = new three__WEBPACK_IMPORTED_MODULE_1__.Points(geometry, material);
        stars.rotation.y += 0.002;
        solarSystem.add(stars);
        scene.scene.add(solarSystem);
        const mercury = new _lib_Planet__WEBPACK_IMPORTED_MODULE_3__["default"](2, 45, "mercury.png");
        const mercuryMesh = mercury.getMesh();
        let mercurySystem = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        mercurySystem.add(mercuryMesh);
        const venus = new _lib_Planet__WEBPACK_IMPORTED_MODULE_3__["default"](4, 62, "venus.jpeg");
        const venusMesh = venus.getMesh();
        let venusSystem = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        venusSystem.add(venusMesh);
        const earth = new _lib_Planet__WEBPACK_IMPORTED_MODULE_3__["default"](4, 77, "earth.jpeg");
        const earthMesh = earth.getMesh();
        let earthSystem = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        earthSystem.add(earthMesh);
        const mars = new _lib_Planet__WEBPACK_IMPORTED_MODULE_3__["default"](3, 95, "mars.jpeg");
        const marsMesh = mars.getMesh();
        let marsSystem = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        marsSystem.add(marsMesh);
        const jupiter = new _lib_Planet__WEBPACK_IMPORTED_MODULE_3__["default"](12, 132, "jupiter.jpg");
        const jupiterMesh = jupiter.getMesh();
        let jupiterSystem = new three__WEBPACK_IMPORTED_MODULE_1__.Group;
        jupiterSystem.add(jupiterMesh);
        const saturn = new _lib_Planet__WEBPACK_IMPORTED_MODULE_3__["default"](10, 164, "saturn.jpg");
        const saturnMesh = saturn.getMesh();
        let saturnSystem = new three__WEBPACK_IMPORTED_MODULE_1__.Group;
        saturnSystem.add(saturnMesh);
        const uranus = new _lib_Planet__WEBPACK_IMPORTED_MODULE_3__["default"](7, 196, "uranus.jpg");
        const uranusMesh = uranus.getMesh();
        let uranusSystem = new three__WEBPACK_IMPORTED_MODULE_1__.Group;
        uranusSystem.add(uranusMesh);
        const neptune = new _lib_Planet__WEBPACK_IMPORTED_MODULE_3__["default"](7, 230, "neptune.jpg");
        const neptuneMesh = neptune.getMesh();
        let neptuneSystem = new three__WEBPACK_IMPORTED_MODULE_1__.Group;
        neptuneSystem.add(neptuneMesh);
        const pluton = new _lib_Planet__WEBPACK_IMPORTED_MODULE_3__["default"](1, 264, "pluton.png");
        const plutonMesh = pluton.getMesh();
        let plutonSystem = new three__WEBPACK_IMPORTED_MODULE_1__.Group;
        plutonSystem.add(plutonMesh);
        solarSystem.add(mercurySystem, venusSystem, earthSystem, marsSystem, jupiterSystem, saturnSystem, uranusSystem, neptuneSystem, plutonSystem);
        const mercuryRotation = new _lib_Rotation__WEBPACK_IMPORTED_MODULE_4__["default"](mercuryMesh);
        const mercuryRotationMesh = mercuryRotation.getMesh();
        mercurySystem.add(mercuryRotationMesh);
        const venusRotation = new _lib_Rotation__WEBPACK_IMPORTED_MODULE_4__["default"](venusMesh);
        const venusRotationMesh = venusRotation.getMesh();
        venusSystem.add(venusRotationMesh);
        const earthRotation = new _lib_Rotation__WEBPACK_IMPORTED_MODULE_4__["default"](earthMesh);
        const earthRotationMesh = earthRotation.getMesh();
        earthSystem.add(earthRotationMesh);
        const marsRotation = new _lib_Rotation__WEBPACK_IMPORTED_MODULE_4__["default"](marsMesh);
        const marsRotationMesh = marsRotation.getMesh();
        marsSystem.add(marsRotationMesh);
        const jupiterRotation = new _lib_Rotation__WEBPACK_IMPORTED_MODULE_4__["default"](jupiterMesh);
        const jupiterRotationMesh = jupiterRotation.getMesh();
        jupiterSystem.add(jupiterRotationMesh);
        const saturnRotation = new _lib_Rotation__WEBPACK_IMPORTED_MODULE_4__["default"](saturnMesh);
        const saturnRotationMesh = saturnRotation.getMesh();
        saturnSystem.add(saturnRotationMesh);
        const uranusRotation = new _lib_Rotation__WEBPACK_IMPORTED_MODULE_4__["default"](uranusMesh);
        const uranusRotationMesh = uranusRotation.getMesh();
        uranusSystem.add(uranusRotationMesh);
        const neptuneRotation = new _lib_Rotation__WEBPACK_IMPORTED_MODULE_4__["default"](neptuneMesh);
        const neptuneRotationMesh = neptuneRotation.getMesh();
        neptuneSystem.add(neptuneRotationMesh);
        const plutonRotation = new _lib_Rotation__WEBPACK_IMPORTED_MODULE_4__["default"](plutonMesh);
        const plutonRotationMesh = plutonRotation.getMesh();
        plutonSystem.add(plutonRotationMesh);
        await initGui();
        const solarSystemGui = gui.addFolder("solar system");
        solarSystemGui.add(mercuryRotationMesh, "visible").name("mercury").listen();
        solarSystemGui.add(venusRotationMesh, "visible").name("venus").listen();
        solarSystemGui.add(earthRotationMesh, "visible").name("earth").listen();
        solarSystemGui.add(marsRotationMesh, "visible").name("mars").listen();
        solarSystemGui.add(jupiterRotationMesh, "visible").name("jupiter").listen();
        solarSystemGui.add(saturnRotationMesh, "visible").name("saturn").listen();
        solarSystemGui.add(uranusRotationMesh, "visible").name("uranus").listen();
        solarSystemGui.add(neptuneRotationMesh, "visible").name("neptune").listen();
        solarSystemGui.add(plutonRotationMesh, "visible").name("pluton").listen();
        const EARTH_YEAR = 2 * Math.PI * (1 / 60) * (1 / 60);
        const animate = ()=>{
            sunMesh.rotation.y += 0.001;
            mercuryMesh.rotation.y += 0.01;
            venusMesh.rotation.y += 0.01;
            earthMesh.rotation.y += 0.01;
            marsMesh.rotation.y += 0.01;
            jupiterMesh.rotation.y += 0.01;
            saturnMesh.rotation.y += 0.01;
            uranusMesh.rotation.y += 0.01;
            neptuneMesh.rotation.y += 0.01;
            plutonMesh.rotation.y += 0.01;
            mercurySystem.rotation.y += EARTH_YEAR * 3;
            venusSystem.rotation.y += EARTH_YEAR * 1.5;
            earthSystem.rotation.y += EARTH_YEAR;
            marsSystem.rotation.y += EARTH_YEAR * 0.7;
            jupiterSystem.rotation.y += EARTH_YEAR * 0.5;
            saturnSystem.rotation.y += EARTH_YEAR * 0.3;
            uranusSystem.rotation.y += EARTH_YEAR * 0.2;
            neptuneSystem.rotation.y += EARTH_YEAR * 0.15;
            plutonSystem.rotation.y += EARTH_YEAR * 0.1;
            requestAnimationFrame(animate);
        };
        animate();
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col items-center justify-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
            id: "myThreeJsCanvas"
        })
    }));
};


/***/ }),

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

/***/ 344:
/***/ ((module) => {

module.exports = require("dat.gui");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 248:
/***/ ((module) => {

module.exports = require("three");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [595,63], () => (__webpack_exec__(878)));
module.exports = __webpack_exports__;

})();