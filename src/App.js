import React from "react";
import './App.css'; // Asegúrate de que el nombre del archivo sea correcto

const pets = [
  { name: "Max", breed: "Labrador", age: 5 },
  { name: "Bella", breed: "Bulldog", age: 3 },
  { name: "Charlie", breed: "Poodle", age: 4 }
];

function App() {
  return (
    <div className="container">
      <h1>Lista de Mascotas</h1>
      <div className="grid">
        {pets.map((pet, index) => (
          <div key={index} className="card">
            <h2>{pet.name}</h2>
            <p><strong>Raza:</strong> {pet.breed}</p>
            <p><strong>Edad:</strong> {pet.age} años</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
