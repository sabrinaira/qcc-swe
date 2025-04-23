CREATE TABLE movies_actors (
movie_id integer references movies (movie_id),
actor_id integer references actors (actor_id),
primary key (movie_id,actor_id)
);

SELECT * FROM movies_actors

SELECT * FROM public.actors
ORDER BY actor_id ASC

SELECT COUNT(*) FROM movies_actors
union all
SELECT COUNT(*) from actors
union all
SELECT COUNT(*) FROM direcotrs

SELECT * FROM actors WHERE gender='F'

-- First names start with 'D'
SELECT first_name, last_name, gender FROM actors
-- WHERE first_name like 'D%'
-- WHERE first_name like 'D____'
WHERE first_name like '__r__'

SELECT first_name, last_name, gender, date_of_birth FROM actors
WHERE date_of_birth <'1990-01-01' AND date_of_birth>'1980-01-01'
ORDER BY date_of_birth DESC

SELECT * FROM movies
WHERE movie_id IN ('48')

SELECT movie_name, movie_lang, movie_length, release_date FROM movies
WHERE movie_lang in ('Chinese', 'Portuguese', 'Japanese', 'Spanish')
-- WHERE movie_lang = 'English' OR movie_lang = 'Portuguese'
ORDER BY movie_lang

-- check on how many different languages of movies the table has
SELECT DISTINCT movie_lang FROM movies
WHERE movie_lang NOT IN ('English')
ORDER BY movie_lang;

SELECT movie_name, movie_length, release_date
FROM movies
WHERE movie_name LIKE 'Spider%' OR movie_name LIKE 'Star%'
ORDER BY movie_name ASC, movie_length DESC

SELECT first_name, last_name from actors
ORDER BY first_name, last_name;

SELECT * FROM directors
-- WHERE director_id IN (24,17);
WHERE director_id IN (6)

UPDATE directors
SET nationality = 'American'
WHERE director_id IN (24,17);

SELECT * FROM movie_revenues
WHERE international_takings IS NOT null
ORDER BY international_takings DESC

SELECT * FROM movies
WHERE movie_id IN (SELECT movie_id FROM movie_revenues
WHERE international_takings IS NOT null
ORDER BY international_takings DESC LIMIT 1);
