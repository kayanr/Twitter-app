import React from "react";
import { TweetComponent } from "./TweetComponent";

export function TweetListView(props) {
  let body = [];

  props.tweet.forEach((tweet) => {
    body.push(<TweetComponent tweet={tweet} />);
  });

  return <div>{body}</div>;
}
