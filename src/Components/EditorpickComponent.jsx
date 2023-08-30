import React,{useContext} from 'react'
import "../SASS/editor.scss"
import {SinglecategoryContext} from "../Contexts/Singlecatproduct"
import { useNavigate } from 'react-router-dom'

export default function EditorpickComponent() {
    //  const[Singlecatproduct, Setsinglecatproduct] = React.useState(null)
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
    <div>
    <div className='editor-dad'>
        <h3 className='editor'>Editor's Pick</h3>
        <p>Problems trying to resolve the conflict between </p>
    </div>

    <div className='cards-dad'>
        <div className='first-boyngirl'>
            <div className='boy-1'>
              <img src='/card-item-boy1.png' />
              <button className='men' onClick={() => handleMenProducts("Men")}>Men</button>

             </div>
            <div className='girl-1'>
              <img src='/card-item-girl-1.png' />
              <button className='girl' onClick={() => handleMenProducts("Women")}>Women</button>

             </div> 
        </div>

        <div className='second-boyngirl'>
          <div className='girl-2'>
               <img src='/card-girl-2.png' />
               
              <button className='Accessories' onClick={() => handleMenProducts("Accessories")}>Accessories</button>
          </div>
          <div className="boy-2">
              <img src='/card-item-boy-2.png' />
              <button className='kids' onClick={() => handleMenProducts("Kids")}>Kids</button>
          </div>

        </div>
    </div>
    </div>
  )
}
