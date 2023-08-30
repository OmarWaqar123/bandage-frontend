import React, { useContext } from 'react'
import "../SASS/Navbar.scss"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import arrrowimg from "../../public/Vector.png"
import {AiOutlineUser} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import {MdClear} from "react-icons/md"
import {BsSearch} from "react-icons/bs"
import {BiCart} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import {useNavigate} from "react-router-dom"
import { UserContext } from '../Contexts/Usercontext';
import { CartmembersContext } from '../Contexts/cartmembers';
import { SinglecategoryContext } from '../Contexts/Singlecatproduct';

export default function Navbar({burgerOpen,SetburgerOpen,cartmembers,SetCartmembers}) {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const {cartmembers,SetCartmembers} = useContext(CartmembersContext)
  const bluecolor = "#23A6F0"
  const open = Boolean(anchorEl);
  const {UserInfo,Setuserinfo} = useContext(UserContext)
//  const [UserInfo, Setuserinfo] = React.useState(null)
 const[searching, Setsearching] = React.useState(false)
 const [anchorElprof, setAnchorElprof] = React.useState(null);
 const {Singlecatproduct,Setsinglecatproduct} = useContext(SinglecategoryContext)

  const openprof = Boolean(anchorElprof);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(()=>{
    
    CheckProfile()
    fetchcartmembers()

  },[])


  async function CheckProfile() {
    const response = await fetch("/auth/profile",{
    credentials: "include"
   })
   
   if(response.ok === true)
   {
    const res = await response.json()
    Setuserinfo(res)
   }
  }

  async function fetchcartmembers() {
    try {
      const response = await fetch("/product/cartmembers",{
          credentials: 'include',
          headers: { "Content-Type": "application/json" },
  
        })
        if(response.ok === true) {
          const res = await response.json()
          SetCartmembers(res)
        }
      
    } catch (error) {
      console.log(error)
    }
  }

  function Searchhandle() {
       Setsearching(prev => !prev )
  }

  async function Logout () {
    if(UserInfo){
    const response = await fetch("/auth/logout", {
      credentials:"include",
      method:"POST"
    })
    Setuserinfo(null)
    SetCartmembers(null)
  }
  }

  const openWebsiteInNewTab = () => {
    const url = 'https://www.bigcommerce.com/blog/category/ecommerce-trends/';
    const newTab = window.open(url, '_blank');
    newTab.focus();
  };

 
  
  
  return (
    <>
    <div className='check'>
    
        <h4 className='nav-logo' onClick={()=> navigate("/")}>Bandage</h4>
        <div className='routes'>
            <p onClick={() => navigate("/")}>Home</p>
            {/* <div className='shop'>
            <p>Shop</p>
            <img 
            className= {open ? "arrowup" : 'arrowdown'}
            src={arrrowimg}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}    
            />
            </div>  */}
            <p onClick={()=> navigate("/aboutncontact")}>About</p>
            <p onClick={openWebsiteInNewTab}>Blog</p>
            <p onClick={()=> navigate("/aboutncontact")} >Contact</p>
        </div>


        <div className='right-side'>
        <div className='loginorRegister'>
          <AiOutlineUser className='prof'
          color={bluecolor}
          size={25}
          id="demo-positioned-button"
          aria-controls={openprof ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={openprof ? 'true' : undefined}
          onClick={(e) => UserInfo && setAnchorElprof(e.currentTarget)
          }
  
          />
          {/* {searching === false ?  */}
          {UserInfo ? <h5>{UserInfo.email}</h5> : <h5 className='log-reg'onClick={() => navigate("/login")}>Login / Register</h5>}
          
        
          {/* <div className='search-parent'>
        <input className='search' placeholder='Search products'/>
        <MdClear className='cross' onClick={() => Setsearching(false)}/>

        </div>
        } */}
        </div>
        
        {/* <BsSearch className='icon' onClick={Searchhandle} color={bluecolor} size={22}/> */}
        <div className='cart' onClick={() => navigate("/cart")}>
        <BiCart color={bluecolor} className='icon' size={30} />
        { cartmembers ? cartmembers.length > 20 ? <p>20+</p> : <p>{cartmembers.length}</p> : <p>0</p>}
        </div>

        {/* <div className='heart icon'>
        <AiOutlineHeart className='icon' color={bluecolor} size={25} />
        <p>1</p>
        </div> */}

        <div className='icon ham' onClick={()=>SetburgerOpen(prev => !prev)}>
        {burgerOpen ? <MdClear size={23}/> : <GiHamburgerMenu size={23}/>}
        </div>
        </div>



        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem  >Men Collections</MenuItem>
        <MenuItem >Women Collections</MenuItem>
        <MenuItem >Accessories</MenuItem>
      </Menu>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorElprof}
        open={openprof}
        onClose={() => setAnchorElprof(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
      <MenuItem >
        {UserInfo ? UserInfo.email : "Your user Email" }</MenuItem>

        {UserInfo && <MenuItem onClick={() => navigate("/createproduct")}><p>Become Seller</p></MenuItem>}

        <MenuItem onClick={Logout} >
        {UserInfo ? <p className='menu'>Logout</p> : "You should Login" }</MenuItem>

      </Menu>
    </div>
    <div className={burgerOpen ? "drop-down-open" : "drop-down-close"}>

     {UserInfo && <p>{UserInfo.email}</p>}
     <p onClick={()=> navigate("/aboutncontact")}>About</p>
     <p onClick={openWebsiteInNewTab}>Blog</p>
     <p onClick={()=> navigate("/aboutncontact")}>Contact</p>
     {!UserInfo && <p onClick={() => navigate("/login")} >Login/Register</p>}
     {UserInfo && <p onClick={() => navigate("/createproduct")}>BecomeSeller</p>}
     {UserInfo && <p onClick={Logout}>logout</p>}
    </div> 
    </>
  )
}
