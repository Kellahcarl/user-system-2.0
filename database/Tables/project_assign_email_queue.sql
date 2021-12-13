CREATE TABLE dbo.project_assign_email_queue
( id INT PRIMARY KEY IDENTITY,
project_id VARCHAR(100) NOT NULL,
user_id VARCHAR(100) NOT NULL,
active BIT NOT NULL,
)