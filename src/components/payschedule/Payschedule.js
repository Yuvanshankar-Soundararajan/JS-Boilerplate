import React from "react";
import { Button } from "bootstrap";
import { Form } from "react-bootstrap";
import "../payschedule/Payschedule.css";
import info_sm from "../payschedule/info_sm.png";

const Payschedule = () => {
  return (
    <div className="cont ">
      <div className="div1">
        <h5 className="h5">It's time to set up your pay schedule</h5>
        <h10 className="h10">
          Tell us when and how you pay your employees.We will make sure they get
          paid on time.
        </h10>
      </div>
      <div className="div2">
        <h6 className="h66">
          Select your work week<span className="redcolor">*</span>
        </h6>
        <h10>The Days worked in a calendar week</h10>
      </div>

      <div>
        <div class="btn-group " role="group" aria-label="Basic example">
          <button type="button" class="btn-light">
            <p>SUN</p>
          </button>
          <button type="button" class="btn-custom">
            <p>MON</p>
          </button>
          <button type="button" class="btn-custom">
            <p>TUE</p>
          </button>
          <button type="button" class="btn-custom">
            <p>WED</p>
          </button>
          <button type="button" class="btn-custom">
            <p>THU</p>
          </button>
          <button type="button" class="btn-custom">
            <p> FRI</p>
          </button>
          <button type="button" class="btn-light">
            <p>SAT</p>
          </button>
        </div>

        {/* <p>Calculate monthly salary based on *</p> */}
        <Form.Group className="monthlysalary">
          <Form.Label>
            <h6>
              Calculate monthly salary based on
              <span className="redcolor">*</span>
              <img className="infoimg" src={info_sm} alt=""></img>
            </h6>
          </Form.Label>
          <br />
          <Form.Check
            name="Calculate"
            label="Actual days in a month"
            inline
            type="radio"
          />
          <br />
          <Form.Check
            name="Calculate"
            label="Organization working days-"
            inline
            type="radio"
          />
          <select class="selectpicker" title="Select">
            <option title="Select">Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
          </select>
          days per month
        </Form.Group>
      </div>
      <div></div>

      <div>
        <Form.Group className="payemployees">
          <Form.Label>
            <h6>
              Pay your employees on <span className="redcolor">*</span>
            </h6>
          </Form.Label>
          <br />
          <Form.Check
            name="Calculate1"
            label="The last day of every month"
            inline
            type="radio"
          />
          <br />
          <Form.Check
            name="Calculate1"
            label="day of the following month"
            inline
            type="radio"
          />
        </Form.Group>
      </div>

      <p>
        <b>Note:</b>When payday falls on non-working days or holidays, employees
        will get paid on previous working day
      </p>

      <div className="dateselect">
        Start your first payroll from<span className="redcolor">*</span>
        <br />
        <input type="date" placeholder="Select date"></input>
      </div>

      <span className="datepick">
        salary for the month of <b>Feburary-2021</b> will be paid on
        <b>16-02-2021</b>
      </span>

      <div>
        <button class="btn-primary" type="submit">
          Save & Continue ->
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="skip-link">
          Skip setup
        </button>
      </div>
    </div>
  );
};

export default Payschedule;
