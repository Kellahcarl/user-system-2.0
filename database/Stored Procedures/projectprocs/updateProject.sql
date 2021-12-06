CREATE PROCEDURE [dbo].[updateProject]
	@id varchar(100),
	@name varchar(100),
	@lead_user_id varchar(100),
	@client_name varchar(250),
	@start_date date,
	@end_date date,
	@description varchar(500)
as

set nocount on;

begin
	UPDATE dbo.projects
	SET 
	name=@name,
	lead_user_id=@lead_user_id,
	description=@description,
	client_name=@client_name,
	start_date=@start_date,
	end_date=@end_date
	WHERE _id = @id;
end;