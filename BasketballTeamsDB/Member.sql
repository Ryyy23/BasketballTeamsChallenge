CREATE TABLE [dbo].[Member]
(
[MemberID] INT NOT NULL,
[Name] VARCHAR(50) NOT NULL,
[Password] VARCHAR(20) NOT NULL,
[Role] VARCHAR(20) NOT NULL,
CONSTRAINT [PK_Member] PRIMARY KEY ([MemberID])

)
