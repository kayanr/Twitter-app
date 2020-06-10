import React from "react";
import "./App.css";

import { TweetListView } from "./components/TweetListView";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

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
        <h1 align="left">Twitter</h1>
        <div>
          <TweetListView tweets={this.state.tweets} />
        </div>
      </div>
    );
  }
}

export default App;
