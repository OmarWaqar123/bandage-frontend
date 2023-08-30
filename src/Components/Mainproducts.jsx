import React, { useEffect } from 'react'
import Card from "./Card"
import "../SASS/mainproduct.scss"
import Loader from "./helpers/Loader" 

export default function Mainproducts() {
    const [Allproducts, Setallproducts] = React.useState(null)
    // const [render, Setrender] = React.useState(false)
    useEffect(()=>{  
      fetchData(); // Call the inner async function
    },[])
    async function fetchData() {
      try {
        const response = await fetch("/product/getallproducts", {
          credentials: 'include',
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok === true) {
          const res = await response.json();
          // console.log(res);
          Setallproducts(res)
        }
      } catch (error) {
        console.error(error);
      }
    }

    // console.log(Allproducts);

    
  return Allproducts ?(
    <div className='dad'>
    <div className='all-products'>
          {Allproducts.map((product,index) => {
            return <Card
             name={product.productname}
             price={product.price}
             category={product.category}
             image={product.image}
             id={product._id}
             key={index}
             />
          })}
        
    </div>
    </div>
  ): <Loader/>
}
