CREATE TABLE projects (
	_id varchar(100) NOT NULL PRIMARY KEY,
	name varchar(250) NOT NULL,
	lead_user_id varchar(100) NOT NULL,
	client_name varchar(100) NOT NULL,
	description varchar(250) NOT NULL,
	start_date DATE NOT NULL,
	end_date DATE NOT NULL,
	isDeleted BIT NOT NULL,
	isCompleted BIT NOT NULL,
	FOREIGN KEY (lead_user_id) REFERENCES users (_id) ON DELETE CASCADE ON UPDATE CASCADE,
)