import React from 'react'
import "../SASS/footer.scss"
import{BsFacebook} from "react-icons/bs"
import{BsInstagram} from "react-icons/bs"
import{BsTwitter} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const navigate = useNavigate()
    const openWebsiteInNewTab = () => {
        const url = 'https://www.bigcommerce.com/blog/category/ecommerce-trends/';
        const newTab = window.open(url, '_blank');
        newTab.focus();
      };
    const leadtosocials = (link) => {
        
        const newTab = window.open(link, '_blank');
        newTab.focus();
      };


  return (
    <>
    <div className='footer'>
        <div className='bandage'>
            <h3>Bandage</h3>
            <div className='socials'>
            <BsFacebook onClick={()=>leadtosocials("https://www.facebook.com/profile.php?id=100069066972294")} className='icons'/>
            <BsInstagram onClick={()=>leadtosocials("https://www.instagram.com/omar_waqar_/")} className='icons'  />
            <BsTwitter onClick={()=>leadtosocials("https://twitter.com/Omarwaqar7")} className='icons'/>
            </div>
        </div>
        <div className="horizontal-line"></div>
        <div className='footer-content'>
            <div className='comp-info'>
                <h4>Company Info</h4>
                <p onClick={()=> navigate("/aboutncontact")} >About us</p>
                <p onClick={()=> navigate("/aboutncontact")}>Contact us</p>
                <p onClick={openWebsiteInNewTab}>Blog</p>

            </div>
            <div className='feature'>
                <h4>Feature</h4>
                <p onClick={()=> navigate("/aboutncontact")}>About us</p>
                <p onClick={()=> navigate("/aboutncontact")}>Contact us</p>
                <p onClick={openWebsiteInNewTab}>Blog</p>

            </div>


        </div>
        
    </div>
    <p className='made'>Made with love by Muhammad Omar Waqar All rights reserved</p>

    </>
  )
}
