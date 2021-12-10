CREATE OR ALTER  PROCEDURE [dbo].[deleteProject]
	@id varchar(100)
as

set nocount on;

begin
	UPDATE dbo.projects
	SET 
	isDeleted=1
	WHERE _id = @id;
end;