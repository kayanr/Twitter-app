import React from "react";

export function TweetComponent(props) {
  return (
    <div style={{ border: "5px solid blue", margin: "10px 200px" }}>
      <p id="timage">
        <img src={props.tweet.userImageUrl} width="100" height="40" />{" "}
      </p>
      <p style={{ float: "left" }}> {props.tweet.userName}</p>
      <p style={{ float: "center" }}> {props.tweet.userHandle}</p>
      <p style={{ float: "right" }}> {props.tweet.message}</p>
      <div style={{ clear: "both" }} />
    </div>
  );
}
