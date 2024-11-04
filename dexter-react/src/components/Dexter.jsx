import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar'
import field from '../assets/img/mimi.jpg'
import 'animate.css';

const Dexter = () => {

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
                </Col>
                <Col md={4} xl={4} xs={4}>
                    <div style={{textAlign:'center'}}>
                        <span className='dexter'>Analyzed</span>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Dexter