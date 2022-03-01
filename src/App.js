import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import contactsArray from "./contacts.json";

//console.log(contact)

function App() {

  const [contacts, setContacts] = useState(contactsArray.splice(0, 5))

  function getRandom(){
    let random = contactsArray[Math.floor(Math.random() * contactsArray.length)]
    if(contacts.length === contactsArray.length) return alert('YOU CANT ADD MORE STUFF');
    if (contacts.includes(random)){
      getRandom()
    }else{
      setContacts(contacts.concat(random))
    }
  }

  function sortByPop(){
    const sortedCelebs = contacts.map(elem=>elem).sort((a,b)=>{return a.popularity -b.popularity})
    console.log(contacts.map)
    setContacts(sortedCelebs)
  }

  function sortByName(){
    const sortedByName = contacts.map(elem=>elem).sort((a, b)=>{
      if(a.name < b.name) return -1;
      if(b.name > a.name) return 1;
      return 0;
    })
    setContacts(sortedByName)
  }

  function deleteById(id){
    setContacts(contacts.filter((contact)=>contact.id !==id))

  }
  
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={getRandom}>Random Contact</button>
      <button onClick={sortByPop}>Sort By Popularity</button>
      <button onClick={sortByName}>Sort By Name</button>
      

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="pic" width="135" height="125" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? <p>🏆</p> : <p> </p>} </td>
                <td>{contact.wonEmmy ? <p>🏆</p> : <p> </p>} </td>
                <td><button onClick={()=> deleteById(contact.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
