import { useState } from 'react';
import './App.css';
import Animal from './components/Animal';
import { database } from './firebase/firebase';
function App() {

  const [animalAMostrar, setAnimalAMostrar] = useState([])

  const obtenerAnimales = () => {
    

    const animales = database
    .collection("animales")
    .where("categoria", "==", "gatos");

    animales.get().then((query) =>
    setAnimalAMostrar(
      query.docs.map((doc)=>{
        return {...doc.data(), id: doc.id}
      })
    )
    );
  };
  
  return (
    <div>
      <h1>Firebase</h1>
      <button onClick={obtenerAnimales}> Llamar a firebase </button>
      {animalAMostrar.length ? (
        animalAMostrar.map((animal) => (
          <Animal animal={animal} key={animal.id} />
        ))
      ): (
        <h3>Cargando...</h3>
      )}
    </div>
  );
}

export default App;
