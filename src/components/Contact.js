import React, {useState} from 'react';
import Error from './Error';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputChange (e) {
    switch (e.target.name) {
        case 'name':
            return setName(e.target.value);
        case 'email':
            return setEmail(e.target.value);
        case 'message':
            return setMessage(e.target.value);
        default:
            return;
    }
  }

  function handleFormSubmit (e) {
    e.preventDefault();
    alert(`${name}, ${email}, ${message}`);
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  }

  function handleBlur () {
    if(!name || !email || !message) { 
        setErrorMessage("Please comple all entries");
        // alert("invalid")
    } else setErrorMessage("");
  }

  return (
    <section id="contact" className="topics">
        <h1 className="left-title"> </h1>
        <article className="right-content">
            <Form onBlur={handleBlur}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        type="input"
                        placeholder="Enter name"
                        />
                </Form.Group>
                <Form.Group hasValidation className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        required 
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        type="email" 
                        placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                    required 
                    name="message"
                    value={message}
                    onChange={handleInputChange}
                    as="textarea" 
                    rows="3" 
                    placeholder="Enter message" />
                </Form.Group>
                <Button
                variant="success"
                type="submit"
                onClick={handleFormSubmit}
                >
                    Submit
                </Button>
                <Form.Text className="text-muted m-2" >
                    <Error errorMessage={errorMessage}/>
                </Form.Text>
            </Form>
        </article>
    </section>
    
  );
}
