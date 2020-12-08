import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserProfile = (props) => {
  const [user, setUser] = useState({}); // user {name , id , username , address , ...}
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/users/" + props.match.params.userId
    )
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
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

  if (!loading && !user.id) {
    return (
      <Container>
        <Row>
          <Col>
            <h1 style={{ textAlign: "center" }}>User Not Fount !!! :'(</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <UserCard user={user} />
      </Row>
    </Container>
  );
};

export default UserProfile;
