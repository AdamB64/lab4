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
 var requestURI = "http://127.0.0.1:8000/api/todolist?todoText=" + element.name + 
"&todoNumber=" + element.id
 console.log(requestURI)
 axios.post(requestURI)
})
}


function get(){
  console.log("Getting ToDo list")
 axios.get('http://127.0.0.1:8000/api/todolist').then((response) => {
console.log(response.data)
// If I'd got the server response to be a perfect match for the react, I wouldn't need this!
function untidy_mapping(element) {
return{ id: Number(element.todoNumber), name: element.todoText, done: 
false };
}
const retrievedToDoList = response.data.map(untidy_mapping);
setToDoList([
...toDoList,
...retrievedToDoList
 ]);
});
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
      <button onClick={() => get()}>Retrieve ToDo List</button>
 
 <button onClick={() => save(artists)}>Save ToDo List</button>

    </>
  );
}

