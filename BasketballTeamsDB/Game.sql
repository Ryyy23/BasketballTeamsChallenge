CREATE TABLE [dbo].[Game]
(
[GameID] INT NOT NULL,
[Venue] VARCHAR(50) NOT NULL,
[Date] Date NOT NULL,
[Time] Time NOT NULL,
[Amount] INT,
[MemberID] INT,
CONSTRAINT [PK_Game] PRIMARY KEY ([GameID]),
CONSTRAINT [FK_Game_Member] FOREIGN KEY ([MemberID]) REFERENCES [Member]([MemberID]) 
)
