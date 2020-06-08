import React from "react";

export function TweetComponent(props) {
  return (
    <div style={{ border: "1px solid red", margin: "10px 200px" }}>
      <p style={{ float: "left" }}> {props.tweet.userName}</p>
      <p style={{ float: "right" }}> {props.tweet.message}</p>
      <div style={{ clear: "both" }} />
    </div>
  );
}
