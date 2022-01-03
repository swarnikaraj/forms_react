import { useEffect } from "react";
import { useState } from "react";
import { Tableitem } from "./tableitems";


export const Table=()=>{
    const [items,setItem]=useState([])
    const [page,setPage]=useState(1)

function getitem(){
    fetch(`http://localhost:3001/employee?_page=${page}&_limit=5`).then(d=>d.json()).then(res=>setItem(res))
}

useEffect(() => {
    getitem()
    
}, [])

return (
    <>
     <table>

     <thead>
      <tr>
      
      <td>Sno</td>
        <td>Name</td>
          <td>Age</td>
          <td>Salary</td>
         
          <td>Department</td>
          <td>Martial</td>
      </tr>
      </thead>

      <tbody>

      {items.map((e)=>(<Tableitem key={e.id} dta={e}/>))}
      </tbody>
     </table>

     <div>
         <button disabled={page==1} onClick={()=>setPage(p=>p-1)}>Prev</button>
         <button onClick={()=>setPage(p=>p+1)}>Next</button>
     </div>
    </>
)

}