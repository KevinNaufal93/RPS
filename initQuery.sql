CREATE DATABASE rps

--\c into rps

CREATE TABLE userGame(
    userGameId SERIAL PRIMARY KEY,
    userName VARCHAR(255),
    userEmail VARCHAR(255),
    userPassword VARCHAR(255)
);

CREATE TABLE userGameBiodata(
    userId SERIAL PRIMARY KEY,
    userName VARCHAR(255),
    fullname VARCHAR(255),
    age INTEGER
);

CREATE TABLE userGameHistory(
    HistoryId SERIAL PRIMARY KEY,
    userId INTEGER,
    timesPlayed INTEGER,
    timesWon INTEGER,
    timeslost INTEGER
);