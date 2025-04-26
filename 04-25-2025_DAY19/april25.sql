SELECT movie_lang, count(movie_lang)
FROM movies
WHERE movie_lang NOT IN ('English') 
GROUP BY movie_lang
HAVING COUNT (movie_lang) = 1 
ORDER BY COUNT

-- JOIN --

SELECT * FROM DIRECTORS
SELECT * FROM movies

SELECT first_name, last_name, movie_name, movie_lang FROM directors
JOIN movies
ON directors.director_id = movies.director_id
WHERE movie_lang NOT IN ('English')


-- Practice: show all movies and their revenue data together

SELECT movie_name, movie_lang, release_date, domestic_takings, international_takings
FROM movies
JOIN movie_revenues
-- ON movies.movie_id = movie_revenues.movie_id
USING (movie_id) -- simpler query
WHERE domestic_takings IS NOT null OR international_takings IS NOT null

INSERT INTO directors (first_name, last_name, date_of_birth, nationality)
VALUES ('John', 'Doe', '1970-02-11', 'British'),
('Peter', 'Doe', null, 'British')

-- Practice, display ALL directors first_name, last_name and movies (movie_name, movie_lang, etc) using left join
-- Practice 2: get same result using right join

SELECT first_name, last_name, movie_name, movie_lang, release_date
FROM directors
LEFT JOIN movies
USING (director_id)

SELECT first_name, last_name, movie_name, movie_lang, release_date
FROM directors
RIGHT JOIN movies
USING (director_id)


