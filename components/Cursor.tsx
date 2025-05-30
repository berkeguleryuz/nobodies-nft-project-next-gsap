"use client";
import { useEffect } from "react";

import fluidCursor from "@/utils/cursor";

const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 pointer-events-none">
      <canvas id="fluid" className="w-screen h-screen pointer-events-none" />
    </div>
  );
};
export default FluidCursor;
