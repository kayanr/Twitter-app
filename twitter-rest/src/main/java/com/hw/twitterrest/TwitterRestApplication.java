package com.hw.twitterrest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class TwitterRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(TwitterRestApplication.class, args);
	}

}
