import React, { Component } from "react";
import "./checkbox.css"


class Checkbox extends Component {
  render() {
    return <div class="container">
     <div id= "column1">
    
      <h3>Name</h3>
  <div id="name">
      <form >
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> I have a bike</label><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> House Rent Allowance</label><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> Conveyance Allowance</label><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> Transport Allowance</label><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> Travelling Allowance</label><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> Bonus</label><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> Commission</label><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> Children Education Allowance</label><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> Fixed Allowance</label><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> Leave Encashment</label><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> Gratuity</label><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1">Notice Pay</label><br></br>
  <h3 style={{color:'black'}}>New Earning</h3>
  </form>
  </div>
     
    </div>
    <div id= "column2">
      <h3>Earning Type</h3>
      <div id="earning">
     <span>Basic</span><br></br>
     <span>House Rent Allowance</span><br></br>
     <span>Conveyance Allowance</span><br></br>
     <span>Transport Allowance</span><br></br>
     <span>Travelling Allowance</span><br></br>
     <span>Bonus</span><br></br>
     <span>Commission</span><br></br>
     <span>Children Education Allowance</span><br></br>
     <span>Fixed Allowance</span><br></br>
     <span>Leave Encashment</span><br></br>
     <span>Gratuity</span><br></br>
     <span>Notice Pay</span><br></br>
     </div>
    
  </div>
  
   <div id= "column3">
   <div id="calculation">
     <h3>Calculation Type</h3>
     <span>Fixed: 50% of CTC</span><br></br>
     <span>Fixed: 50% of Basic</span><br></br>
     <span>Fixed:vFlat Amount</span><br></br>
     <span>Fixed: Flat Amount of 1600</span><br></br>
     <span>Fixed: Flat Amount</span><br></br>
     <span>Variable: Flat Amount</span><br></br>
     <span>Variable: Flat Amount</span><br></br>
     <span>Fixed: Flat Amount</span><br></br>
     <span>Fixed: Flat Amount</span><br></br>
     <span>Variable: Flat Amount</span><br></br>
     <span>Variable: Flat Amount</span><br></br>
     <span>Variable: Flat Amount</span><br></br>
     </div>
    </div>
</div>
  }
}

export default Checkbox;
