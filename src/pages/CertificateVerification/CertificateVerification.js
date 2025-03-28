import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './CertificateVerification.css'

function CertificateVerification() {

    const certificateDetails = [
        {
            id: 1,
            certificateNumber :'N-D0001901',
            Course : 'Health Care Assistant and Social Caregiver',
            studentName :'Paul Ezindu Michael',
            issuedDate : 'December 19th 2022',
            Comment :'Distinction'
        },
        {
            id: 1,
            certificateNumber :'N-D0002345',
            Course : 'Health Care Assistant and Social Caregiver',
            studentName :'Temitope Olasode',
            issuedDate : 'December 19th 2022',
            Comment :'Distinction'
        },
        {
            id: 1,
            certificateNumber :'N-D0001909',
            Course : 'Health Care Assistant and Social Caregiver',
            studentName :'ZZZZZZZ yeifl',
            issuedDate : 'December 19th 2022',
            Comment :'Distinction'
        },
    ]

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);
        setError("");

        setTimeout(() => {
            const foundCertificate = certificateDetails.find(
                (cert) => cert.certificateNumber.trim() === input.trim()
            );

            if (foundCertificate) {
                setResult(foundCertificate);
            } else {
                setError("Invalid certificate number");
            }
            setLoading(false);
        }, 2000);
    };


  return (
    <div className="VerificationPage">
        <div className="verifyBanner">
            <div className="container">
                <div className="header">
                    <NavLink to="/" className="logo">
                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1743088607/Mynewdawnschool/logo2_doqqvj.png" alt="" />
                    </NavLink>

                    <div className="links">
                        <NavLink to="/" className="headerLink">Home</NavLink>
                        <NavLink to="/education_program"  className="headerLink" >Continuing Education Program </NavLink>
                    </div>
                </div>

                <div className="bannerText">
                    Certificates Verification Portal
                </div>
            </div>
        </div>

        <div className="verifySession">
            <div className="container">
                <div className="vText">
                    Please kindly Verify all certificates from My Newdawn Continuing Education Centre here to confirm the authenticity of such certificate. 
                </div>

                <div className="certificate">
                    <form onSubmit={handleSubmit}>
                        <label>Input the Certificate number here</label>
                        <input
                            className="cInput"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </form>

                    {/* show certificate details here */}
                    {/* Show certificate details or error */}
                    <div className="showCertificate">

                          {/* Show loading spinner */}
                        {loading && <div className="spinner">
                            
                                <div className="spinner-grow text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow" style={{color:"var(--blue2Color), padding:'0px 5px"}} role="status">
                                <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-success" role="status">
                                <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        }

                        {result ? (
                            <div>
                                <p><strong>Name:</strong> <span className="text"> {result.studentName} </span></p>
                                <p><strong>Course:</strong> <span className="text"> {result.Course} </span></p>
                                <p><strong>Issued Date:</strong> <span className="text"> {result.issuedDate} </span></p>
                                <p><strong>Comment:</strong> <span className="text"> {result.Comment} </span></p>
                            </div>
                        ) : error ? (
                            <p className="error">{error}</p>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CertificateVerification