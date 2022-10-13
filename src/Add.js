import React, { useState } from 'react'

const Add = ({add}) => {

const [fullName , setName] = useState('')
const [gender , setGender] = useState('')
  const [teamName , setTeams] = useState('')
  const [id , setId] = useState('')

 

const addMember =(event)=>{
  event.preventDefault();
  add(id, fullName, gender, teamName);
  setName('');
  setGender('');
  setTeams('');
  setId('')
}
  
  return (
    <form onSubmit={addMember}>
  
     <input type="number" name="id" value={id} onChange={(event)=>setId(event.target.value)}/>
    <input type="text" name="FullName" value={fullName} onChange={(event)=>setName(event.target.value)}/>
    <input type="text" name="gender" value={gender} onChange={(event)=>setGender(event.target.value)}/>
     <input type="text" name="team" value={teamName} onChange={(event)=>setTeams(event.target.value)}/>
     <input type='submit' value='add member' />
 
</form>
  )
}

export default Add