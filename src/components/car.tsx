// Define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implement the Car class
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

// Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2022);

// React component
const CarComponent: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md text-center">
      <h2 className="text-xl font-bold">My Car</h2>
      <p>Make: {myCar.make}</p>
      <p>Model: {myCar.model}</p>
      <p>Year: {myCar.year}</p>
      <button
        onClick={() => myCar.start()}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Start Car
      </button>
    </div>
  );
};

export default CarComponent;
