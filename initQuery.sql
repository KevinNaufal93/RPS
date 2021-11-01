CREATE DATABASE rps

--\c into rps

CREATE TABLE userGame(
    userGameId SERIAL PRIMARY KEY,
    userName VARCHAR(255),
    userEmail VARCHAR(255),
    userPassword VARCHAR(255)
);