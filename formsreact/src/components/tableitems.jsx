import styled from "styled-components";

const Td=styled.td`
border:1px solid black;
padding:1px; 
margin:1px
`
const Tr=styled.tr`
border:1px solid black;
padding:1px; 
margin:1px
`

export const Tableitem=({dta})=>{
    let {name,salary,department,martial,id,age}=dta;
 function delhandle(){
     fetch(`http://localhost:3001/employee/${id}`,{
        method: 'DELETE',
     })
 }   



return (
    <Tr> 
    <Td>{id}</Td>
    <Td>{name}</Td>
          <Td>{age}</Td>
          <Td>{salary}</Td>
         
          <Td>{department}</Td>
          <Td>{martial}</Td>
          <Td><button onClick={delhandle}>Delete</button></Td>

    
    </Tr>
)



}