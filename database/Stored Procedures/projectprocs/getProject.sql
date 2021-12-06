CREATE PROCEDURE [dbo].[getProject]
	@project_id varchar(100)
as

set nocount on;

begin
	select	p._id,
			p.name,
			p.lead_user_id,
			p.start_date,
			p.end_date,
			p.client_name,
			p.description,
			p.team_id
	from	[projects] p where _id = @project_id;
end;