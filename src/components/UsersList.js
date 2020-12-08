import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fetch the users then set the response to the state
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <Spinner animation="border" />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        {users.map((user) => (
          <Col key={user.id}>
            <UserCard user={user} isProfilePage={false} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UsersList;
