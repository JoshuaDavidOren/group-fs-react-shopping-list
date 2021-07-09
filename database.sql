-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- Database name:  fs-react-shopping

CREATE TABLE list (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "quantity" NUMERIC NOT NULL,
    "unit" VARCHAR(20),
    "isBought" BOOLEAN DEFAULT FALSE
);

INSERT INTO list ("name", "quantity", "unit")
	VALUES ('eggs', 2, 'dozen'), ('milk', 2.5, 'cups');
	
DROP TABLE list;