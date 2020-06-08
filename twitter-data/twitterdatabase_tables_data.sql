show databases;

create database twitter_db;

use twitter_db;

#drop table tweet;

select * from tweets;

CREATE TABLE `tweets` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `user_handle` varchar(45) NOT NULL,
  `user_image_url` varchar(100) NOT NULL,
  `message` varchar(300) NOT NULL,
  PRIMARY KEY (`id`) 
) ENGINE=InnoDB AUTO_INCREMENT=201 DEFAULT CHARSET=utf8;

#inserting the example tweets used by instructor
INSERT INTO `twitter_db`.`tweets`
(`id`,
`user_name`,
`user_handle`,
`user_image_url`,
`message`)
VALUES
(1, 'KalebBurd','@kburd', 'https://pythonprogramming.net/static/images/finance/python-programming-language.png', 'Hello Twitter! Goodbye MySpace'),
(2, 'Rando Cardician','@seedNull', 'https://upload.wikimedia.org/wikipedia/commons/a/a0/2006_Quarter_Proof.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet nisi ac metus imperdiet fermentum at ut sem. Morbi. '),
(3, 'Donald J. Trump','@realDonaldTrump', 'https://compote.slate.com/images/abd6b1ce-a885-4f81-a682-214877a93edd.jpeg', '*censored*'),
(4, 'John Smith','@notRussianBot', 'https://cdn.pixabay.com/photo/2017/03/14/21/00/american-flag-2144392__340.png', 'Who censored Trump???');


select * from `twitter_db`.`tweets`;
