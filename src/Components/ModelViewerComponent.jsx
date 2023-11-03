import "@google/model-viewer";
import React from "react";

const ModelViewerComponent = () => {
  return (
    <model-viewer
      src="/vase.glb"
      alt="A 3D model"
      ar
      ar-modes="webxr scene-viewer quick-look"
      auto-rotate
      shadow-intensity="1"
      touch-action="pan-y"
      camera-controls
      style={{ width: "100vw", height: "80vh" }}
    ></model-viewer>
  );
};

export default ModelViewerComponent;
