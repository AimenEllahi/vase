import "@google/model-viewer";
import React from "react";

const ModelViewerComponent = () => {
  return (
    <model-viewer
      src='/sofa.glb'
      alt='A 3D model'
      ar
      ar-modes='webxr scene-viewer quick-look'
      auto-rotate
      shadow-intensity='2'
      touch-action='pan-y'
      camera-controls
      camera-orbit='auto auto 80%'
      magic-leap
      ar-scale='auto'
      style={{ width: "100vw", height: "100vh" }}
      exposure='0.25'
      loading='eager'
    ></model-viewer>
  );
};

export default ModelViewerComponent;
