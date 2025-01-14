import React from 'react'
import listproduct from '../data'

function AdminProduct() {
  return (
    <div style={{width:"80%"}}>
         
        <table width={"100%"}>
       
            <tr style={{background:"grey",color:"white",width:"100%"}}>
            <th style={{width:"20%"}}>image</th>
                <th style={{width:"20%"}}>Name</th>
                <th style={{width:"20%"}}>Price</th>
                
                <th style={{width:"20%"}}>Status</th>
                <th style={{width:"20%"}}>edit/delete</th>
            </tr>
            {listproduct.slice(0,20).map(el=>
            <tr style={{borderBottom:"1px solid black",height:"80px",width:"100%"}}>
                <td style={{width:"20%"}}>
                    <img style={{width:"50px"}} src={el.image} alt="" />
                </td>
                <td style={{width:"20%"}}>
                   {el.title}
                </td>
                <td style={{width:"20%"}}>
                   {el.price}
                </td>
                <td style={{width:"20%"}}>
                    en stock
                </td>
                <td style={{width:"20%",display:"flex",justifyContent:"center",gap:"10px",alignItems:"center",height:"80px"}}>
                    <button style={{border:"1px solid",padding:"10px",borderRadius:"8px",background:"aqua"}}> <i className="fa-solid fa-pen-to-square" style={{color:"#312f30"}}></i> </button>
                    <button style={{border:"1px solid",padding:"10px",borderRadius:"8px",background:"red"}} ><i className="fa-solid fa-trash" style={{color:"#312f30"}}></i></button>
                </td>
            </tr>
              )}
        
        </table>
       
    </div>
  )
}

export default AdminProduct