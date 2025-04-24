CREATE TABLE actors (
        actor_id SERIAL PRIMARY KEY,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        gender CHAR(1),
        date_of_birth DATE
);

CREATE TABLE directors (
 director_id SERIAL PRIMARY KEY,
 first_name VARCHAR(30),
 last_name VARCHAR(30) NOT NULL,
 date_of_birth DATE, 
 nationality VARCHAR(20)
);

CREATE TABLE movies (
        movie_id SERIAL PRIMARY KEY,
        movie_name VARCHAR(50),
        movie_length INT,
        movie_lang VARCHAR(20),
        release_date DATE,
        age_certificate VARCHAR(5),
        director_id INT REFERENCES directors (director_id)
);

CREATE TABLE movie_revenues (
        revenue_id SERIAL PRIMARY KEY,
        movie_id INT REFERENCES movies (movie_id),
        domestic_takings DECIMAL(6,2),
        international_takings DECIMAL(6,2)
);

CREATE TABLE movies_actors (
        movie_id INT REFERENCES movies (movie_id),
        actor_id INT REFERENCES actors (actor_id),
        PRIMARY KEY (movie_id, actor_id)
);


SELECT movie_name, movie_lang, release_date
FROM movies
WHERE movie_lang IN ('English')
ORDER BY release_date DESC
LIMIT 3


DROP TABLE movie_actors

SELECT movie_name, movie_lang, release_date
FROM movies
WHERE movie_lang in ('English')
ORDER BY release_date desc
OFFSET 3 ROWS
FETCH NEXT 3 ROWS ONLY;

SELECT COUNT(last_name) FROM actors

SELECT * FROM movies
WHERE movie_length=(168)

SELECT AVG (movie_length) FROM movies

SELECT * FROM movies
where movie_length is null

SELECT count(*) FROM movie_revenues
SELECT AVG(international_takings) from movie_revenues

-- List of distinct languages
SELECT DISTINCT movie_lang
FROM movies;

-- Count of distinct languages
SELECT COUNT(DISTINCT movie_lang)
FROM movies;


SELECT count(*) FROM movie_revenues
SELECT SUM(international_takings) from movie_revenues
SELECT AVG(international_takings) AVG_OF_INTERNATIONAL_TAKINGS from movie_revenues
SELECT 2+10*10 AS RESULT

SELECT domestic_takings+international_takings AS total_profit
FROM movie_revenues

--together
SELECT movie_lang, COUNT(*) AS total_language_movies
FROM movies
GROUP BY movie_lang;

SELECT MAX(movie_length) from movies --168

SELECT * FROM movies
WHERE movie_length=(168)

SELECT count(*) FROM movie_revenues
SELECT SUM(international_takings) FROM movie_revenues
SELECT AVG(international_takings) AVG_OF_INTERNATIONAL_TAKINGS from movie_revenues
SELECT 2+10*10 as result

SELECT * FROM movie_revenues
WHERE domestic_takings IS NULL AND WHERE domestic_takings IS NOT NULL

SELECT domestic_takings+international_takings AS total_profit
FROM movie_revenues

-- Display each movie along with the total profits together  

-- display each 'movie_lang' and 'total counts of that language movie' together

SELECT DISTINCT movie_lang FROM movies
-- "Portuguese"
-- "German"
-- "Chinese"
-- "English"
-- "Swedish"
-- "Spanish"
-- "Korean"
-- "Japanese"

SELECT movie_lang, COUNT(movie_lang) AS total_counts_per_lang FROM movies
WHERE movie_lang NOT IN ('English')
GROUP BY movie_lang
ORDER BY total_counts_per_lang

