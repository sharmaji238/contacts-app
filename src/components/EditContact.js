import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const EditContact = (props) => {
    
    const redirect1= useNavigate();
    const location=useLocation();
    const data = location.state?.data;
    const [info, setInfo] = React.useState({id:data.id,name:data.name,email:data.email})
    // console.log(state) 

    const update=(e)=>{
       e.preventDefault();
       if(info.name ==="" || info.email ===""){
        alert("All fields are mandatory");
       return ;      
    } 
 
     props.updateContactHandler(info);
   //   setState({name:"", email:""}); 
     setInfo(location.state.info)
     console.log(location);
     redirect1('/');
    
 }   
          return (
             <form className='form' style={{opacity: .7}} onSubmit={update}>
             <div className='subtitle'>           
             <Link to="/">
             <button className='navigate' style={{float:'right'}}>Contact List</button>           
             </Link> 
             Edit Contact            
             </div>            
                   <div className='input-container ic1'>                     
                      <input className="input" 
                             type="text" 
                             name="name" 
                           //   placeholder="Name" 
                             value={info.name} 
                             onChange={(e)=> setInfo({...info,name:e.target.value})}/>
 
 {/* Unlike setting the state in a class component, useState doesn't merge the object you pass, 
 and you have to do it manually when setting the state. When you set age, for example, 
 you replace the entire state object, which makes name to be undefined, and vice versa. */}
 
               </div>
                   <div className='input-container ic2'>                     
                       <input className="input" 
                               type="email" 
                               name="email" 
                               placeholder="E-mail" 
                               value={info.email} 
                               onChange={(e)=> setInfo({...info,email:e.target.value})}/>               
               </div>
                   <div>
                   <button className='submit'>Update</button>
                   </div>               
             </form>
          ) 
}