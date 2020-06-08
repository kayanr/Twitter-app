package com.hw.twitterrest.model;

import javax.persistence.*;

@Entity
@Table(name="tweets")
public class Tweet {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private long id;

   @Column(name = "user_name")
   private String userName;

   @Column(name = "user_handle")
   private String userHandle;

   @Column(name = "user_image_url")
   private String userImageUrl;

   @Column(name = "message")
   private String message;


}
