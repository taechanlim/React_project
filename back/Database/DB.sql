create database react_pj;
use react_pj;

CREATE TABLE user(
    userid varchar(15) not null,
    userpw varchar(15) not null,
    profile_img varchar(30) null,
    nickname varchar(15) not null,
    phonenumber int(15) not null,
    active int(1) DEFAULT 1 not null,
    PRIMARY KEY (nickname,userid)
);


CREATE TABLE feed(  
    idx int auto_increment not null,
    subject varchar(50) not null,
    content text not null,
    date timestamp DEFAULT CURRENT_TIMESTAMP not null,
    hit int DEFAULT 0 not null,
    likes int DEFAULT 0 not null,
    nickname varchar(15) null,
    deleteFlag char(1) DEFAULT 'y',
    PRIMARY KEY (idx),
    FOREIGN KEY (nickname) REFERENCES user (nickname)
);



CREATE TABLE comment (
    comment_idx INT PRIMARY KEY AUTO_INCREMENT,
    nickname VARCHAR(32) NOT NULL,
    idx INT NOT NULL,
    comment TEXT NOT NULL,
    recommend INT NOT NULL DEFAULT 0, 
    date timestamp DEFAULT CURRENT_TIMESTAMP not null,
    FOREIGN KEY (idx) REFERENCES feed (idx),
    FOREIGN KEY (nickname) REFERENCES user (nickname)
); 

