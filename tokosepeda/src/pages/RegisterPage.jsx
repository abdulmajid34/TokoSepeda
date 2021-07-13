import React, { useRef, useState } from 'react'
import {
    Form,
    Card,
    Button,
    Alert
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'

function RegisterPage() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { register } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(emailRef.current.value === "" || passwordRef.current.value === "") {
            return setError('required!')
        }

        try {
            setError('')
            setLoading(true)
            await register(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to Create an Account')
        }
        setLoading(false)

        register(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Register</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                sudah memiliki account?
                <Link to="/login">
                    <span>Login</span>
                </Link>
            </div>
        </>
    )
}

export default RegisterPage
