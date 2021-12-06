CREATE OR ALTER  PROCEDURE [dbo].[userRegister]
	@id varchar(100),
	@firstname varchar(100),
	@lastname varchar(100),
	@email varchar(250),
	@gender varchar(50),
	@age int,
	@password varchar(250),
	@isAdmin int
as

set nocount on;

begin
	INSERT INTO dbo.users
	(_id, first, last, email, gender, age, password, isAdmin)
	VALUES
	(@id, @firstname, @lastname, @email, @gender, @age, @password, @isAdmin);
end;