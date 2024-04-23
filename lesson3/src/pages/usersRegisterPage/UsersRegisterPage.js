import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { addUserAction } from "../../redux/action";

function UsersRegisterPage() {
	const dispatch = useDispatch();
	const [user, setUser] = useState({
		name: "",
		username: "",
		email: ""
	});
	const [valid, setValid] = useState({
		name: false,
		username: true,
		email: true
	})
	const changeValid = (name, isValid) => {
		setValid({...valid, [name]: isValid})
	}

	const formValue = (event) => {
		const name = event.target.name
		const value = event.target.value
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
		setUser({
			...user,
			[name]: value
			// логика:   user[event.target.name] = event.target.value
		})
	}

	const addUser = (event) => {
		event.preventDefault()
		if(user.name==='' || user.username==='' || user.email==='') return
		if(!valid.name || !valid.username || !valid.email) return
		console.log('YES');
		dispatch(addUserAction(user))
	}

	return (
		<Container>
			<Form onSubmit={addUser}>
				<Row>
					<Col lg={3}>
						<Form.Group className="mb-3" controlId="name">
							<Form.Control 
								type="text" 
								placeholder="name" 
								name="name" 
								onChange={formValue}
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
								onChange={formValue}
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
								onChange={formValue}
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
	);
}

export default UsersRegisterPage;
