CREATE TABLE dbo.registration_email_queue
( id INT PRIMARY KEY IDENTITY,
user_id VARCHAR(100) NOT NULL,
active BIT NOT NULL,
)