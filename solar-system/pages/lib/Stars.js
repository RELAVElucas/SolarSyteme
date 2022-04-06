import React, { useRef, useMemo } from "react";
import * as THREE from "three";

const STAR_COUNT = 2000;

export function Stars() {
  let group = useRef();

  const [geometry, material, coordinates] = useMemo(() => {
    const geometry = new THREE.SphereBufferGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color("lightblue")
    });
    const coordinates = new Array(STAR_COUNT)
      .fill()
      .map((i) => [
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      ]);
    return [geometry, material, coordinates];
  }, []);

  return (
    <group ref={group}>
      {coordinates.map(([p1, p2, p3], idx) => (
        <mesh
          key={idx}
          geometry={geometry}
          material={material}
          position={[p1, p2, p3]}
        />
      ))}
    </group>
  );
}
