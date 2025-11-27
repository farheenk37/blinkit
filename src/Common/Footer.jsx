import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <>
    <div className='container my-5'>
        <div className='row'>
            <div className='col-md-12 d-flex'>
           <div className='col-md-4 d-flex justify-content-between' >
           <div className='col-lg-2'>
           <h6 class="text-nowrap ">Useful Links </h6>

            <ul className='list-unstyled'>
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Lead</li>
              <li>Value</li>
            </ul>
            </div>  
           <div className='col-lg-2 '>
            <ul className='list-unstyled my-4 '>
            <li>Privacy</li>
            <li>Terms</li>
            <li>FAQs</li>
            <li>Security</li>
            <li>Mobile</li>
            <li>Contact</li>
            </ul>
           </div>
           <div className='col-lg-2 my-4 me-5'>
            <ul className='list-unstyled'>
            <li>Patner</li>
            <li>Francise</li>
            <li>Seller</li>
            <li>Warehouse</li>
            <li>Deliver</li>
            <li>Resources</li>

            </ul>
           </div>
           </div>
           <div className='col-md-8 d-flex justify-content-between'>
           <div className='col-lg-3' >
         <h6 className=' text-nowrap '>Categories <span className='text-success ms-3'><a>see all</a></span></h6>
           
              <ul className='list-unstyled text-nowrap'>
                <li >Vegetables and Fruits</li>
                <li>Cold Drink and Juives</li>
                <li>Bakery and Biscuits</li>
                <li>Dry Fruits,Masala & Oil</li>
                <li>Paan Corner</li>
                <li>Pharma and Wellness</li>
                <li>Ice Creame & Frozen Desserts</li>
                <li>Beauty and Cosmetics</li>
                <li>Magazines</li>
              </ul>
            </div>
            <div className='col-lg-3 my-4'>
              <ul className='list-unstyled'>
                <li>Dairy and Breakfast</li>
                <li>Instant and Frozen Food</li>
                <li>Sweet Tooth</li>
                <li>Sauces & Spreads</li>
                <li>Organic and Premium</li>
                <li>Cleaning Essentials</li>
                <li>Personal Care</li>
                <li>Books</li>
                <li>Print Store</li>
              </ul>
            </div>
         <div className='col-lg-2 my-4'>
          <ul className='list-unstyled text-nowrap'>
            <li>Munchies</li>
            <li>Tea,Coffe & Health Drinks</li>
            <li>Aata,Rice & Dal</li>
            <li>Chicken,Meat & Fish</li>
            <li>Baby Care</li>
            <li>Home and Office</li>
            <li>Pet Care</li>
            <li>Toys & Games</li>
            <li>Navratri Specials</li>
          </ul>
         </div>
         
      
           </div>
        </div>
        </div>
        <div className='container bg-light p-3'>
      <div className='row'>
        <div className='col-lg-12 d-flex'>
          <div className='col-lg-4'>
            <div>© Blink Commerce Private Limited, 2016-2024</div>
            </div>
          <div className='col-lg-8 d-flex'>
          <div className='me-2'>Download App</div>
          <div><img src='https://blinkit.com/d61019073b700ca49d22.png' className='img-fluid' width={'100px'} height={'30px'}/></div>
          <div className='ms-2'><img src='https://blinkit.com/8ed033800ea38f24c4f0.png' className='img-fluid' width={'100px'} height={'30px'}/></div>
          <div><FaFacebook className='fs-2 ms-4'/></div>
          <div><AiFillTwitterCircle  className='fs-2 ms-4'/></div>
          <div><FaInstagramSquare className='fs-2 ms-4' /></div>
          <div></div>
          <div></div>
          </div>
         
        </div>
      </div>

    </div>
    <div className='col-lg-12'>
          <p>“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
        </div>
    </div>  
   
       
     
    </>
  )
}

