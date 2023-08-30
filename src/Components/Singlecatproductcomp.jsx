import React,{useContext, useEffect} from 'react'
import { SinglecategoryContext } from '../Contexts/Singlecatproduct'
import Loader from "../Components/helpers/Loader"
import OnecategoryCard from './onecategoryCard'
import "../SASS/singlecatprodcomp.scss"

export default function Singlecatproductcomp() {
    const {Singlecatproduct,Setsinglecatproduct} = useContext(SinglecategoryContext)
    console.log("prod",Singlecatproduct)



  return Singlecatproduct ? (
    // <p>sdsdsdsds</p>
    <div className='dad'>
    <div className='all-products'>
          {Singlecatproduct.map((product,index) => {
            return <OnecategoryCard
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

  ) : <p>No Such products are available right now</p>
}
