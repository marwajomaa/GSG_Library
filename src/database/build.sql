BEGIN;
DROP TABLE IF EXISTS  members,admin,category,waiting_list,lending,books CASCADE;
CREATE TABLE members (
  	id serial NOT NULL UNIQUE,
	full_name varchar(150) NOT NULL,
	mobile varchar(150) NOT NULL UNIQUE,
	email varchar(250) NOT NULL UNIQUE,
	CONSTRAINT members_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
;



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
	CONSTRAINT books_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);








ALTER TABLE "waiting_list" ADD CONSTRAINT "waiting_list_fk0" FOREIGN KEY ("member_id") REFERENCES "members"("id");
ALTER TABLE "waiting_list" ADD CONSTRAINT "waiting_list_fk1" FOREIGN KEY ("book_id") REFERENCES "members"("id");

ALTER TABLE "lending" ADD CONSTRAINT "lending_fk0" FOREIGN KEY ("book_id") REFERENCES "books"("id");
ALTER TABLE "lending" ADD CONSTRAINT "lending_fk1" FOREIGN KEY ("member_id") REFERENCES "members"("id");

ALTER TABLE "books" ADD CONSTRAINT "books_fk0" FOREIGN KEY ("category_id") REFERENCES "category"("id");
COMMIT;