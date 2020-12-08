import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const avatar = {
  background: "blue",
  borderRadius: "50%",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  margin: "30px",
  fontSize: "25px",
};

const UserCard = ({ user, isProfilePage = true }) => {
  //user = {name , username , email , phone}
  return (
    <Card style={{ width: "100%", margin: "15px" }}>
      <div className="text-center m-4">
        <span style={avatar}> {user.name[0]} </span>
      </div>

      <Card.Body>
        <Card.Title> {user.name}</Card.Title>
        <Card.Text> {user.email} </Card.Text>
        <Card.Text className="text-muted">{`@${user.username}`}</Card.Text>
        <Card.Text>{user.phone}</Card.Text>
        {!isProfilePage && (
          <Button variant="primary">
            <Link style={{ color: "white" }} to={`/profile/${user.id}`}>
              Go Profile
            </Link>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default UserCard;
