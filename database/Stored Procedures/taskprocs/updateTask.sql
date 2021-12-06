CREATE PROCEDURE [dbo].[updateTask]
	@id varchar(100),
	@name varchar(100),
	@project_id varchar(100),
	@user_id varchar(100),
	@start_date date,
	@end_date date,
	@description varchar(500)
as

set nocount on;

begin
	UPDATE dbo.tasks
	SET 
	name=@name, 
	project_id=@project_id, 
	user_id=@user_id, 
	description=@description,
	start_date=@start_date,
	end_date=@end_date
	WHERE _id = @id;
end;