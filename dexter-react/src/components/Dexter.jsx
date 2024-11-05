import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; // Import Form and Button from react-bootstrap
import Navbar from './Navbar';
import field from '../assets/img/mimi.jpg';
import 'animate.css';

const Dexter = () => {
    const [text, setText] = useState("");
    const [analyzedText, setAnalyzedText] = useState("");
    const [characterCount, setCharacterCount] = useState(null);
    const [options, setOptions] = useState({
        RemovePunctuations: false,
        UPPERCASE: false,
        RemoveNewLine: false,
        RemoveExtraSpaces: false,
        CharCount: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Send data to Django
        const response = await fetch('/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text,
                RemovePunctuations: options.RemovePunctuations ? "on" : "off",
                UPPERCASE: options.UPPERCASE ? "on" : "off",
                RemoveNewLine: options.RemoveNewLine ? "on" : "off",
                RemoveExtraSpaces: options.RemoveExtraSpaces ? "on" : "off",
                CharCount: options.CharCount ? "on" : "off"
            })
        });
        
        const data = await response.json();
        setAnalyzedText(data.analyzed_text || "");
        setCharacterCount(data.character_count || null);
    };

    const handleOptionChange = (e) => {
        setOptions({ ...options, [e.target.name]: e.target.checked });
    };

    return (
        <div style={{
            backgroundImage: `url(${field})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh', // Use 100vh for full height
            position: 'fixed', // Change to fixed to cover the viewport
            overflow: 'hidden', // Prevent any scrollbars
            zIndex: '-1' // Set behind other elements
        }}>
            <Navbar />
            <Container className='my-4'>
                <Row>
                    <Col md={8} xl={8} xs={8}>
                        <div className='dexter' style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ margin: 0 }}>Hey, I'm&nbsp;</span>
                            <div className="animate__animated animate__bounceIn">
                                <span>Dexter</span>
                            </div>
                            !
                        </div>
                        <Form
                        onSubmit={handleSubmit}
                        className='dexter'
                        style={{
                            marginTop: '20px',
                            fontSize:'15px',
                            position: 'relative'
                        }}>
                            <Form.Group className='my-3' controlId="formTextarea">
                                <Form.Control
                                    as="textarea"
                                    name="text"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    style={{
                                        height: '250px',
                                        whiteSpace: 'break-spaces',
                                        background: 'transparent',
                                        color: 'white',
                                        border: '2px solid #ffffff',
                                        outline: 'none',
                                        resize: 'none',
                                    }}
                                />
                            </Form.Group>
                            {["CharCount", "UPPERCASE", "RemoveNewLine", "RemovePunctuations", "RemoveExtraSpaces"].map(option => (
                                <Form.Check
                                    key={option}
                                    type="checkbox"
                                    name={option}
                                    label={<label htmlFor={option}>{option}</label>}
                                    id={option}
                                    onChange={handleOptionChange}
                                    className="my-2"
                                />
                            ))}
                            <Button className="my-1 btn-light" style={{ position: 'absolute', bottom: '0', right: '0' }} type="submit">Refactor</Button>
                        </Form>
                    </Col>
                    <Col 
                        md={4} 
                        xl={4} 
                        xs={4} 
                        style={{ 
                            overflowWrap: 'break-word', 
                            wordWrap: 'break-word', 
                            whiteSpace: 'pre-wrap', 
                            textAlign: 'center',
                        }}
                    >
                        <span 
                            className="dexter my-3" 
                            style={{ 
                                position: 'sticky', 
                                top: 0, 
                                backgroundColor: 'inherit', // Ensures background matches the surrounding area
                                zIndex: 1 // Keeps "Refactored Text" above other content
                            }}
                        >
                            Refactored Text
                        </span>
                        <div 
                            style={{
                                maxHeight: window.innerHeight - 150, // Adjust to leave space for the sticky label
                                overflowY: 'auto',
                                textAlign: 'left',
                            }}
                        >
                            <p 
                                style={{ 
                                    color: 'white', 
                                    overflowWrap: 'break-word', 
                                    wordWrap: 'break-word', 
                                    whiteSpace: 'pre-wrap', 
                                }}
                            >
                                {analyzedText}
                            </p>
                            {characterCount && (
                                <p style={{ color: 'lightgray', fontStyle: 'italic', fontWeight: 500 }}>
                                    {characterCount}
                                </p>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Dexter;