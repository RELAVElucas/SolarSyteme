import * as THREE from "three";
import SceneInit from "./lib/SceneInit";
import Planet from "./lib/Planet";
import Rotation from "./lib/Rotation";
import React, { useEffect } from 'react'
export default function Home() {
  let gui;

  const initGui = async () => {
    const dat = await import("dat.gui");
    gui = new dat.GUI();
  };

  useEffect(async () => {
    let scene = new SceneInit();
    scene.initScene();
    scene.animate();

    const sunGeometry = new THREE.SphereGeometry(30);
    const sunTexture = new THREE.TextureLoader().load("sun.jpeg");
    const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    const solarSystem = new THREE.Group();
    solarSystem.add(sunMesh);

    const STAR_COUNT = 10000;
    const geometry = new THREE.SphereGeometry();
    const material = new THREE.PointsMaterial({
      color: new THREE.Color("lightblue"),
      size: 2
    });
    const vertices = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      const x = Math.random() * 600 - 300;
      const y = Math.random() * 600 - 300;
      const z = Math.random() * 600 - 300;
      vertices.push(x, y, z);
    }
    geometry.velocity = 0;
    geometry.acceleration = 0.02;
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const stars = new THREE.Points(geometry, material)
    stars.rotation.y +=0.002;
    solarSystem.add(stars);

    scene.scene.add(solarSystem)

    const mercury = new Planet(2, 45, "mercury.png");
    const mercuryMesh = mercury.getMesh();
    let mercurySystem = new THREE.Group();
    mercurySystem.add(mercuryMesh);

    const venus = new Planet(4, 62, "venus.jpeg");
    const venusMesh = venus.getMesh();
    let venusSystem = new THREE.Group();
    venusSystem.add(venusMesh);

    const earth = new Planet(4, 77, "earth.jpeg");
    const earthMesh = earth.getMesh();
    let earthSystem = new THREE.Group();
    earthSystem.add(earthMesh);

    const mars = new Planet(3, 95, "mars.jpeg");
    const marsMesh = mars.getMesh();
    let marsSystem = new THREE.Group();
    marsSystem.add(marsMesh);

    const jupiter = new Planet(12, 132, "jupiter.jpg");
    const jupiterMesh = jupiter.getMesh();
    let jupiterSystem = new THREE.Group;
    jupiterSystem.add(jupiterMesh);

    const saturn = new Planet(10, 164, "saturn.jpg");
    const saturnMesh = saturn.getMesh();
    let saturnSystem = new THREE.Group;
    saturnSystem.add(saturnMesh);

    const uranus = new Planet(7, 196, "uranus.jpg");
    const uranusMesh = uranus.getMesh();
    let uranusSystem = new THREE.Group;
    uranusSystem.add(uranusMesh);

    const neptune = new Planet(7, 230, "neptune.jpg");
    const neptuneMesh = neptune.getMesh();
    let neptuneSystem = new THREE.Group;
    neptuneSystem.add(neptuneMesh);

    const pluton = new Planet(1, 264, "pluton.png");
    const plutonMesh = pluton.getMesh();
    let plutonSystem = new THREE.Group;
    plutonSystem.add(plutonMesh);

    solarSystem.add(mercurySystem, venusSystem, earthSystem, marsSystem, jupiterSystem, saturnSystem, uranusSystem, neptuneSystem, plutonSystem);

    const mercuryRotation = new Rotation(mercuryMesh);
    const mercuryRotationMesh = mercuryRotation.getMesh();
    mercurySystem.add(mercuryRotationMesh);
    const venusRotation = new Rotation(venusMesh);
    const venusRotationMesh = venusRotation.getMesh();
    venusSystem.add(venusRotationMesh);
    const earthRotation = new Rotation(earthMesh);
    const earthRotationMesh = earthRotation.getMesh();
    earthSystem.add(earthRotationMesh);
    const marsRotation = new Rotation(marsMesh);
    const marsRotationMesh = marsRotation.getMesh();
    marsSystem.add(marsRotationMesh);
    const jupiterRotation = new Rotation(jupiterMesh);
    const jupiterRotationMesh = jupiterRotation.getMesh();
    jupiterSystem.add(jupiterRotationMesh);
    const saturnRotation = new Rotation(saturnMesh);
    const saturnRotationMesh = saturnRotation.getMesh();
    saturnSystem.add(saturnRotationMesh);
    const uranusRotation = new Rotation(uranusMesh);
    const uranusRotationMesh = uranusRotation.getMesh();
    uranusSystem.add(uranusRotationMesh);
    const neptuneRotation = new Rotation(neptuneMesh);
    const neptuneRotationMesh = neptuneRotation.getMesh();
    neptuneSystem.add(neptuneRotationMesh);
    const plutonRotation = new Rotation(plutonMesh);
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

    const animate = () => {
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


  return (
    <div className="flex flex-col items-center justify-center">
      <canvas id="myThreeJsCanvas">
        {/* <Stars></Stars> */}
      </canvas>
    </div>
  );
}
