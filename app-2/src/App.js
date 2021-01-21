import React, { useState , useEffect} from 'react';
import axios from 'axios';
import ListItem from './Components/ListItem'
import './App.css';

function App() {
  const [list, setList] = useState([])

  useEffect(() =>{
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((res) => {
      setList(res.data.results);
    })
  },[])

  return (
    <div className="App">
      {list.map((element, index) =>{
        return <ListItem key={index} name={element.name} />
      })}
    </div>
  )
}

export default App;
