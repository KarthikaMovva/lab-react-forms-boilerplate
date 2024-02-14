import {useFormik} from "formik";
import {useState} from "react";
import "./App.css";


const initialValues={
  firstname : "",
  lastname : "",
  email : "",
  contact : "",
}

const onSubmit = (values)=>{console.log(values)}

const validate = (values)=>{
  let err={}
  if(!values.firstname){
    err.firstname="Please enter your First Name."
  }
  if(!values.lastname){
    err.lastname="Please enter your last name."
  }
  if(!values.email){
    err.email="Please enter your Email."
  }
  if(!values.contact){
    err.contact="Please enter your contact."
  }else if(String(values.contact).length!==10){
    err.contact="Invalid Contact"
  }
  return err
}

function App(){
const [click,setclick]=useState(false)

const activate=()=>{
  setclick(true)
}
const formstate = useFormik({
  initialValues,
  onSubmit,
  validate,
})
console.log(formstate.errors)
console.log("t",click)

  return(
    <form onSubmit={formstate.handleSubmit}>
      {click && Object.keys(formstate.touched).length===4 && Object.keys(formstate.errors).length===0? <div className="message">Registration Successful!</div>:null}
      <div>
      <input type="text"  id="firstname" name="firstname" placeholder="First Name" onChange={formstate.handleChange} value={formstate.values.firstname} onBlur={formstate.handleBlur}/>
      {formstate.touched.firstname && formstate.errors.firstname? <p className="error">{formstate.errors.firstname}</p>: null}
      </div>
      <div>
      <input type="text" id="lastname" name="lastname" placeholder="Last Name" onChange={formstate.handleChange} value={formstate.values.lastname} onBlur={formstate.handleBlur}/>
      { formstate.touched.lastname && formstate.errors.lastname? <p className="error">{formstate.errors.lastname}</p>: null}
      </div>
      <div>
      <input type="email" id="email" name="email"  placeholder="Email" onChange={formstate.handleChange} value={formstate.values.email} onBlur={formstate.handleBlur}/>
      { formstate.touched.email && formstate.errors.email? <p className="error">{formstate.errors.email}</p>: null}
      </div>
      <div>
      <input type="number" id="contact" name="contact" placeholder="Contact" onChange={formstate.handleChange} value={formstate.values.contact} onBlur={formstate.handleBlur}/>
      {formstate.touched.contact && formstate.errors.contact? <p className="error">{formstate.errors.contact}</p>: null}
      </div>
      <button type="submit" onClick={activate} className="submit">Submit</button>
    </form>
  )
}
export default App