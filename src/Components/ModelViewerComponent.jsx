import "@google/model-viewer";
import React from "react";

const ModelViewerComponent = () => {
  return (
    <model-viewer
      src="/vase.glb"
      ios-src="/untitled.glb"
      alt="A 3D model"
      ar
      ar-modes="webxr scene-viewer quick-look"
      auto-rotate
      shadow-intensity="1"
      touch-action="pan-y"
      camera-controls
      magic-leap
      ar-scale="auto"
      camera-orbit="0deg 90deg 5m" // Adjust the camera-orbit attribute to set the initial zoom level to 5%
      style={{ width: "100vw", height: "80vh" }}
    ></model-viewer>
  );
};

export default ModelViewerComponent;
