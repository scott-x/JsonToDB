# DROP DATABASE if exists exam;
CREATE DATABASE if not exists exam DEFAULT CHARACTER SET 'UTF8';
# CREATE DATABASE exam DEFAULT CHARACTER SET 'UTF8';
USE exam;
DROP TABLE IF EXISTS examine;
CREATE TABLE examine(
 id INT NOT NULL AUTO_INCREMENT KEY comment '题目编号',
 question VARCHAR(100) NOT NULL UNIQUE comment '用户名',
 answers TEXT NOT NULL comment '答案',
 create_time DATETIME DEFAULT CURRENT_TIMESTAMP comment '用户创建时间'
)ENGINE=INNODB CHARSET=UTF8;

INSERT INTO examine(question,answers) VALUES
("a","b"),
("C","d"),
("e","f");
desc examine;
