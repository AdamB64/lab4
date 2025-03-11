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
  const url="http://127.0.0.1:8000/api/todolist"
 axios.get(url).then((response) => {
console.log(response.data)
// If I'd got the server response to be a perfect match for the react, I wouldn't need this!

const list = document.getElementById("todo"); // Get the UL or OL element
const array = response.data; // Array of todo items

// Clear previous list items to avoid duplication
list.innerHTML = "";

// Loop through the array and create list items
for (let i = 0; i < array.length; i++) {
  const listItem = document.createElement("li"); // Create a new <li> element
  listItem.textContent = `#${array[i].todoNumber}: ${array[i].todoText}`; // Set text

  list.appendChild(listItem); // Append to the list
}


/*function untidy_mapping(element) {
return{ id: Number(element.todoNumber), name: element.todoText, done: 
false };
}
const retrievedToDoList = response.data.map(untidy_mapping);
setToDoList([
...toDoList,
...retrievedToDoList
 ]);*/
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
 <list id="todo"></list>

    </>
  );
}

