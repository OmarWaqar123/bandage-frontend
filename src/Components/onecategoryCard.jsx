import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../SASS/onecatcard.scss"

export default function OnecategoryCard({name,price,category,image,id}) {
  
    const navigate = useNavigate()
  return (
    <div className='card-dad'>
        <div className='image-dad'>
            <img src={image} />
        </div>
        <p className='name' onClick={() => navigate(`/product/${id}`)}>{name}</p>
        <p className='category'>{category}</p>
        <h4 className='price'>{price}$</h4>

    </div>
  )
}
