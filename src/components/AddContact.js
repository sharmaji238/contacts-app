import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

// class AddContact extends React.Component{
   // state={
   //    name:"",
   //    email:"",
   // }
const AddContact=(props)=>{
   const [state, setState] = React.useState({name:"",email:""})
   const redirect= useNavigate();

   const add=(e)=>{
      e.preventDefault();
      if(state.name ==="" || state.email ===""){
       alert("All fields are mandatory");
      return ;      
   }


    props.addContactHandler(state);
    setState({name:"", email:""}); 
    redirect('/')
   
}   
         return (
            <form className='form' style={{opacity: .7}} onSubmit={add}>
            <div className='subtitle'>           
            <Link to="/">
            <button className='navigate' style={{float:'right'}}>Contact List</button>           
            </Link> 
            AddContact            
            </div>            
                  <div className='input-container ic1'>                     
                     <input className="input" 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={state.name} 
                            onChange={(e)=> setState({...state,name:e.target.value})}/>

{/* Unlike setting the state in a class component, useState doesn't merge the object you pass, 
and you have to do it manually when setting the state. When you set age, for example, 
you replace the entire state object, which makes name to be undefined, and vice versa. */}

                  </div>
                  <div className='input-container ic2'>                     
                      <input className="input" 
                              type="email" 
                              name="email" 
                              placeholder="E-mail" 
                              value={state.email} 
                              onChange={(e)=> setState({...state,email:e.target.value})}/>               
                  </div>
                  <div>
                  <button className='submit'>+ Add</button>
                  </div>               
            </form>
         
      )
   
}
export default AddContact
