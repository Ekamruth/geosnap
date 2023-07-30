import React, { useEffect, useRef, useState } from "react";
import * as BABYLON from 'babylonjs'

const BabylonScene = (props) => {
  console.log(props.textureImg)
  const sceneRef = useRef(null);
  const appliedTexture = props.textureImg;
  const shape = props.shape;

  useEffect(() => {
    const canvas = sceneRef.current;
    const engine = new BABYLON.Engine(canvas, true);

    const createScene = () => {
      const scene = new BABYLON.Scene(engine);

      scene.clearColor = new BABYLON.Color3(0.1, 0.1, 0.1)
      // const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -14), scene);
      const camera = new BABYLON.ArcRotateCamera('camera',0,0,8, new BABYLON.Vector3(0,3,0), scene)
      camera.attachControl(canvas, true);

      const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
      light.intensity = 0.5;
      const light2 = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(10, 0, 0), scene);
      light2.intensity = 0.5;
      const light3 = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 0, 10), scene);
      light3.intensity = 0.5;

      if(shape === 'cuboid'){
        const cuboid = BABYLON.MeshBuilder.CreateBox('cuboid', { size: 3, height: 6, width: 3 }, scene);
        cuboid.rotation.x = 2;
        cuboid.rotation.y = 3;

        if (appliedTexture !== null) {
          const material = new BABYLON.StandardMaterial('material', scene);
          material.diffuseTexture = new BABYLON.Texture(appliedTexture, scene);
          cuboid.material = material;
        }
      }
      
      if(shape === 'sphere'){
        const sphere = BABYLON.MeshBuilder.CreateSphere('sphere',{segments: 32, diameter:4}, scene);

        if (appliedTexture !== null) {
          const material = new BABYLON.StandardMaterial('material', scene);
          material.diffuseTexture = new BABYLON.Texture(appliedTexture, scene);
          sphere.material = material;
        }
      }

      if(shape === 'cube'){
        const cube = BABYLON.MeshBuilder.CreateBox('cube', {size:3}, scene);
        cube.rotation.x=1;
        cube.rotation.y=3;

        if (appliedTexture !== null) {
          const material = new BABYLON.StandardMaterial('material', scene);
          material.diffuseTexture = new BABYLON.Texture(appliedTexture, scene);
          cube.material = material;
        }
      }

      return scene;
    }

    const scene = createScene();

    engine.runRenderLoop(() => {
      scene.render();
    })

    // return ()=>{
    //   scene.dispose();
    //   engine.dispose();
    // } 
  }, [appliedTexture, shape])

  return (<canvas
    width={600}
    height={500}
    ref={sceneRef} />)
}

export default BabylonScene
