import React from 'react'
import {MdLibraryBooks} from "react-icons/md" 
import {Form,Button} from "react-bootstrap"
import "./Tax.css"

function TaxScreen() {
  return (
    <div className='TaxContainer' >
      <div className='TaxSubContainer' >
       <div >
           <span className='logo' ><MdLibraryBooks/>zylker Designs chennai</span>
       </div>
       <div>
           <div className='Content1'><h1>Provide your organisation's tax information</h1></div>
           <div className='Content2'><h4>These tax details will be displayed in your employee's Form 16.</h4></div>
       </div>
       <div className='FieldContainer' >
           <div>
           <div className='Field' ><Form.Control type="text" placeholder="PAN" /></div>
           <span>Format:AAAAA0000SA</span>
           <div className='Field' ><Form.Control type="text" placeholder="TDS circle/AO code " /></div>
           <span>AAA/AA/OOO/O</span>
           </div>
           <div>
           <div className='Field' ><Form.Control type="text" placeholder="TAN" /></div>
           <span>AAAA00000A</span>
           <div className='Field' ><Form.Control type="text" placeholder="Tax Payment Frequency" /></div>
           </div>
       </div>
       <div className='Btn_container' >
           <div> <Button variant="primary" size="lg" className='SubmiBTN' active>Save & Continue &#8594;</Button></div>
           <div> <span className='Btn_span' >Skip setup</span> </div>
       </div>
   </div>
    </div>
  )
}

export default TaxScreen