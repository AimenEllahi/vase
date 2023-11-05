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
      min-camera-orbit="auto auto 100%"
      max-camera-orbit="auto auto 100%"
      min-field-of-view="110deg"
      max-field-of-view="110deg"
      style={{ width: "100vw", height: "80vh" }}
    ></model-viewer>
  );
};

export default ModelViewerComponent;
