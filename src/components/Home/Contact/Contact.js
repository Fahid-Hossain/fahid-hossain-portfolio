import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import "./contact.css"
import emailjs from 'emailjs-com';
// import { init } from 'emailjs-com';
// init("user_u7GZZQtZO9iNeUgSoB7As")

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_o3l17cj','template_8je2al9',e.target,'user_u7GZZQtZO9iNeUgSoB7As')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            alert("Message Send Successfully");
        e.target.reset();
    };
    return (
        <div id="contact" className="container contact">
            <h1 className="text-warning contact-heading">Contact</h1>
            <Form ref={Form} onSubmit={sendEmail} className="w-50 form">
                <>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                        
                    >
                        <Form.Control type="text" name="name" placeholder="name" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        type="email"
                        className="mb-3"
                       
                    >
                        <Form.Control type="email" name="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </>

                <>
                    <FloatingLabel controlId="floatingTextarea2" label="Messages">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a message here"
                            style={{ height: '100px' }}
                            name="message"
                        />
                    </FloatingLabel>
                </>
                <br />

                <Button className="btn btn-primary" type="submit">
                    Send
                </Button>
            </Form>

        </div >
    );
};

export default Contact;