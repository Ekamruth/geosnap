import React, { useEffect, useRef } from "react";
import * as BABYLON from 'babylonjs'

import './BabylonScene.css'

const BabylonScene = (props) => {
  const sceneRef = useRef(null);
  const appliedTexture = props.textureImg;
  const shape = props.shape;

  const scene = useRef(null);
  const cuboid = useRef(null);
  const sphere = useRef(null);
  const cube = useRef(null);
  // const shapeMesh = useRef(null);


  useEffect(() => {
    console.log("Babylon scene starting")
    const canvas = sceneRef.current;
    const engine = new BABYLON.Engine(canvas, true);

    const createScene = () => {
      const scene = new BABYLON.Scene(engine);

      scene.clearColor = new BABYLON.Color3(0.1, 0.1, 0.1)
      // const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -14), scene);
      const camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 8, new BABYLON.Vector3(0, 3, 0), scene)
      camera.attachControl(canvas, true);
      camera.wheelPrecision = 50;
      camera.angularSensibilityX = 3000;
      camera.angularSensibilityY = 3000;

      const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
      light.intensity = 0.5;
      const light2 = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(10, 0, 0), scene);
      light2.intensity = 0.5;
      const light3 = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 0, 10), scene);
      light3.intensity = 0.5;

      if (shape === 'cuboid') {
        cuboid.current = BABYLON.MeshBuilder.CreateBox('cuboid', { size: 3, height: 6, width: 3 }, scene);
        cuboid.current.rotation.x = 2;
        cuboid.current.rotation.y = 3;
        // shapeMesh.current = BABYLON.MeshBuilder.CreateBox('cuboid', { size: 3, height: 6, width: 3 }, scene);
        // shapeMesh.current.rotation.x = 2;
        // shapeMesh.current.rotation.y = 3;
        // console.log(shapeMesh.current.id)
      }

      if (shape === 'sphere') {
        sphere.current = BABYLON.MeshBuilder.CreateSphere('sphere', { segments: 32, diameter: 4 }, scene);
        sphere.current.rotation.x = 2;
        sphere.current.rotation.y = 3;
        sphere.current.rotation.z = 2;
        // shapeMesh.current = BABYLON.MeshBuilder.CreateSphere('sphere', { segments: 32, diameter: 4 }, scene);
        // shapeMesh.current.rotation.x = 2;
        // shapeMesh.current.rotation.y = 3;
        // shapeMesh.current.rotation.z = 2;
      }

      if (shape === 'cube') {
        cube.current = BABYLON.MeshBuilder.CreateBox('cube', { size: 3 }, scene);
        cube.current.rotation.x = 1;
        cube.current.rotation.y = 3;
        // shapeMesh.current = BABYLON.MeshBuilder.CreateBox('cube', { size: 3 }, scene);
        // shapeMesh.current.rotation.x = 1;
        // shapeMesh.current.rotation.y = 3;
      }

      // Create X, Y, and Z axes lines
      const xAxis = BABYLON.MeshBuilder.CreateLines(
        'xAxis',
        { points: [BABYLON.Vector3.Zero(), new BABYLON.Vector3(5, 0, 0)] },
        scene
      );
      const yAxis = BABYLON.MeshBuilder.CreateLines(
        'yAxis',
        { points: [BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 5, 0)] },
        scene
      );
      const zAxis = BABYLON.MeshBuilder.CreateLines(
        'zAxis',
        { points: [BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, 5)] },
        scene
      );

      // Customize the color of the axes lines
      xAxis.color = new BABYLON.Color3(1, 0, 0); // Red X-axis
      yAxis.color = new BABYLON.Color3(0, 1, 0); // Green Y-axis
      zAxis.color = new BABYLON.Color3(0, 0, 1); // Blue Z-axis
      console.log("Babylon scene return")
      return scene;
    }

    scene.current = createScene();

    const handleWheelEvent = (event) => {
      event.preventDefault();
    };

    canvas.addEventListener('wheel', handleWheelEvent, { passive: false });

    engine.runRenderLoop(() => {
      scene.current.render();
    })

    return () => {
      scene.current.dispose();
      engine.dispose();
    }
  }, [shape])

  useEffect(() => {
    console.log("texture applied")
    if (shape === "cuboid") {
      if (appliedTexture !== null) {
        const material = new BABYLON.StandardMaterial('material', scene.current);
        material.diffuseTexture = new BABYLON.Texture(appliedTexture, scene.current);
        cuboid.current.material = material;
      }
      else cuboid.current.material = null;
    }

    if (shape === "sphere") {
      if (appliedTexture !== null) {
      const material = new BABYLON.StandardMaterial('material', scene.current);
      material.diffuseTexture = new BABYLON.Texture(appliedTexture, scene.current);
      sphere.current.material = material;
      }
      else sphere.current.material = null;
    }

    if (shape === "cube") {
      if (appliedTexture !== null) {
      const material = new BABYLON.StandardMaterial('material', scene.current);
      material.diffuseTexture = new BABYLON.Texture(appliedTexture, scene.current);
      cube.current.material = material;
      }
      else cube.current.material = null;
  }
  }, [shape, appliedTexture])

  // useEffect(()=>{
  //   const applyMaterial = (mesh, texture, scene)=>{
  //     if(appliedTexture !== null) {
  //       const material = new BABYLON.StandardMaterial('material', scene);
  //         material.diffuseTexture = new BABYLON.Texture(texture, scene);
  //         mesh.material = material;
  //     }
  //     else mesh.material = null;
  //   } 
    
  //   if (shapeMesh.current && shapeMesh.current.id) {
  //     applyMaterial(shapeMesh.current, appliedTexture, scene.current);
  //   }
  // },[shapeMesh.current.id, appliedTexture])

  return (<canvas
    ref={sceneRef} />)
}

export default BabylonScene




