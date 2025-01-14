import React from 'react'
import Card from 'react-bootstrap/Card';
import listproduct from './data';
function ChocolatsMacarons() {
  return (
    <div>
        <div style={{display:"flex",justifyContent:"center",marginTop:"10px",marginBottom:"30px"}}>
        <img style={{height:"500px",}} src="https://www.aussiecandlesupplies.com.au/cdn/shop/files/chocolatefragrance_1200x.jpg?v=1706592291" alt="" />

        </div>
        <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"20px"}}>
            {listproduct.slice(20,28).map(el=>

            
 <Card style={{ width: '18rem',height:"400px",marginTop:"5px" }}>
      <Card.Img style={{height:"40%"}} variant="top" src={el.image[0]} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title> 
        <Card.Text style={{overflowY:"auto",height:"100px"}}>
        {el.description}
        </Card.Text>
        <Card.Text>
       <b>Price :</b> {el.price}$
        </Card.Text>


        
      </Card.Body>
    </Card>

    )}
    
    </div>
    <div style={{display:"flex",justifyContent:"center",marginTop:"20px",marginBottom:"30px"}}>
<img style={{height:"500px",width:"70%"}} src="https://patissland.fr/cdn/shop/articles/recette-des-macarons-inratables-patissland_e1c4498c-0974-4241-b359-7f10d363ae8f.jpg?v=1730633435" alt="" />
</div> 
<div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"20px"}}>
            {listproduct.slice(28,36).map(el=>

            
 <Card style={{ width: '18rem',height:"400px",marginTop:"5px" }}>
      <Card.Img style={{height:"40%"}} variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title> 
        <Card.Text style={{overflowY:"auto",height:"100px"}}>
        {el.description}
        </Card.Text>
        <Card.Text>
       <b>Price :</b> {el.price}$
        </Card.Text>


        
      </Card.Body>
    </Card>

    )}
    
    </div>

    </div>
    
  )
  
}

export default ChocolatsMacarons