import React from 'react'
import male from '../images/male.png';

import {useLocation } from 'react-router-dom'


export const ContactDetail = (props) => {

  const location = useLocation();
  console.log(props, " props");
   console.log(location, " useLocation Hook");

  // console.log(props)
  const data = location.state?.data;
  return (
    <>
      <div className='main' >
        <div className='ui card centered'>
            <div className='image'>
            {/* <div className='description'>{data.id}</div> */}
                <img src={male} alt="user"/>
            </div>             
            <div className='content'> 
           
                <div style={{textAlign:'center'}} className='header'>{data.name}</div>
                <div>
                   <div style={{textAlign:'center'}}className='description'>{data.email}</div>                   
                </div>
                <div className='description'><hr/></div>                
            </div>           
        </div>
      </div>  
    </>
  )
}
