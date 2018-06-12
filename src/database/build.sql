BEGIN;
DROP TABLE IF EXISTS members,admin,category,waiting_list,lending,books CASCADE;
CREATE TABLE members (
id serial NOT NULL UNIQUE,
full_name varchar(150) NOT NULL,
mobile varchar(150) NOT NULL UNIQUE,
email varchar(250) NOT NULL UNIQUE,
CONSTRAINT members_pk PRIMARY KEY (id)
) WITH (
OIDS=FALSE
);

CREATE TABLE admin (
id serial NOT NULL,
user_name varchar(150) NOT NULL UNIQUE,
email varchar(150) NOT NULL UNIQUE,
password varchar(400) NOT NULL,
CONSTRAINT admin_pk PRIMARY KEY ("id")
) WITH (
OIDS=FALSE
);

CREATE TABLE category (
id serial NOT NULL,
name varchar(150) NOT NULL UNIQUE,
CONSTRAINT category_pk PRIMARY KEY ("id")
) WITH (
OIDS=FALSE
);

CREATE TABLE waiting_list (
id serial NOT NULL,
member_id integer NOT NULL,
book_id integer NOT NULL,
date DATE NOT NULL,
CONSTRAINT waiting_list_pk PRIMARY KEY ("id")
) WITH (
OIDS=FALSE
);

CREATE TABLE lending (
id serial NOT NULL,
book_id integer NOT NULL,
member_id integer NOT NULL,
start_date DATE NOT NULL,
end_date DATE NOT NULL,
CONSTRAINT lending_pk PRIMARY KEY ("id")
) WITH (
OIDS=FALSE
);

CREATE TABLE books (
id serial NOT NULL,
author varchar(100) NOT NULL,
publish_year varchar(100) NOT NULL,
category_id integer NOT NULL,
book_name varchar(100) NOT NULL UNIQUE,
image varchar(400) NOT NULL UNIQUE,
description varchar(500) NOT NULL,
num_copy integer NOT NULL,
CONSTRAINT books_pk PRIMARY KEY ("id")
) WITH (
OIDS=FALSE
);

ALTER TABLE "waiting_list" ADD CONSTRAINT "waiting_list_fk0" FOREIGN KEY ("member_id") REFERENCES "members"("id");
ALTER TABLE "waiting_list" ADD CONSTRAINT "waiting_list_fk1" FOREIGN KEY ("book_id") REFERENCES "members"("id");

ALTER TABLE "lending" ADD CONSTRAINT "lending_fk0" FOREIGN KEY ("book_id") REFERENCES "books"("id");
ALTER TABLE "lending" ADD CONSTRAINT "lending_fk1" FOREIGN KEY ("member_id") REFERENCES "members"("id");

ALTER TABLE "books" ADD CONSTRAINT "books_fk0" FOREIGN KEY ("category_id") REFERENCES "category"("id");

INSERT INTO admin (user_name,email,password) VALUES('Ahmad','a7m4d.m.sh@gmail.com','$2b$10$x7366q8tLnOAs90pfn8QYuu7NfJviiEA6XRdqhefRyXRqxLYhad9q');
insert into category(name) values('any');
insert into books(author, publish_year, category_id, book_name, image, description, num_copy) values('Yousef & Mohammed', 2000, 1, 'java', 'img', 'java learning', 5);
insert into books(author, publish_year, category_id, book_name, image, description, num_copy) values('Yousef', 2001, 1, 'javascript', 'img2', 'javascript learning', 4);
insert into books(author, publish_year, category_id, book_name, image, description, num_copy) values('Mohammad', 1890, 1, 'pascal', 'img3', 'pascal', 3);
insert into books(author, publish_year, category_id, book_name, image, description, num_copy) values('Janna', 2010, 1, 'android', 'img4', 'android', 2);
insert into books(author, publish_year, category_id, book_name, image, description, num_copy) values('Ahmad', 1990, 1, 'php', 'img5', 'php learning', 1);
insert into members(full_name, mobile, email) values('Ahmad Shatat', 0597165984, 'a7m4d.m.sh@gmail.com');
insert into members(full_name, mobile, email) values('Yousef Shatat', 0595165984, 'yousef.m.sh@gmail.com');
insert into members(full_name, mobile, email) values('Mohammed Shatat', 0596165984, 'mohammed.m.sh@gmail.com');
insert into members(full_name, mobile, email) values('Janna Shatat', 0598165984, 'janna.m.sh@gmail.com');
insert into lending(book_id, member_id, start_date, end_date) values(1, 1, '2-2-2018', '9-2-2018');
insert into lending(book_id, member_id, start_date, end_date) values(1, 2, '2-2-2018', '9-2-2018');
insert into lending(book_id, member_id, start_date, end_date) values(1, 3, '2-2-2018', '9-2-2018');
insert into lending(book_id, member_id, start_date, end_date) values(2, 1, '2-2-2018', '9-2-2018');
insert into lending(book_id, member_id, start_date, end_date) values(2, 4, '2-2-2018', '9-2-2018');
insert into lending(book_id, member_id, start_date, end_date) values(3, 1, '2-2-2018', '9-2-2018');
insert into lending(book_id, member_id, start_date, end_date) values(3, 2, '2-2-2018', '9-2-2018');
insert into lending(book_id, member_id, start_date, end_date) values(3, 3, '2-2-2018', '9-2-2018');
insert into lending(book_id, member_id, start_date, end_date) values(4, 4, '2-2-2018', '9-2-2018');
insert into lending(book_id, member_id, start_date, end_date) values(5, 2, '2-2-2018', '9-2-2018');

COMMIT;
