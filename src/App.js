import { useEffect, useState } from 'react';
import Employees from './Employees';
import Add from './Add';
import Header from './Header';
import Nav from './Nav';

import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import GroupMemberTeam from './GroupMemberTeam';

function App() {
  const [team, setTeam] = useState(JSON.parse(localStorage.getItem('teamList'))|| 'TeamB')
    const [employee, setEmployee]= useState(JSON.parse(localStorage.getItem('employeeList'))||[
      
        {
            
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }
    ])


const h =(event) => {
    setTeam(event.target.value)
}

useEffect(()=>{
  localStorage.setItem('teamList', JSON.stringify(team))
},[team]);

useEffect(()=>{
  localStorage.setItem('employeeList', JSON.stringify(employee))
}, [employee]);

function handleEmployeeCardClick(event) {
    const transformedEmployees = employee.map((emp) => emp.id === parseInt(event.currentTarget.id)
      ? (emp.teamName === team) ? { ...emp, teamName: '' } : { ...emp, teamName: team }
      : emp);
    setEmployee(transformedEmployees);
  }
 const removeEmployee =(event)=>{
const remove = employee.filter((empl)=> empl.id !== parseInt(event.currentTarget.id))
setEmployee(remove)
 }

 const add =(id, fullName, gender, teamName )=>{
  setEmployee([...employee,{
    id: parseInt(id),
    fullName: fullName,
    
    gender: gender,
    teamName: teamName
  }])
}
  return (
    <Router>
      <Nav />
    <Header team = {team}
    teamNumber={employee.filter((e)=> e.teamName === team).length} />
    
     <Routes>
      <Route path='/' 
      element={
        <Employees 
     employee={employee} 
     handleEmployeeCardClick={handleEmployeeCardClick}
     h={h}
     team={team}
     add={add}
     removeEmployee={removeEmployee}
     />
      }/>
        
      <Route path='/GroupMemberTeam'
          element={
            <GroupMemberTeam employee={employee} team={team} setTeam={setTeam}/>
          }/>

          
        </Routes>
      
     
     
    </Router>
  );
}

export default App;
