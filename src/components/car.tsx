import React from "react";

// Définition de l'interface Vehicle
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implémentation de la classe Car
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// Création d'une instance de Car
const myCar = new Car("Tesla", "Model 3", 2023);

// Composant React stylisé avec Tailwind CSS
const CarComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-purple-200 to-purple-500 p-6">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 shadow-2xl transition transform hover:scale-105">
        <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          My Modern Car
        </h1>
        <div className="mt-4 text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          <p>Make: {myCar.make}</p>
          <p>Model: {myCar.model}</p>
          <p>Year: {myCar.year}</p>
        </div>
        <button
          onClick={() => myCar.start()}
          className="mt-6 px-6 py-3 text-white font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-lg shadow-blue-500/50 hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300"
        >
          Start Car
        </button>
      </div>
    </div>
  );
};

export default CarComponent;
