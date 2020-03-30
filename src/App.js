import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Picture from "./photo.jpg";
import "./styles.css";
class InvitationCard extends React.Component {
  render() {
    const faces = [
      "https://uploads.codesandbox.io/uploads/user/fe518c33-2173-46d5-a86c-4413c95eb5a4/7B-b-20191019_115130.jpg",
      "https://uploads.codesandbox.io/uploads/user/fe518c33-2173-46d5-a86c-4413c95eb5a4/7B-b-20191019_115130.jpg"
    ];
    return (
      <div className="App">
        <Card className="card">
          <CardMedia className="media" image={Picture} />s
          <CardContent className="content">
            <Typography className="heading" variant={"h6"} gutterBottom>
              Nature Around Us
            </Typography>
            <Typography className="subheading" variant={"caption"}>
              We are going to learn different kinds of species in nature that
              live together to form amazing environment.
            </Typography>
            <Divider className="divider" light />
            {faces.map(face => (
              <Avatar className="tar" key={face} src={face} />
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }
}
export default InvitationCard;
