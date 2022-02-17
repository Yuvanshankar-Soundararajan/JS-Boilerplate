import React from 'react';
import { Form } from 'react-bootstrap';
import './organisation.css';

function Organisation() {
  return (
    <>
    <div>
     <h3>Let's get started </h3> 
        <div className='or'>Tell us a bit about your organisation.</div> <br/>
         <div>
          <form className='name'>
          {/* <i class="fa-solid fa-circle-exclamation"></i> */}
              Organisation Name <span style={{color:"red"}}>*</span><br/>
              <input className='orng' placeholder=''></input>
          </form><br></br>
            <form>
              <div>
               <div>
                 {/* <div style={{display:"flex"}} > */}
                 Business Location  <span style={{color:"red"}}>*</span>
                 {/* </div> */}
                 {/* <div style={{display:"flex"}}> */}
                 <input className='industry' placeholder=''></input>
                 {/* </div> */}
                 </div>

                 <div>
                   {/* <div> */}
                   Industry  <span style={{color:"red"}}>*</span><br/>
                   {/* </div> */}
                   {/* <div> */}
                   <input className='industry1' placeholder='select on industry type'></input>
                   {/* </div> */}
                 </div>
              </div>
              <br/>

              <div  className="add">
                <h1>Organisation Address<span style={{color:"red"}}>*</span></h1>
               
                
                  This will  be considered as the address of your primary work location.<br></br>
                  <input className="address" placeholder='Address Line1'></input><br></br>
                  <input className="address" placeholder='Address Line2'></input><br></br>
                  <input className="address" placeholder='City'></input>
                  <input className="address" placeholder='Select a state'></input>
                  <input className="address" placeholder='PIN Code'></input><br></br>
                  Note:If you have multiple work locations,you can add them later in Setting- Work Locations.

                </div>
                <br/>

                <div>
                  Have you run payroll earlier this year?
                  <span style={{color:"red"}}>*</span><br/>
                  <input type="checkbox"/> Yes we've already run payroll this year.<br/>
                  <input type="checkbox"/> No,we'll run out first payroll here with Zoho.
                 </div>
                 <br/>

                 <button className='save'>Save &  Continue </button>
             </form>
           </div>

    </div>
    </>
  )
}

export default Organisation