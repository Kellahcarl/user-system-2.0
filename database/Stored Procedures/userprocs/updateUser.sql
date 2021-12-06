CREATE OR ALTER  PROCEDURE [dbo].[updateUser]
	@id varchar(100),
	@firstname varchar(100),
	@lastname varchar(100),
	@email varchar(250),
	@gender varchar(50),
	@age int
as

set nocount on;

begin
	UPDATE dbo.users
	SET 
	first=@firstname, 
	last=@lastname, 
	email=@email, 
	gender=@gender,
	age=@age
	WHERE _id = @id;
end;

