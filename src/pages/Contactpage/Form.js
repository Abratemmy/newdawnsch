import React from 'react'

function Form() {
    return (
        <div className="formpage">
            <div className="container">
                <div className="form-title">Get In Touch</div>
                <p>Fields mark with <span>*</span> are required</p>

                <form>
                    <div className="form-input">
                        <input type="text" id=""  name="fullName"placeholder="full name" className="inputfield"/>
                    </div>

                    <div className="form-input">
                        <input type="email" id=""  name="email"placeholder="email" className="inputfield"/>
                    </div>

                    <div className="form-input">
                        <input type="text" id=""  name="subject"placeholder="Subject" className="inputfield"/>
                    </div>

                    <div className="form-input">
                        <textarea type="text" id=""  name="message"placeholder="Message"rows="4" className="textareafield"></textarea>
                    </div>
                    <div className="main-btn form-btn">
                        <input type="submit" value="Contact Now"   className="btn-nav input-btn"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
