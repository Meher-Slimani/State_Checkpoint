import React, { Component } from "react";
import "./App.css";
import photo from "./profilePicture.jpg";
import Counter from "./Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Meher Slimani",
      bio: "I'am a big fun of web developement",
      imgSrc: photo,
      profession: "Web developper",
      show: true,
    };
  }

  render() {
    const textButton = this.state.show ? "Hide" : "Show";

    return (
      <div className="App">
        {this.state.show ? (
          <div className="show">
            <img src={this.state.imgSrc} />
            <div className="App-info">
              <h2>{this.state.fullName}</h2>
              <h3>{this.state.profession}</h3>
              <h3>{this.state.bio}</h3>
            </div>
          </div>
        ) : null}
        <Counter />
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          {textButton}
        </button>
      </div>
    );
  }
}

export default App;
