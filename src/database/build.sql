BEGIN;
DROP TABLE IF EXISTS  members, admin, category, waiting_list, lending, books CASCADE;
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
	image varchar(400) ,
	description varchar(500) NOT NULL,
	CONSTRAINT books_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "waiting_list" ADD CONSTRAINT "waiting_list_fk0" FOREIGN KEY ("member_id") REFERENCES "members"("id");
ALTER TABLE "waiting_list" ADD CONSTRAINT "waiting_list_fk1" FOREIGN KEY ("book_id") REFERENCES "members"("id");

ALTER TABLE "lending" ADD CONSTRAINT "lending_fk0" FOREIGN KEY ("book_id") REFERENCES "books"("id");
ALTER TABLE "lending" ADD CONSTRAINT "lending_fk1" FOREIGN KEY ("member_id") REFERENCES "members"("id");

ALTER TABLE "books" ADD CONSTRAINT "books_fk0" FOREIGN KEY ("category_id") REFERENCES "category"("id");

INSERT INTO members (full_name, mobile, email) VALUES
('marwajomaa','0599999999','ma@gmail.com'),
('haneenshahwan', '0599999991', 'haneen@gmail.com'),
('emankhaled', '0591234567', 'emankhaled@gmail.com'),
('ahmedshatat', '0591234561', 'ahmedshatat@gmail.com'),
('abdallsamad', '0591234564', 'abdallsamad@gmail.com'),
('mohammedalhella', '0591234565', 'mohammed@gmail.com'),
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

INSERT INTO category (name) VALUES
('programming'),
('desgin'),
('languages'),
('database'),
('webDevelopment');

INSERT INTO books (author,publish_year,book_name,category_id, description) VALUES
('Azat Mardan','November 23, 2013','Express.js Guide','1','The in-depth, detailed, hand-on manual on Express.js.'),


('Tim Brown', 'September 29, 2009', 'Change by Design', '2',
'In Change by Design, Tim Brown, CEO of IDEO, the celebrated innovation and design firm.'),

('Gabriel Wyner', 'August 5, 2014', 'Fluent Forever', '3',
'The ultimate rapid language-learning guide! For those who’ve despaired of ever learning a foreign language.'),

('McGraw-Hill', 'August 4,1986','Database System Concepts', '4',
'Database System Concepts, by Abraham Silberschatz and Hank Korth, is a classic textbook on database systems.'),

('Jon Duckett', 'june 2,2013','JavaScript and JQuery' ,'5',

'JavaScript was written to give readers an accurate .');

INSERT INTO lending (book_id,member_id,start_date,end_date ) VALUES
('1', '1', '2018-6-1', '2018-6-11'),
('2', '2', '2018-6-2', '2018-6-12'),
('4', '6', '2018-6-3', '2018-6-13'),
('5', '9', '2018-6-5', '2018-6-15');

COMMIT;
