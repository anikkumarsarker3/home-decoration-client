import React from "react";
import { PulseLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <PulseLoader size={12} />
    </div>
  );
};

export default LoadingSpinner;
