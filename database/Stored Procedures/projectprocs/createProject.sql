CREATE OR ALTER PROCEDURE [dbo].[createProject]
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

    INSERT INTO dbo.projects
    (_id, name, lead_user_id, start_date, end_date, client_name, description, isDeleted, isCompleted)
    VALUES
    (@id, @name, @lead_user_id, @start_date, @end_date, @client_name, @description, 0, 0);
END