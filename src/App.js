import React, { useState } from "react";
import "./App.css";

const pets = [
  { name: "Max", raza: "Labrador", age: 5 },
  { name: "Bella", raza: "Bulldog", age: 3 },
  { name: "Charlie", raza: "Poodle", age: 4 },
  { name: "Luna", raza: "Beagle", age: 2 },
  { name: "Rocky", raza: "Golden Retriever", age: 6 }
];

function App() {
  const [search, setSearch] = useState("");

  // Filtrar mascotas según el texto ingresado
  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(search.toLowerCase()) ||
    pet.raza.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Lista de Mascotas</h1>
      <input
        type="text"
        placeholder="Buscar mascota..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Raza</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {filteredPets.length > 0 ? (
            filteredPets.map((pet, index) => (
              <tr key={index}>
                <td>{pet.name}</td>
                <td>{pet.raza}</td>
                <td>{pet.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="no-results">
                No hay coincidencias
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
