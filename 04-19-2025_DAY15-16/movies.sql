-- table 1
CREATE TABLE actors (
actor_id SERIAL PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
gender CHAR(1),
date_of_birth DATE
);

SELECT * FROM actors;
DROP TABLE actors;

-- table 2
CREATE TABLE directors (
director_id SERIAL PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
date_of_birth DATE,
nationality VARCHAR(20)
);

SELECT * FROM directors;
DROP TABLE directors;

-- table 3
CREATE TABLE movies (
movie_id SERIAL PRIMARY KEY,
movie_name VARCHAR(50),
movie_length VARCHAR(90),
movie_lang VARCHAR(20),
release_date DATE,
age_certificate VARCHAR(5),
director_id integer references directors (director_id)
);

SELECT * FROM movies;
DROP TABLE movies;


-- table 4
CREATE TABLE movie_revenues (
revenue_id SERIAL PRIMARY KEY,
movie_id integer references movies (movie_id),
domestic_takings NUMERIC(6,2),
international_takings NUMERIC(6,2)
);

SELECT * FROM movie_revenues;

DROP TABLE movie_revenues;

-- table 5
CREATE TABLE movies_actors (
movie_id integer references movies (movie_id),
actor_id integer references actors (actor_id)
);

SELECT * FROM movies_actors
DROP TABLE movie_actors;



SELECT count(*) from directors
union all
SELECT count(*) from actors
union all
SELECT count(*) from movies
union all
SELECT count(*) from movie_revenues


-- to start everything over
DROP TABLE IF EXISTS 
  movie_revenues, 
  movies_actors, 
  movies, 
  directors, 
  actors 
CASCADE;