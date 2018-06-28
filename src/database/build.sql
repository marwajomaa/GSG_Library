BEGIN;
DROP TABLE IF EXISTS  members, admin, category, waiting_list, lending, books CASCADE;
CREATE TABLE members (
  	id serial PRIMARY KEY,
	full_name varchar(150) NOT NULL,
	mobile varchar(150) NOT NULL UNIQUE,
	email varchar(250) NOT NULL UNIQUE
);



CREATE TABLE admin (
	id serial PRIMARY KEY,
	user_name varchar(150) NOT NULL UNIQUE,
	email varchar(150) NOT NULL UNIQUE,
	password varchar(400) NOT NULL
);


CREATE TABLE category (
	id serial PRIMARY KEY,
	name varchar(150) NOT NULL
);

CREATE TABLE books (
  id serial PRIMARY KEY ,
  author varchar(100) NOT NULL,
  publish_year varchar(100) NOT NULL,
  category_id integer NOT NULL REFERENCES category(id),
  book_name varchar(100) NOT NULL UNIQUE,
  image varchar(400),
  description varchar(500) NOT NULL,
  num_copy integer
);


CREATE TABLE waiting_list (
	id serial PRIMARY KEY,
	member_id integer NOT NULL REFERENCES members(id) ON DELETE CASCADE,
	book_id integer NOT NULL REFERENCES books(id) ON DELETE CASCADE,
	"date" DATE NOT NULL
);



CREATE TABLE lending (
	id serial PRIMARY KEY,
	book_id integer NOT NULL REFERENCES books(id) ON DELETE CASCADE,
	member_id integer NOT NULL  REFERENCES members(id) ON DELETE CASCADE,
	start_date DATE NOT NULL,
	end_date DATE NOT NULL
);



INSERT INTO members (full_name, mobile, email) VALUES
('marwajomaa','0599999999','ma@gmail.com'),
('haneenshahwan', '0599999991', 'haneen9.3@hotmail.com'),
('emankhaled', '0591234567', 'emankhaled@gmail.com'),
('ahmedshatat', '0591234561', 'ahmedshatat@gmail.com'),
('abdallsamad', '0591234564', 'abdallsamad@gmail.com'),
('mohammedalhella', '0591234565', 'haneen3.9@hotmail.com'),
('ramyalshurafa', '0591234566', 'ramyshurafa@gmail.com'),
('ahmedshatat', '0591234533', 'ahmedshatat1@gmail.com'),
('farah', '0591234568', 'farah@gmail.com'),
('ishak', '0591234569', 'ishak@gmail.com'),
('abdallah', '0592234568', 'abdallah@gmail.com'),
('razan', '0593234568', 'razan@gmail.com'),
('balsam', '0591234562', 'balsam@gmail.com'),
('israa', '0594234568', 'israa@gmail.com'),
('inass', '0595234568', 'inass@gmail.com'),
('sallam', '0596234568', 'sallam@gmail.com');



-- INSERT INTO admin (user_name,email,password) VALUES('Ahmad','a7m4d.m.sh@gmail.com','$2b$10$x7366q8tLnOAs90pfn8QYuu7NfJviiEA6XRdqhefRyXRqxLYhad9q');
INSERT INTO category (name) VALUES
('programming'),
('desgin'),
('languages'),
('database'),
('webDevelopment');
--
-- INSERT INTO books (author,publish_year,book_name,category_id, description) VALUES
-- ('Azat Mardan','November 23, 2013','Express.js Guide','1','The in-depth, detailed, hand-on manual on Express.js.'),
--
--
-- ('Tim Brown', 'September 29, 2009', 'Change by Design', '2',
--   'In Change by Design, Tim Brown, CEO of IDEO, the celebrated innovation and design firm.'),
--
--   ('Gabriel Wyner', 'August 5, 2014', 'Fluent Forever', '3',
--     'The ultimate rapid language-learning guide! For those who’ve despaired of ever learning a foreign language.'),
--
--     ('McGraw-Hill', 'August 4,1986','Database System Concepts', '4',
--       'Database System Concepts, by Abraham Silberschatz and Hank Korth, is a classic textbook on database systems.'),
--
--       ('Jon Duckett', 'june 2,2013','JavaScript and JQuery' ,'5','JavaScript was written to give readers an accurate .');
--         INSERT INTO lending (book_id,member_id,start_date,end_date ) VALUES
--         (1, 1, '2018-6-1', '2018-6-11'),
--         (2, 2, '2018-6-2', '2018-6-12'),
--         (4, 6, '2018-6-3', '2018-6-13'),
--         (5, 9, '2018-6-5', '2018-6-15');
insert into books(author, publish_year, category_id, book_name, image, description, num_copy) values('Yousef & Mohammed', 2000, 1, 'java', 'img', 'java learning', 5);
insert into books(author, publish_year, category_id, book_name, image, description, num_copy) values('Yousef', 2001, 1, 'javascript', 'img2', 'javascript learning', 4);
insert into books(author, publish_year, category_id, book_name, image, description, num_copy) values('Mohammad', 1890, 1, 'pascal', 'img3', 'pascal', 3);
insert into books(author, publish_year, category_id, book_name, image, description, num_copy) values('Janna', 2010, 1, 'android', 'img4', 'android', 2);
insert into books(author, publish_year, category_id, book_name, image, description, num_copy) values('Ahmad', 1990, 1, 'php', 'img5', 'php learning', 1);
insert into members(full_name, mobile, email) values('Ahmad Shatat', 0597165984, 'a7m4d.m.sh@gmail.com');
insert into members(full_name, mobile, email) values('Yousef Shatat', 0595165984, 'a7m4.d.m.sh@gmail.com');
insert into members(full_name, mobile, email) values('Mohammed Shatat', 0596165984, 'a7m4d.m.s.h@gmail.com');
insert into members(full_name, mobile, email) values('Janna Shatat', 0598165984, 'kjdfkdjfmn@ail.com');
insert into members(full_name, mobile, email) values('eman', 0592043608, 'eman_h_2009@live.com');
insert into lending(book_id, member_id, start_date, end_date) values(1, 1, '2-2-2018', '2-4-2018');
insert into lending(book_id, member_id, start_date, end_date) values(1, 2, '2-2-2018', '2-3-2018');
insert into lending(book_id, member_id, start_date, end_date) values(1, 3, '2-2-2018', '2-3-2018');
insert into lending(book_id, member_id, start_date, end_date) values(2, 1, '2-2-2018', '2-5-2018');
insert into lending(book_id, member_id, start_date, end_date) values(2, 4, '2-2-2018', '2-4-2018');
insert into lending(book_id, member_id, start_date, end_date) values(3, 1, '2-2-2018', '9-2-2018');
insert into lending(book_id, member_id, start_date, end_date) values(3, 2, '2-2-2018', '9-2-2018');
insert into lending(book_id, member_id, start_date, end_date) values(3, 3, '2-2-2018', '9-2-2018');
insert into lending(book_id, member_id, start_date, end_date) values(4, 4, '2-2-2018', '9-2-2018');
insert into lending(book_id, member_id, start_date, end_date) values(5, 2, '2-2-2018', '9-2-2018');


COMMIT;
