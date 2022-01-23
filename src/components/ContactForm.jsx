import React from 'react'
import emailjs from 'emailjs-com'
import './ContactForm.css'
export const ContactForm = () => {

    function send(e) {
        e.preventDefault();
        emailjs.sendForm('service_3kt23se', 'template_k9edbz9', e.target, "user_vEEyBzWne0WovYhzVPPOG")
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

        e.target.reset();
        alert("Your message has been sent!")

    }

    return (
        <div>
            <div style={{ width: "100vw",height:"100vh", backgroundColor: "#f2f2f2", display: "flex", flexDirection: "column", alignItems: 'center' }}>
                <div style={{width:"100vw",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                   
                    <h1 style={{margin:0,marginTop:"10px",color:"#282828"}}>
                        Let's Talk Business!
                    </h1>
                    <div></div>
                </div>
                <form style={{ width: "100vw", height: "100%", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }} onSubmit={send} id="myForm">
                    <div> <input required className="name" type="text" placeholder="Service you need" name="service" /> </div>
                    <div> <input required type="text" placeholder="What's Your Budget ?" name="budget" /> </div>
                    <div> <input type="text" placeholder="Got any Message for me ?" name="message" /> </div>
                    <div> <input required type="text" placeholder="What's your name ?" name="from_name" /> </div>
                    <div> <input required type="email" placeholder="Email to contact you." name="from_email" /> </div>
                    <div className="send"> <input style={{width:'10rem',fontSize:"1.5rem",color:"#f2f2f2",height:"4rem",marginTop:"1rem"}} value="Send" type="submit" /> </div>
                </form>
            </div>
        </div>
    )
}
