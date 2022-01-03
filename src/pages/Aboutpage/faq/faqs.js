import React, {useState} from 'react';
import Otherpage from '../../../components/otherpage/Otherpage';
import "./faqs.css"

function Faqs(index) {
    const [faqs,setfaqs] = useState([

        {
            question:'Why is Evernall a different kind of law Firm?',
            answer:'Evernall is not only risk-focused but commercially minded and very dynamic in its approach. We work with our Clients from business infancy to growth mode and leverage very heavily on technology and easy-to – use templates (with guidance notes), to give you more ease, in terms of cost and timelines.',
            open:false
        },
        {
            question:'Do I have to run a thriving business before engaging with Evernall? ',
            answer:'No. From the point of ideation, you need the partnership of Evernall – like a mid-wife, to help you birth your brilliant ideas, totally risk-free and on a sure-footed platform. ',
            answer1:'We are commercially savvy and are not so strict as not to give you practical tips here and there, to help you stand upright, in your business.',
            open:false
        },

        {
            question:"Must I engage the whole range of Evernall’s Services? What if I just need a Contract drafted or a simple document review? ",
            answer:"All Services are tailor- made and can be called out independently or in suites. For instance, we can handle only an aspect of contracting that you require – contract review, negotiations, contract drafting, training, contract management etc or we can handle the whole pack of it. ",
            answer1:"Our retainership rates are quite affordable and inclusive – we base our offerings on where you are in business, such that there are packages for Freelancers, Small business owners etc",
            answer2:"Sometimes, we may suggest a legal audit (which is a simple process) first, so that we can do a gap-analysis and advise on what Services you require to scale up.",
            open:false
        },
        {
            question:"How are Clients billed, at Evernall – What if I cannot afford the Services? ",
            answer:"Evernall’s prices are arguably the lowest in this terrain, considering the expertise and quality of work put into the job. Billing is done per job and not on an hourly or day-rate basis. ",
            answer1:"Payments for retainership or packages can be made in instalments too.",
            open:false
        },
        {
            question:"How does Evernall, partner with budding entrepreneurs and business owners to manage their risk? ",
            answer:"Evernall will draw up a legal risk map for your business and how to avert all risk ",
            answer1:'Each risk will carry an affordable or free remedy – best if you know and plan ahead for them',
            answer2:'Otherwise, you can have access to Evernall template suites to manage all aspects of your startup and growing business',
            answer3:'We can also design negotiation templates for your transactions, if you cannot afford to pay the full range of the fees.',
            answer4:'Basically, our goal is for you to succeed, so that we can win together. We have dynamic solutions therefore, tailored to make you succeed while still getting the best – in- class of Materials and Services.',
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
