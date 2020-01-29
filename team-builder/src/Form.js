import React from 'react';
import './App.css';

import { useState, useEffect } from 'react';

const Form = (props) => {

   const [member, setMember] = useState({name:"", email:"", role:""});

   // sync with memberToEdit
   useEffect(()=>{
      return setMember(props.memberToEdit);
   }, [props.memberToEdit])




   const handleChange = event => {
      setMember({...member, [event.target.name]:event.target.value});
   }

   const handleSubmit = event => {
      event.preventDefault();
      // update state

      props.setTeam( [...props.team, member] );

      // reset fields
      setMember({name:"", email:"", role:""});

   }

   return (

      <form onSubmit={event => handleSubmit(event)} className="Form">

         <label>
            Name:
            <input
               type="text"
               name="name"
               value={member.name}
               onChange={ e => handleChange(e)}
            />
         </label>

         <label>
            Email:
            <input
               type="text"
               name="email"
               value={member.email}
               onChange={ e => handleChange(e)}
            />
         </label>

         <label>
            What do you do?
            <input
               type="text"
               name="role"
               value={member.role}
               onChange={ e => handleChange(e)}
            />
         </label>
         <button className="Button">Submit</button>
      </form>
   )
}


export default Form; 