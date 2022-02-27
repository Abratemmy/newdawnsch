import React, {useState, useEffect} from 'react'
import Validation from "./validation";
import emailjs from "emailjs-com";

function Form({submitForm}) {
    const [values, setValues]= useState({
        fullName:"",
        email:"",
        message:""
    })

    const handleChange=(event)=>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    const [errors, setErrors]= useState({});

    const [dataisCorrect, setDataIsCorrect] = useState(false);

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        setDataIsCorrect(true);

        emailjs.sendForm()
    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataisCorrect){
            submitForm(true);
        }
    })
    

    
    return (
        <div className="formpage">
            <div className="container">
                <div className="form-title">Get In Touch</div>
                <p>Fields mark with <span>*</span> are required</p>

                <form>
                    <div className="form-input">
                        <input type="text" id=""  name="fullName"placeholder="full name"value={values.fullName} 
                        className="inputfield" onChange={handleChange}
                        />
                        {errors.fullName && <p className='error'>{errors.fullName}</p>}
                    </div>

                    <div className="form-input">
                        <input type="email" id=""  name="email"placeholder="email" value={values.email}
                         className="inputfield" onChange={handleChange}
                        />
                        {errors.email && <p className='error'>{errors.email}</p>}
                    </div>

                    <div className="form-input">
                        <textarea type="text" id=""  name="message"placeholder="Message"rows="4"value={values.message} 
                        className="textareafield" onChange={handleChange}></textarea>
                        {errors.message && <p className='error'>{errors.message}</p>}
                    </div>
                    <div className="main-btn form-btn">
                        <button type="submit"  className="btn-nav input-btn" onClick={handleFormSubmit}>Contact Now</button>
                    </div>
                </form> 
            </div>
        </div>
    )
}

export default Form
