import React, { useEffect } from "react";
import { ListGroup, Spinner  } from 'react-bootstrap/';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/PostsSlice";

function MainPage() {
    const dispatch = useDispatch()
	const { posts, loading } = useSelector(state => state.postSlice)

	useEffect(() => {
		dispatch(getPosts())
	}, [])
	
    return (
		<ListGroup style={{gap: 15}}>
			{loading ? <Spinner animation="border" variant="warning" /> :
			<>
				{posts.map((post, idx) => 
				<ListGroup.Item key={idx} style={{backgroundColor: "yellow", border: "none", boxShadow: "0 0 15px black", borderRadius: 10}}> 
					<h2>{ post.title }</h2>
					<p>{ post.body }</p>
				</ListGroup.Item>)}
			</>
			}
		</ListGroup>
    )
}

export default MainPage