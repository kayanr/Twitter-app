import React from "react";
import "./App.css";

import { TweetListView } from "./components/TweetListView";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      // mode: "VIEW",
    };

    // this.toggleMode = this.toggleMode.bind(this);
  }

  // toggleMode() {
  //   this.setState({ mode: this.state.mode === "VIEW" ? "EDIT" : "VIEW" });
  // }

  componentDidMount() {
    fetch("http://localhost:8080/tweets")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          tweets: data,
        })
      );
  }

  render() {
    return (
      <div className="App">
        <h1>Twitter</h1>
        <div>
          {/* <div hidden={this.setState.mode === "EDIT"}> */}
          <TweetListView
            tweets={this.state.tweets}
            // toggle={this.toggleMode}
          />
        </div>
      </div>
    );
  }
}

export default App;
