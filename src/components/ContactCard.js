import React from 'react';
import user from '../images/user.png';
import { Link } from 'react-router-dom';
const ContactCard =(props)=>{
    const {id, name, email} = props.contact;
    console.log("first")
    console.log(props);
    const data = props.contact;
    
    return(        
        <div className='item'>
                <img className='ui avatar image' src={user} alt="user"/>
                <div className='content'>
                    {/* <Link to={{pathname:`/contact/${id}`, state:{contact:props.contact}}}> */}
                    <Link to={`/contact/${id}`} state={{data : data}}>
                     <div className='header' style={{color:'white'}}>{name}</div>
                     <div style={{color:'white'}}>{email}</div>
                     </Link>
                </div>
                
                 <i className='trash alternate outline icon'
                 style={{color:"magenta" , marginTop:"7px" , float:"right" }}
                 onClick={()=>props.clickHandler(id)}>
                 </i> 
                 <Link to={`/edit`} state={{data : data}}>
                 <i className='edit alternate outline icon'
                 style={{color:"grey" , marginTop:"7px" , marginRight:"10px" , float:"right" }}
                 >
                 </i> 
                 </Link>                 
                 <hr/>
        </div>
           
    );
};

export default ContactCard;