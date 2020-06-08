package com.hw.twitterrest.repository;

import com.hw.twitterrest.model.Tweet;
import org.springframework.data.repository.CrudRepository;
import java.util.List;


public interface TweetRepository extends CrudRepository<Tweet, Long> {

    List<Tweet> findAll();
    Tweet findById(long id);

    }

