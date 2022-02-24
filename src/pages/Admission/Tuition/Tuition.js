import React from 'react';
import Otherpage from '../../../components/otherpage/Otherpage';
import "./Tuition.css";
// import {NavLink} from "react-router-dom"

function Tuition() {
    return (
        <div>
            <Otherpage title="Tuition & Payment" subtitle="tuition" />

            <div className="Tuitionpage">
                <div className="container">
                    <div className="page-title">Tuition</div>
                    <hr className="line" />

                    <div className="tuition-text">
                        School fees are usually stated at the beginning of the admission process for a specific academic year. For new students the fees include the cost of the prospectus,
                     a registration fee (a once only payment), tuition, textbooks, school uniforms, Co-curricular Activities and PTA levy.
                    </div>

                    <div className="tuition-text">
                        School fees may be paid annually or termly but are due on or before the 
                        first day of school. Only certified bank drafts made payable to My-New Dawn School will be accepted.
                    </div>

                    <div className="page-title">Payment Information</div>
                    <hr className="line" />

                    <div className="tuition-text">
                        If you prefer to pay in person in our Accounts Office, you can do so by using POS or by bank draft.
                    </div>
                    <div className="tuition-text">
                        For direct bank transfer, our bank account details are below. <br />
                        Please use your child Names as a payment reference to enable us to allocate and update your account promptly.
                    </div>

                    <div className="tuition-text">
                        <span>Bank Name : </span> STERLING BANK <br />

                        <span>Account Name : </span> MY NEWDAWN EDUCATIONAL CONSULT <br />
                        <span>Account Number :</span>0083458557<br />
                        <span>Address: </span> 10, Adepegba street, Behind Wema Bank, Abule-egba Lagos.
                    </div>

                    <hr />

                    <div className="tuition-text">
                        <span>Bank Name : </span>  Guarantee Trust Bank  (GTB), <br />

                        <span>Account Name : </span>MY NEWDAWN EDUCATIONAL CONSULT. ACCT , <br />
                        <span>Account Number :</span> 0019028331<br />
                        <span>Address: </span> 10, Adepegba street, Behind Wema Bank, Abule-egba Lagos.
                    </div>

                    <hr />

                    <div className="tuition-text">
                        <span>Bank Name : </span>  Wema Bank <br />

                        <span>Account Name : </span>MY NEWDAWN EDUCATIONAL CONSULT. ACCT , <br />
                        <span>Account Number :</span> 0243324811<br />
                        <span>Address: </span> 10, Adepegba street, Behind Wema Bank, Abule-egba Lagos.
                    </div>

                    {/* <button className="main-btn">
                        <NavLink to="/pay_fees" className="btn-nav">Proceed to Payment</NavLink>
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default Tuition
