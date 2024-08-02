
import { useEffect, useState } from 'react';
import './App.css';

function App() {

    const[character, setCharacter] = useState([])

    const getApi = async () => {
      try{
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = await res.json()

        console.log(data.results)

        setCharacter(data.results)
      } catch(error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getApi()
    }, [])
  

  return (
    <div className="App">
      <div className='Titulos'>
        <h1>Muestra de datos con Fetch</h1>
        <h2>Utilizando API rickandmortyapi</h2>
      </div>
      <div className='per'>
        {
        character.map((character)=><div key={character.id} className='ee'>
          <h3>{character.name}</h3>
          <img src={character.image} alt={character.name} />
          <p>{character.species}</p>
        </div>)
        }
      </div>
    </div>
  );
}

export default App;
