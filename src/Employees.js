import Female from './data/avatar.jpg'
import Male from './data/avatar2.jpg'
import './index.css'
import Add from './Add'


const Employees = ({employee , h, handleEmployeeCardClick, team , add, removeEmployee}) => {
    
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
     <div key={employees.id} id={employees.id} onClick={handleEmployeeCardClick} onDoubleClick={removeEmployee} className={( employees.teamName === team ? 'scout' : 's')}>
  
    {(employees.gender === 'male') ?<img src={Male}/>
                                 :<img src={Female} />
                                 }
     <p>{employees.fullName}</p> 
    </div> )}
    </div>
    <Add add={add} />
    </div>
  )
}

export default Employees
