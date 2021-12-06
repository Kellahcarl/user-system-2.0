CREATE OR ALTER PROCEDURE [dbo].[getProjects]
(
    @project_id varchar(100) = NULL,
    @user_id varchar(100),
    @PageNumber INT = 0,
    @NumberOfRecordsPerPage INT = 100
)

AS
BEGIN
    SET NOCOUNT ON;

	DECLARE @isAdmin BIT;

	select @isAdmin = isAdmin from dbo.users where _id = @user_id and isDeleted=0;
	
	IF @project_id IS NOT NULL
	BEGIN
		SELECT * FROM dbo.projects 
		where _id = @project_id and isDeleted = 0
		FOR JSON PATH, INCLUDE_NULL_VALUES
	END
	ELSE
	BEGIN
		IF @isAdmin = 1
		BEGIN
			SELECT * FROM dbo.projects p
			where isDeleted = 0
			ORDER BY p._id
			OFFSET (@PageNumber * @NumberOfRecordsPerPage) ROWS
			FETCH NEXT @NumberOfRecordsPerPage ROWS ONLY
			FOR JSON PATH, INCLUDE_NULL_VALUES
		END
		ELSE
		BEGIN
			SELECT 
			DISTINCT p._id pid,
			p.name,
			p.lead_user_id,
			p.start_date,
			p.end_date,
			p.client_name,
			p.team_id
			FROM dbo.projects p 
			LEFT join 
			dbo.AssignedProjects ap 
			on p._id = ap.project_id
			where 
			(p.lead_user_id = @user_id
			or
			ap.user_id = @user_id)
			and isDeleted = 0
			order by p._id
			OFFSET (@PageNumber * @NumberOfRecordsPerPage) ROWS
			FETCH NEXT @NumberOfRecordsPerPage ROWS ONLY
			FOR JSON PATH, INCLUDE_NULL_VALUES
		END
	END
END
