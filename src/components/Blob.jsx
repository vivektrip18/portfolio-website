/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/blob.gltf 
Author: tamminen (https://sketchfab.com/tamminen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/staff-pick-6b62b46f5337400289281525b3949090
Title: "Staff pick"
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/blob.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="inner_0">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.material} />
              </group>
              <group name="outer_1">
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.outer} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/blob.gltf')
