import { useState } from 'react';
import {useQuery} from 'react-query'
import axios from 'axios'

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
function save(toDoList){
  console.log("Storing items")
toDoList.forEach( element =>
{
 var requestURI = "http://127.0.0.1:8000/api/todolist?todoNumber=" + element.id + 
"&todoText=" + element.name
 console.log(requestURI)
 axios.post(requestURI)
})
}

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
      <button onClick={() => {
 
}}>Retrieve ToDo List</button>
 
 <button onClick={() => save(artists)}>Save ToDo List</button>

    </>
  );
}

