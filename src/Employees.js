import Female from './data/avatar.jpg'
import Male from './data/avatar2.jpg'
import './index.css'



const Employees = ({employee , h, handleEmployeeCardClick, team}) => {
    
  return (
    <div className="o">
        <div>
            <select onChange={h} value={team}>
                <option value='TeamA'>TeamA</option>
                <option value='TeamB'>TeamB</option>
                <option value='TeamC'>TeamC</option>
                <option value='TeamD'>TeamD</option>
            </select>
        </div>
    <div className="om" >
     { employee.map(employees => 
     <div key={employees.id} id={employees.id} onClick={handleEmployeeCardClick} className={( employees.teamName === team ? 'scout' : 's')}>
  
    {(employees.gender === 'male') ?<img src={Male}/>
                                 :<img src={Female} />
                                 }
     <p>{employees.fullName}</p> 
    </div> )}
    </div>
    
    </div>
  )
}

export default Employees
