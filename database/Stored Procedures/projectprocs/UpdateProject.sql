CREATE OR ALTER PROCEDURE [dbo].[UpdateProject]
	@id varchar(100),
	@name varchar(100),
	@lead_user_id varchar(100),
	@start_date date,
	@end_date date,
	@client_name varchar(250),
	@description varchar(250)
AS

BEGIN
    set nocount on;
    UPDATE dbo.projects
            SET
            name = @name,
            lead_user_id = @lead_user_id,
            start_date=@start_date,
            end_date=@end_date,
            client_name=@client_name,
            description=@description
    WHERE _id = @id;
END