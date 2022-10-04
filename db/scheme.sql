CREATE DATABASE baker_collective; 
\c baker_collective;\

CREATE TABLE bakers(
    id SERIAL PRIMARY KEY,
    img TEXT,
    name TEXT,
    address TEXT,
    contact numeric,
    specialty TEXT,
    creator numeric
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT, 
  password_digest TEXT,
  type TEXT
);