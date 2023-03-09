import React, {useRef} from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
import '../styles/searchBar.css'

const ContactList = (props) =>{
    console.log(props);

    const inputRef = useRef("");

    const getSearchTerm=()=>{
        // console.log(inputRef.current.value)
        props.searchKeyword(inputRef.current.value);
    };

    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    } 


// const contacts=[{id:1,
//                  name:"RS",
//                  email:"rsa2@d.f"},];

    const renderContactList = props.contacts.map((contact) => {
                return <ContactCard contact={contact} key={contact.id}clickHandler={deleteContactHandler}/>;               
               } );
               
               
               
 return (
 <div className="form1" style={{opacity: .7}}>   
    <h2 className='subtitle'>
        Contact List
        <Link to="/add">
        <button className='navigate' style={{float:'right'}}>Add Contact</button>
        </Link>        
    </h2>

    {/* <div className='ui search'>
    <div className='ui icon input '>
     <input type="text" placeholder="search contacts"
            className='prompt'
     />
    <i className='search icon'></i>
    </div>
    </div>   */}

    <div className='wrap'>
   <div className='search'>
      <input ref={inputRef}
      style={{height:'37px'}}  type="text" className='searchTerm'
      placeholder="search contacts"
        value={props.term}
        onChange={getSearchTerm}
      />
      <button type="submit" className='searchButton'>
        <i className="search icon"></i>
     </button>
   </div>
</div>


    <div className='ui celled list'>
    {renderContactList.length>0
      ? renderContactList
      :<h4 style={{color:"red"}}>"No contacts with above keyword !!" </h4> 
        }
    </div>
    
 </div>
 )
};

export default ContactList;












// const renderContactList = props.contacts.map((contact) => {
    //        return <ContactCard contact={contact} />; 
    //     }); 