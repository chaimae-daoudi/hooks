import React, { useState } from 'react'


const GroupMemberTeam = ({employee, team , setTeam}) => {
const [groupedEmployees, groupedData] = useState(groupTeamMembers())

function groupTeamMembers(){
  var teams =[];
  var teamAMemmbers = employee.filter((eployess) => eployess.teamName ==='TeamA');
  var teamA = {teamS :'TeamA' , members : teamAMemmbers , collapsed : team ==='TeamA' ? false : true}
  teams.push(teamA);

  var teamBMemmbers = employee.filter((eployess) => eployess.teamName ==='TeamB');
  var teamB = {teamS :'TeamB' , members : teamBMemmbers , collapsed : team ==='TeamB' ? false : true}
  teams.push(teamB);

  var teamCMemmbers = employee.filter((eployess) => eployess.teamName ==='TeamC');
  var teamC = {teamS :'TeamC' , members : teamCMemmbers , collapsed : team ==='TeamC' ? false : true}
  teams.push(teamC);

  var teamDMemmbers = employee.filter((eployess) => eployess.teamName ==='TeamD');
  var teamD = {teamS :'TeamD' , members : teamDMemmbers , collapsed : team ==='TeamD' ? false : true}
  teams.push(teamD);


  return teams;
  
}
console.log(groupedEmployees)

const handCheckEmployee=(event)=>{
const r = groupedEmployees.map(t => t.teamS === event.currentTarget.id ? {...t, collapsed :!t.collapsed} : t)
groupedData(r);
setTeam(event.currentTarget.id);
}
  return (
    <div>
      {groupedEmployees.map((item)=>{
        return(
          <div key={item.teamS} className='container' id={item.teamS} onClick={handCheckEmployee}  >
            <h1 id={item.teamS}  >Team Name : {item.teamS}</h1>
            <div id={'colapsed_' + item.teamS} className={item.collapsed === true ? 'collapsed': ''}>

       {item.members.map((m)=>{
        return (
          <div>
            <h5>full name: {m.fullName}</h5>
          </div>
        )
       })}
            </div>
          </div>
          
        )
      } )}
    </div>
  )
}

export default GroupMemberTeam