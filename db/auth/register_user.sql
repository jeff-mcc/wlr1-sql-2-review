INSERT INTO users
(email, password)
VALUES
($1, $2) 
returning email, user_id;