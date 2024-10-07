import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const CreateUser = ({ username, email, onChange, onCreate }) => {
    //props = username, email, onChange, onCreate
    //const {username, email, onChange, onCreate} = props;
    return (
        <Container 
            className='my-4'
            style={{ padding: '2rem', borderRadius: '8px' }}>
            <Form>
                <Row className='align-items-center justify-content-center'>
                    <Col sm={4}>
                        <Form.Control 
                            type="text" 
                            name='username' 
                            placeholder='이름' 
                            onChange={onChange}
                            value={username}
                        />
                    </Col>
                    <Col sm={4}>
                        <Form.Control 
                            type="email" 
                            name='email' 
                            placeholder='이메일' 
                            onChange={onChange} 
                            value={email}
                        />
                    </Col>
                    <Col sm={2}>
                        <Button 
                            variant="success" 
                            onClick={onCreate}
                            className="w-100"
                        >
                            Create
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default CreateUser;