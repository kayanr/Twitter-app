import React from "react";
import { TweetComponent } from "./TweetComponent";

export function TweetListView(props) {
  let body = [];

  props.tweets.forEach((tweet) => {
    body.push(<TweetComponent tweet={tweet} />);
  });

  return <div>{body}</div>;
}
