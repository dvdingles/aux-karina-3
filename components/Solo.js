/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Karina({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/karina.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ3_ARD-geom"].geometry}
        material={materials.TQ3_ARD_front}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ3_ARD-geom_1"].geometry}
        material={materials.TQ3_ARD_back}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ3_ARD-geom_2"].geometry}
        material={materials.TQ3_ARD_edge}
      />
    </group>
  );
}

useGLTF.preload("/karina.gltf");
