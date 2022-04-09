import React, {useState, useEffect, useRef} from 'react'
import Validation from "./validation";
import emailjs from "emailjs-com";

function Form({submitForm}) {
    const [values, setValues]= useState({
        fullname:"",
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
        sendEmail(event)
        setDataIsCorrect(true);
        
        // emailjs.sendForm()
    }

    const form = useRef();

    function sendEmail(event){
        event.preventDefault();
        emailjs.sendForm(
            'service_qmnqlig',
            'template_mn69cvp',
            form.current, 
            'hUUBVq2g6O8BYhTB0'
            ).then(res=>{
                console.log(res.text)
            }).catch(err=>console.log(err.text))
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

                <form onSubmit={handleFormSubmit} ref={form}>
                    <div className="form-input">
                        <input type="text" id=""  name="fullname" placeholder="full name"value={values.fullName} 
                        className="inputfield" onChange={handleChange}
                        />
                        {errors.fullname && <p className='error'>{errors.fullname}</p>}
                    </div>

                    <div className="form-input">
                        <input type="email" id=""  name="email" placeholder="email" value={values.email}
                         className="inputfield" onChange={handleChange}
                        />
                        {errors.email && <p className='error'>{errors.email}</p>}
                    </div>

                    <div className="form-input">
                        <textarea type="text" id=""  name="message" placeholder="Message"rows="4"value={values.message} 
                        className="textareafield" onChange={handleChange}></textarea>
                        {errors.message && <p className='error'>{errors.message}</p>}
                    </div>
                    <div className="main-btn form-btn">
                        <button type="submit"  className="btn-nav input-btn" >Contact Now</button>
                    </div>
                </form> 
            </div>
        </div>
    )
}

export default Form
