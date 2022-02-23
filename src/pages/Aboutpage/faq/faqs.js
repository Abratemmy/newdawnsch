import React, {useState} from 'react';
import Otherpage from '../../../components/otherpage/Otherpage';
import "./faqs.css"

function Faqs(index) {
    const [faqs,setfaqs] = useState([

        {
            question:'What distinguishes this school from other schools?',
            answer:'Our consistent culture of thorough teaching by making sure the students gain the essence of enrolling in our school has given us edge over others.',
            answer1:' Keeping to our words by delivering our promise make our school better than others',
            open:false
        },
        {
            question:"What is the school's educational philosophy?",
            answer:'Our philosophy is our vision for  both the students, parents, community and all stakeholders. To produce responsible students that can stand tall among colleagues, be a beneficial to himself, parents and the community at large. By extension taking the school name to a greater height',
            open:false
        },

        {
            question:" Is the school implementing the Common Core Standards? ",
            answer:"We are known for the best. Hence, implementing a common core standard is our watchword. We make sure the societal consensus believes in ethics, moral, integrity and academic standards are pursuit",
            open:false
        },

        {
            question:" Can you tell me specifics about your curriculum? ",
            answer:"Our curriculum is Nigerian and British based ",
            open:false
        },
        {
            question:" What is the student/ teacher ratio?",
            answer:"The students teacher ratio is based on UNESCO prescribed ratio.",
            open:false
        },
        {
            question:"Are the teachers certified?",
            answer:"Our teachers are not only certified but professional in the subjects they handle ",
            open:false
        }    

    ]);


    const toggleFAQ = (index) => {
        setfaqs (faqs.map((faq, i)=>{
            if (i === index){
                faq.open = !faq.open
            }
            else{
                faq.open =false;
            }

            return faq;
        }))
    }
    return (
        <div className="faq-container">
            <Otherpage title="Faqs" subtitle="faqs" />
            <div className="container">
                <div className="faq-page">
                    <div className="page-title">Frequently asked questions</div>
                </div>


                <div className="faqs" >
                    {faqs.map((faq, i) =>(
                        <div className="faq">
                        <div className={faq.open ? 'open' :'' } key={index} onClick = {() => toggleFAQ(i)}>
                            <div className="faq-question" >
                                {faq.question}
                            </div>

                            <div className="faq-answer">
                                {faq.answer}
                            <div className="remaining-answer" >

                                <div style={{marginTop:'20px'}}>{faq.answer1}</div>
                                <div style={{marginTop:'20px'}}>{faq.answer2}</div>
                                <div style={{marginTop:'20px'}}>{faq.answer3}</div>
                                <div style={{marginTop:'20px'}}>{faq.answer4}</div>
                            </div>
                        </div>

                        </div>
                        
                        </div>
                    ))}

                </div>
            </div>
            
        </div>
    )
}

export default Faqs
