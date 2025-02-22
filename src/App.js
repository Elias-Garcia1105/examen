import React from "react";
import './App.css';

const pets = [
  { name: "Max", breed: "Labrador", age: 5 },
  { name: "Bella", breed: "Bulldog", age: 3 },
  { name: "Charlie", breed: "Poodle", age: 4 }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Mascotas</h1>
        <table className="table-auto border-collapse border border-gray-400 w-3/4 mx-auto mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Nombre</th>
              <th className="border border-gray-400 px-4 py-2">Raza</th>
              <th className="border border-gray-400 px-4 py-2">Edad</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-400 px-4 py-2">{pet.name}</td>
                <td className="border border-gray-400 px-4 py-2">{pet.breed}</td>
                <td className="border border-gray-400 px-4 py-2">{pet.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
