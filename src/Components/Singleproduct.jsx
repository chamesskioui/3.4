import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import listproduct from "./data";

function Singleproduct() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});
  const[loading,setload]=useState(true)
  useEffect(() => {
    setProduct(listproduct.find((el) => el.id == id));
    setload(false)
  }, [product]);

  console.log(product);
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div style={{margin:"50px 0",display:"flex"}}>
      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <img
          style={{ width: "400px", borderRadius: "8px" }}
          src={product.image[1]}
          
          alt=""
        />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {product?.image?.map((el) => (
            <img style={{ width: "20%", borderRadius: "8px" }} src={el} />
          ))}
        </div>
      </div>
          <div style={{width:"40%"}}>
          <h1>{product.title}</h1>
          </div>
    </div>
  );
}

export default Singleproduct;