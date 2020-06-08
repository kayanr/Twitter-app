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


   public Tweet(){}

   public Tweet(String userName, String userHandle, String userImageUrl, String message) {
      this.userName = userName;
      this.userHandle = userHandle;
      this.userImageUrl = userImageUrl;
      this.message = message;
   }

   public long getId() {
      return id;
   }

   public String getUserName() {
      return userName;
   }

   public String getUserHandle() {
      return userHandle;
   }

   public String getUserImageUrl() {
      return userImageUrl;
   }

   public String getMessage() {
      return message;
   }

   public void setId(long id) {
      this.id = id;
   }

   public void setUserName(String userName) {
      this.userName = userName;
   }

   public void setUserHandle(String userHandle) {
      this.userHandle = userHandle;
   }

   public void setUserImageUrl(String userImageUrl) {
      this.userImageUrl = userImageUrl;
   }

   public void setMessage(String message) {
      this.message = message;
   }
}
