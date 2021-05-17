DROP TABLE IF EXISTS favorite_movies;
DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(100),
  password VARCHAR(2000)
);

CREATE TABLE movies (
  movie_id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  director VARCHAR(100)
);

CREATE TABLE favorite_movies (
  favorite_movie_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  movie_id INT REFERENCES movies(movie_id)
);

INSERT INTO movies (
    title, director
)VALUES(
    'Star Wars', 'George Lucas'
), (
    'Hot Fuzz', 'Edgar Wright'
), (
    'Some Other Movie', 'some movie'
);