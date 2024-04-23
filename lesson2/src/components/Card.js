import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap/";

const UserCard = ({ user }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ user.id } | { user.name }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Phone: <b>{ user.phone }</b> <br/>
            Email: <b>{ user.email }</b> <br/>
            Website: <b>{ user.website }</b> <br/>
            Company: <b>{ user.company.name }</b> <br/>
            Phrase: <b>{ user.company.catchPhrase }</b> <br/>
        </Modal.Body>
      </Modal>
      <Card onClick={()=>handleShow()}>
        <Card.Body>
          <Card.Title>{ user.username }</Card.Title>
          <Card.Text>{ user.name }</Card.Text>
        </Card.Body>
      </Card>
    </>
    
  );
};

export default UserCard;
