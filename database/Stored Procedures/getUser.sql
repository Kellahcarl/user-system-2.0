CREATE PROCEDURE [dbo].[userGet]
	@userId	varchar(100)
as

set nocount on;

begin
	select	u.[_id],
			u.first,
			u.last,
			u.email,
			u.age,
			u.gender,
			u.isAdmin
	from	[users] u where _id = @userId;
end;