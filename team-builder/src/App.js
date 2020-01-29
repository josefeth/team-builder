import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useState } from "react";
import Form from "./Form.js";


function App() {

  const [team, setTeam] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({name:"", email:"", role:""});

  const editMember = (memberToAdd) => {
    setMemberToEdit(memberToAdd);
    console.log(memberToAdd);
  }

  return (
    <div className="App">


      {team.map((element,index)=> {
        return (
          <div>
            
            <p className="EditP">{element.name}</p>
            <p className="EditP">{element.email}</p>
            <p className="EditP">{element.role}</p>

            <button onClick={() => editMember(element)}>EDIT</button>
          </div>
        )

      })} 

      <Form team={team} setTeam={setTeam} memberToEdit={memberToEdit} />

    </div>
  );
}

export default App;


// import React from 'react';
// import { useState } from 'react';
// import './App.css';
// import MemberList from "./components/MemberList"

// function App() {
   
//    const [members, setMembers] = useState([]);

   
//    const [member, setMember] = useState({ name: "", email: "", role: "" });
 
//    const handleChange = event => {
//      setMember({ ...member, [event.target.name]: event.target.value });
//    };
 
//    const handleSubmit = event => {
//      event.preventDefault();
//      members.push(member)
//      setMember({ name: "", email: "", role: "" });
//    }
   
//   return (
//     <div>
//       <form onSubmit={event => handleSubmit(event)}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={member.name}
//               onChange={event => handleChange(event)} />
//             </label>
//             <label>
//               Email:
//               <input
//                 type="text"
//                 name="email"
//                 value={member.email}
//                 onChange={event => handleChange(event)} />
//             </label>
//             <label>
//               What Do You Do?:
//               <input
//                 type="text"
//                 name="role"
//                 value={member.role}
//                 onChange={event => handleChange(event)} />
//             </label>
//             <button>Submit!</button>
//           </form>
//     <MemberList members={members} />
// </div>
//   );
// }

// export default App;
