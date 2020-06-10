package com.hw.twitterrest.controller;

import com.hw.twitterrest.model.Tweet;
import com.hw.twitterrest.repository.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class TweetController {

    @Autowired
    private TweetRepository tweetRepository;

    //  This is a test  Request: GET /ping
    //    Response: "Up"
    @GetMapping("/ping")
    public String ping(){
        return "Up -tweeting";
    }

    //    Request: GET /tweets
    //    Response: Book[]
    @GetMapping("/tweets")
    public List<Tweet> getAllTweets(){
        return tweetRepository.findAll();
    }

    //    Request: GET /tweet/{id}
    //    Response: Tweet
    @GetMapping("/tweet/{id}")
    public Tweet getTweetById(@PathVariable long id){
        return tweetRepository.findById(id);
    }

}
