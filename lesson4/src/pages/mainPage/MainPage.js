import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postUser } from "../../store/PostSlice";

function MainPage() {
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
    })
	const [valid, setValid] = useState({
		name: false,
		username: false,
		email: false
	})

	const changeValid = (name, isValid) => {
		setValid({...valid, [name]: isValid})
	}

	const checkInputFunc = (name, value) => {
		if ( value==='' ){ changeValid(name, false) } 
		else { switch (name) {
			case 'name':
				if(/^\w+\s?\w*$/.test(value) && name.length>3){
					changeValid(name, true)
				} else {
					changeValid(name, false)
				}
				break;
			case 'username':
				if(/^[a-zA-Z1-9_-]+$/.test(value)){
					changeValid(name, true)
				} else {
					changeValid(name, false)
				}
				break
			case 'email':
				if(/^\w+\.?\w*@\w+\.\w+/.test(value)){
					changeValid(name, true)
				} else {
					changeValid(name, false)
				}
				break
			default:
				console.error('name =', name);
				break;
		}}
	}

    const changeInputFunc = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
		checkInputFunc(event.target.name, event.target.value)
    }

    const postUserFunc = (event) => {
		event.preventDefault()
		if(valid.name && valid.username && valid.email){
			dispatch(postUser(user))
		}
    }
    
    return (
		<Container>
			<Form onSubmit={postUserFunc}>
				<Row>
					<Col lg={3}>
						<Form.Group className="mb-3" controlId="name">
							<Form.Control 
								type="text" 
								placeholder="name" 
								name="name" 
								onChange={changeInputFunc}
								style={{border: `2px solid ${valid['name'] ? '#0f0' : '#f00'}`}}
							/>
						</Form.Group>
					</Col>
					<Col lg={3}>
						<Form.Group className="mb-3" controlId="username">
							<Form.Control
								type="text"
								placeholder="username"
								name="username"
								onChange={changeInputFunc}
								style={{border: `2px solid ${valid['username'] ? '#0f0' : '#f00'}`}}
							/>
						</Form.Group>
					</Col>
					<Col lg={3}>
						<Form.Group className="mb-3" controlId="email">
							<Form.Control 
								type="text" 
								placeholder="email" 
								name="email" 
								onChange={changeInputFunc}
								style={{border: `2px solid ${valid['email'] ? '#0f0' : '#f00'}`}}
							/>
						</Form.Group>
					</Col>
					<Col lg={3}>
						<Button type="submit" variant="success" className="w-100">
							register user
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
    )
}

export default MainPage