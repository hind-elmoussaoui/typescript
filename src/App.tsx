import React from "react";
import CarComponent from "./components/car";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <CarComponent />
    </div>
  );
};

export default App;
