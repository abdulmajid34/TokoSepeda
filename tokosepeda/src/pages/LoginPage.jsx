import React, { useRef } from 'react'
import {
    Form, Button, Card
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
        <>
          <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email" ref="" required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" ref="" required />
                        </Form.Group>
                        <Button className="w-100" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
          <div className="w-100 text-center mt-2">
            belum memiliki account?
            <Link to="/register"> 
                <span>Register</span>
            </Link>
          </div>
        </>
    )
}

export default LoginPage
