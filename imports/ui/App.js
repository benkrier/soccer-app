import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";

import TeamList from "./TeamList";
import TeamStats from "./TeamStats";
import Player from "./Player";

// App component - represents the whole app
export default class App extends Component {
  getPlayers() {
    return [
      {
        _id: 1,
        name: "Ben Krier",
        ballManipulation: 1,
        kickingAbilities: 3,
        passingAbilities: 3,
        duelTackling: 2,
        fieldCoverage: 2,
        blockAbilities: 2,
        gameStrategy: 3,
        playmakingRisk: 2
      },
      {
        _id: 2,
        name: "Ben Krier",
        ballManipulation: 1,
        kickingAbilities: 3,
        passingAbilities: 3,
        duelTackling: 2,
        fieldCoverage: 2,
        blockAbilities: 2,
        gameStrategy: 3,
        playmakingRisk: 2
      },
      {
        _id: 3,
        name: "Ben Krier",
        ballManipulation: 1,
        kickingAbilities: 3,
        passingAbilities: 3,
        duelTackling: 2,
        fieldCoverage: 2,
        blockAbilities: 2,
        gameStrategy: 3,
        playmakingRisk: 2
      }
    ];
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}
          />
          <div className="row">
            <div className="col s12 m7">
              <Player />
            </div>
            <div className="col s12 m5">
              <TeamStats />
            </div>
            <div className="col s12 m5">
              <TeamList />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
