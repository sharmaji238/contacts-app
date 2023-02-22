import React,{useState, useEffect} from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import {v4 as uuid} from "uuid";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import '../styles/Form.css'

import { ContactDetail } from './ContactDetail';
import api from '../api/contacts'
import { EditContact } from './EditContact';
function App() {
 

  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("")
const [searchResult, setSearchResult] = useState([])
  //RetrieveContacts
  const retrieveContacts = async () =>{
    const response = await api.get("/contacts");
    return response.data;
  }

  const addContactHandler=async (contact)=>{
    console.log(contact);
    const request ={
      id: uuid(),...contact
    }
    
    const response = await api.post("/contacts", request)
    console.log(response);
    
    setContacts([...contacts, response.data]);
    // setContacts([...contacts, {id:uuid(),...contact}]);
      
  };

  const searchHandler =(search)=>{
    setSearch(search);
    if (search !== ""){
      const newContactList = contacts.filter((contact)=>{
        // console.log(Object.values(contact).join(""));
        return Object.values(contact)
                      .join("")
                      .toLowerCase()
                      .includes(search.toLowerCase());
      })

      setSearchResult(newContactList);
    }
    else{
      setSearchResult(contacts);
    }
  };


  const updateContactHandler= async(contact)=>{
   const response= await api.put(`/contacts/${contact.id}`, contact)
    console.log(response);
    console.log("first12")
    const {id, name, email} = response.data;
    setContacts(contacts.map((contact) =>{
      return contact.id === id? {...response.data} : contact;
    }));
  }
 
  const removeContactHandler=async (deleteId)=>{
    await api.delete(`/contacts/${deleteId}`)

    const newContactList=contacts.filter(
      (contact)=>{return contact.id !== deleteId;  }
      );
      setContacts(newContactList);
  }

  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if (retrieveContacts) {setContacts(retrieveContacts)};
    
    const getAllContacts= async ()=>{
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    }
    
    getAllContacts(); 
  }, []);

   useEffect(() => {
    // if(contacts.length!==0)
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));  
   }, [contacts]);                                      //code is executing after component has been mounted.
                                   //this it is setting the initial value of contacts into the localStorage again. 

  return (
    
    <div className='ui container'>
        <Header/>
        <Routes>          
        
        <Route path='/' element={<ContactList 
              contacts={search.length< 1 ? contacts : searchResult} 
              getContactId={removeContactHandler}
              searchKeyword={searchHandler}
              />} />
        <Route path='add' element={<AddContact addContactHandler={addContactHandler}/>} />
        <Route path='edit' element={<EditContact updateContactHandler={updateContactHandler}/>} />
        <Route path='contact/:id' element={<ContactDetail/>} />            
        </Routes>
           
        {/* <AddContact addContactHandler={addContactHandler}/> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}    
        {/* <Test/>          */}
        {/* <ContactDetail/> */}
     </div>
  );
}

export default App;




// const contacts = [
  //   {
  //     id:"1",
  //     name:"Ravin",
  //     email:"ravi@gamil.com",
  //   },
  //   {
  //     id:"2",
  //     name:"Joe",
  //     email:"Joe@gamil.com",
  //   }
  // ];
