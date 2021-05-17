SELECT * FROM favorite_movies
JOIN movies ON favorite_movies.movie_id = movies.movie_id
WHERE favorite_movies.user_id = $1;