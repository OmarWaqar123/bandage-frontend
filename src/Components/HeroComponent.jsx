import React,{useContext} from 'react'
import { Carousel } from 'antd';
import "../SASS/hero.scss"
import { SinglecategoryContext } from '../Contexts/Singlecatproduct';
import { useNavigate } from 'react-router-dom';

export default function HeroComponent({burgerOpen}) {
  const {Singlecatproduct,Setsinglecatproduct} = useContext(SinglecategoryContext)
  const navigate = useNavigate()

  async function handleMenProducts(Category) {
    
    try {
      
      const response = await fetch(`/product/getonecategory/${Category}`, {
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
      })

      if(response.ok === true) {
          const res = await response.json()
          Setsinglecatproduct(res)
          localStorage.setItem('Singlecatproduct', JSON.stringify(res));
          navigate("/singlecategoryproducts")
      }
    } catch (error) {
      
    }
   }
  return (
    <>
    {/* <div className={burgerOpen ? "drop-down-open" : "drop-down-close"}>
     <p>Contact</p>
     <p>Contact</p>
     <p>Contact</p>
     <p>Contact</p>
    </div> */}
    <Carousel autoplay>
        <div className='img-contain' >
        <div className="left-side">
            <p className='summer' >Summer 2020</p>
            <h2>New collection</h2>
            <p className='we'>We know how large objects will act.but things on a small scale</p>
            <button onClick={() => handleMenProducts("Women")}>SHOP NOW</button>
        </div>
 
         <div className='right-side'>
        <img src='/cars1-girl.png'/>
        </div>

        </div>

        <div className='img-contain2' >
        <div className="left-side">
            <p className='summer' >Summer 2020</p>
            <h2>New collection</h2>
            <p className='we'>We know how large objects will act.but things on a small scale</p>
            <button onClick={() => handleMenProducts("Women")}>SHOP NOW</button>
        </div>
 
         <div className='right-side'>
        <img src='/girl2.png'/>
           
        </div>
            

        </div>

    </Carousel>
    </>

  )
}
