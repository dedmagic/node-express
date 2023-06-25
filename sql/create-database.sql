DROP TABLE IF EXISTS positions;
CREATE TABLE positions (
	id INTEGER PRIMARY KEY,
	name TEXT NOT NULL,
	parentId INTEGER NULL,
	FOREIGN KEY (parentId)
		REFERENCES positions(id)
);

DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
	id INTEGER PRIMARY KEY,
	name TEXT NOT NULL,
	positionId INTEGER NULL,
	FOREIGN KEY (positionId)
		REFERENCES positions(id)		
);
