import React, { useState } from "react";

const Contact = () => {
    const [data, setData]= useState({

        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });
    const InputEvent = (event)=>{
        const {name, value}= event.target;
        setData((preVal) => {

            return{
                ...preVal,
                [name]:value,
            };
        });
    };
    const formSubmit = (e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullname} My Mobile number is ${data.phone} and my email is ${data.email}
         Here is what i want to say ${data.msg}`
        );

    };
    return(
        <>
        <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact-div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                 <div class="mb-3">
  <label for="FullName" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="FullName"
   name="fullname"
  value={data.fullname}
  onChange={InputEvent}
   placeholder="Enter Your Name" required/>
</div>
 <div class="mb-3">
  <label for="Mobile Number" class="form-label">Phone</label>
  <input type="number" class="form-control" id="Mobile Number"
   name="phone"
  value={data.phone}
  onChange={InputEvent}
   placeholder="Mobile Number" required/>
</div>
    <div class="mb-3">
  <label for="email" class="form-label">Email address</label>
  <input type="email" class="form-control" id="email"
  name="email"
  value={data.email}
  onChange={InputEvent}
   placeholder="Enter Email ID" required/>
</div>
<div class="mb-3">
  <label for="Textarea" class="form-label">Message</label>
  <textarea class="form-control" id="Textarea" rows="3"
   name="msg"
  value={data.msg}
  onChange={InputEvent} required
  ></textarea>
</div>
 <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};
export default Contact;