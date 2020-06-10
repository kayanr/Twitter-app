import React from "react";
import "./TweetComponent.css";

export function TweetComponent(props) {
  return (
    <>
      <div id="content">
        <div id="timage">
          <img src={props.tweet.userImageUrl} width="100" height="40" />{" "}
        </div>
        <div id="tuser">
          {" "}
          {props.tweet.userName} <br />
          {props.tweet.userHandle}
        </div>
        <div id="tfooter"> {props.tweet.message}</div>
      </div>
      <br />
    </>
  );
}
