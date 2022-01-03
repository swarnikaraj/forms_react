import { useState } from "react";

import { useEffect } from "react";


export const Form=()=>{
const [name,setName]=useState('');const [age,setAge]=useState('');const [department,setDepartment]=useState('');
const [martial,setMartial]=useState('') ;const [prof,setProf]=useState('') ;  const [salary,setSalary]=useState('');



return (
    <>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <input type="text" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/><br/>
      
        <select value={department} onChange={(e)=>setDepartment(e.target.value)}>
            <option>choose department</option>
            <option>a</option>
            <option>b</option>
            <option>c</option>
        </select>
        <br/>

        

        <input type="radio" id="married" onChange={(e)=>setMartial('married')}
          name="married" value={martial}/>
        <label >Married</label>

        <input type="radio" id="unmarried" onChange={(e)=>setMartial('unmarried')}
          name="unmarried" value={martial}/>
        <label>Bachelor</label>



        <br/>
        <input type="text" placeholder="Profile picture"  value={prof} onChange={(e)=>setProf(e.target.value)} />
        <button onClick={()=>{
           var  img=document.createElement('img')
           img.src={prof}
          var pa= document.getElementById('prev'); pa.innerHTML=null;pa.append(img)}}>preview</button>
        <div id="prev"></div>

        <br/>
        <input type="text" placeholder="Salary" value={salary} onChange={(e)=>setSalary(e.target.value)} />
        <br/>
        <button onClick={()=>{
            const payload={
                name,
                age,
                department,
                salary,
                prof,
                martial

            }

            
         fetch('http://localhost:3001/employee',{
             method:'POST',
             body:JSON.stringify(payload),
             headers:{
                'Content-Type': 'application/json'
             }
         }).then(()=>{setSalary('');setAge(''); setMartial('');setProf('');setName('');setMartial('');})
         document.getElementById('prev').innerHTML=null;

        }}>Add employee</button>
        <br/>
        
    </>
)






}