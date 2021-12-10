CREATE OR ALTER PROCEDURE [dbo].[getTasks]
 @project_id varchar(100)
as


begin
set nocount on;
	select	t._id,
			t.name,
			t.project_id,
			t.user_id,
			t.duration,
			t.start_date,
			t.end_date,
			t.description
	from	[tasks] t where project_id = @project_id;
end;