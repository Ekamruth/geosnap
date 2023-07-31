import React, { useEffect, useRef } from "react";
import * as BABYLON from 'babylonjs'

const BabylonScene = (props) => {
  // console.log(props.textureImg)
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
      camera.wheelPrecision = 50;
      camera.angularSensibilityX = 3000;
      camera.angularSensibilityY = 3000;

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
        sphere.rotation.x = 2;
        sphere.rotation.y = 3;
        sphere.rotation.z = 2;

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

      return scene;
    }

    const scene = createScene();

    const handleWheelEvent = (event) => {
      event.preventDefault();
    };

    canvas.addEventListener('wheel', handleWheelEvent, { passive: false });

    engine.runRenderLoop(() => {
      scene.render();
    })

    // return ()=>{
    //   scene.dispose();
    //   engine.dispose();
    // } 
  }, [appliedTexture, shape])

  return (<canvas
    width={650}
    height={500}
    ref={sceneRef} />)
}

export default BabylonScene
