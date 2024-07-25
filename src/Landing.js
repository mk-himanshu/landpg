import React from 'react'
import logo from "./talencyLogo.png"
import logo2 from './freepik-export-20240504001052Mqs9 1.png';
import logo3 from './freepik-export-20240504001248pAo6 1.png';
import logo4 from "./freepik-export-20240504002135YQyj 1.png";
import image1 from './3d-rendering-cartoon-like-man-working-computer (1) 1.png';
import image2 from "./image 3.png";
import check from'./Check.png';
import avtar from './image 9.png'

const Landing = () => {
  return (
    
    <>
    <div className='container'>
        <div className='div1'>

           <div className='logo'>
           <img src={logo} alt="logo"></img>
            <h1>talency</h1>
            
           </div>
           <div >
            <h1 className='heading'> connecting <span >Talent</span> With Oppertunity </h1>
            <p color='#303148'>
              Elevating carrers one connection at a time.Find your perfect match, professionally.
            </p>
            <div className='card1'>
               <div className='img1'>
                  <img src={logo2} alt="logo"></img>
               </div>
               <div className='text'>
                <p>
                     Join us today as a
                </p>
                <h1>Job Seeker</h1>
               </div>

            </div>
            <div className='cards'>
             <div className='card2'>
               <div className='img1'>
                  <img src={logo3} alt="logo"></img>
               </div>
               <div className='text'>
                <p>
                     Get started as a
                </p>
                <h1>Freelancer</h1>
               </div>

              </div>
            <div className='card3'>
               <div className='img1'>
                  <img src={logo4} alt="logo"></img>
               </div>
               <div className='text'>
                <p>
                  Partner with us as a
                </p>
                <h1>Client</h1>
               </div>

            </div>
            </div>
           </div>
        </div>
        <div className='div2'>
         <div className='row1'>
            <div className='head'>
               <div className='set'>
               <img src={avtar} alt='avtar'></img>
               
               <p>Himanshu Kumar</p>
               
               </div>
               <h5>CONGRATULATION </h5>
               <h3>You are hired!</h3>
            </div>
            <img className='img1' src={image1} alt='img'></img>
         </div>
         <div className='row2'>
            
         <img className='img2' src={image2} alt='img'></img>
         <img className="check" src={check} alt='vheck'></img>
         
         </div>
           
           
        </div>
        
    </div>
    <div className='footerr'>
          <div className='icon'>
           <h1>🌏</h1>
           <div>
           <h2>6</h2>
           <p>Countries</p>
           </div>
          </div>
          <div className='icon'>
           <h1>🤝</h1>
           <div>
           <h2>250</h2>
           <p>Clients</p>
           </div>
          </div>
          <div className='icon'>
           <h1>🅰️</h1>
           <div>
           <h2>3</h2>
           <p>Languages</p>
           </div>
          </div>
          <div className='icon'>
           <h1>🔍</h1>
           <div>
           <h2>10,000+</h2>
           <p>Recruiters</p>
           </div>
          </div>
          <div className='icon'>
           <h1>👨‍👩‍👧‍👦</h1>
           <div>
           <h2>10,000+</h2>
           <p>Selections</p>
           </div>
          </div>
          <div className='icon'>
           <h1>🏢</h1>
           <div>
           <h2>50+</h2>
           <p>Agencies</p>
           </div>
          </div>
          
        </div>
    </>
  )
}

export default Landing




