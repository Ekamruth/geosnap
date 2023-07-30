import React, {useContext} from "react";
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, StandardMaterial, Texture, Color3 } from "@babylonjs/core";
import SceneComponent from "../../components/SceneComponent/SceneComponent";

import { textureContext } from "../Contexts/Contexts";

import './CanvasWindow.css'

let box;


const CanvasWindow = (scene, textureImg) => {
  // const textureImgCtx = useContext(textureContext)
  // const textureImg = textureImgCtx.textureImg

  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());

  scene.clearColor = new Color3(0.1, 0.1, 0.1);

  const canvas = scene.getEngine().getRenderingCanvas();
  camera.attachControl(canvas, true);

  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  box = MeshBuilder.CreateBox("box", {size:3, height: 3, width:6}, scene)
  
  if(textureImg !== null){
    const texture_material = new StandardMaterial('texture_material');
    texture_material.diffuseTexture = new Texture(textureImg, scene)
    box.material = texture_material;
  }
    
}

export default () => (
  <div className="canvas_window">
    <SceneComponent antialias CanvasWindow={CanvasWindow} id="my-canvas" />
  </div>
);
