CREATE TABLE AssignedTasks (
	_id varchar(100) NOT NULL PRIMARY KEY,
	task_id varchar(100) NOT NULL,
	user_id varchar(100) NOT NULL,
	FOREIGN KEY (task_id) REFERENCES tasks (_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (user_id) REFERENCES users (_id) ON DELETE NO ACTION ON UPDATE NO ACTION
)