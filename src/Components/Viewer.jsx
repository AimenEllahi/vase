import React from "react";
import Concrete from "./Models/Concrete";
import Anchor from "./Models/Anchor";

export default function Viewer() {
  return (
    <group>
      <Concrete />
      <Anchor />
    </group>
  );
}
