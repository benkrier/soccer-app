import React, { Component } from "react";
import { Card, CardMedia, CardText, CardActions, CardTitle } from "material-ui";
import RaisedButton from "material-ui/RaisedButton";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import { blue200, blue900 } from "material-ui/styles/colors";

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {}
};

// App component - represents the whole app
export default class Player extends Component {
  render() {
    return (
      <Card>
        <CardMedia
          overlay={
            <CardTitle
              title="Emmanuel Henri"
              subtitle="offense: 12 - Defense: 8"
            />
          }
        >
          <img src="player.jpg" alt="" />
        </CardMedia>
        <CardText>
          <Chip backgroundColor={blue200} styles={styles.chip}>
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Ball manipulation
          </Chip>
          <Chip backgroundColor={blue200} styles={styles.chip}>
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Kicking abilities
          </Chip>
          <Chip backgroundColor={blue200} styles={styles.chip}>
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Passing Abilities
          </Chip>
          <Chip backgroundColor={blue200} styles={styles.chip}>
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Duel Tackling
          </Chip>
          <Chip backgroundColor={blue200} styles={styles.chip}>
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Field Speed Coverage
          </Chip>
          <Chip backgroundColor={blue200} styles={styles.chip}>
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Blocking Abilities
          </Chip>
          <Chip backgroundColor={blue200} styles={styles.chip}>
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Game Strategy
          </Chip>
          <Chip backgroundColor={blue200} styles={styles.chip}>
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              2
            </Avatar>
            Play Making Risk
          </Chip>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vehicula metus sit amet hendrerit mollis. Phasellus venenatis, metus
          laoreet molestie varius, magna odio dignissim velit, eu consectetur
          velit mi quis dui. Aliquam efficitur sit amet dolor eu blandit. Nulla
          gravida dapibus porttitor.
        </CardText>
        <CardActions />
      </Card>
    );
  }
}
