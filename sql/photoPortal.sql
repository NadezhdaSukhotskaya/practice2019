DROP DATABASE IF EXISTS photoPortal;
CREATE DATABASE IF NOT EXISTS photoPortal;
USE photoPortal;

CREATE TABLE IF NOT EXISTS Users
(
Id int auto_increment not null,
Nickname varchar(30) not null,
unique(Id),
primary key(Id)
);

CREATE TABLE IF NOT EXISTS Posts
(
Post_id int auto_increment not null,
Description varchar(200) default '',
Creation_date datetime default now(),
Photo_path varchar(200) not null,
Hashtags varchar(300) default '',
Num_of_likes int default 0,	
User_id int not null,
unique(Post_id),
primary key(Post_id),
foreign key (User_id) references Users (Id) on delete cascade
);

INSERT Users(Nickname)
VALUES
('Nadya'), ('Artyom'), ('Anna'), ('Kirill'), ('Dasha'),
('Masha'), ('Julia'), ('Bob'), ('Max');

INSERT Posts(Description, Photo_path, Hashtags, User_id, Creation_date)
VALUES
("hello, world!", "img/1.jpg", "I'm working", 4, now()), ("Smth", "img/3.jpg", "smo", 2, "2019-07-08 21:01:17"),
("hello", "img/2.jpg", "smth", 2, "2018-1537 08:19:11"), ("amazing", "img/1.jpg", "I", 9, "2019-09-36 22:20:34"),
("sad", "img/1.jpg", "", 2, "2016-05-25 19:21:34"), ("hey", "img/5.jpg", "sunny", 3, "2019-05-09 19:21:30"),
("me", "img/9.jpg", "winter", 1, "2014-05-50 20:33:11"), ("omg", "img/9.jpg", "smth", 5, "2016-06-12 20:18:55"),
("summer", "img/6.jpg", "cold", 3, "2013-09-49 20:21:44"), ("ImGrand", "img/2.jpg", "summer", 4, "2019-06-10 12:02:11"),
("holidays", "img/5.jpg", "like", 4, now()), ("", "img/2.jpg", "", 5, now()),
("dad", "img/1.jpg", "", 1, "2019-05-21 09:03:00"), ("hello!", "img/5.jpg", "smt", 6, now()); 