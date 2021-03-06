﻿/*
Deployment script for basketballteam

This code was generated by a tool.
Changes to this file may cause incorrect behavior and will be lost if
the code is regenerated.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "basketballteam"
:setvar DefaultFilePrefix "basketballteam"
:setvar DefaultDataPath ""
:setvar DefaultLogPath ""

GO
:on error exit
GO
/*
Detect SQLCMD mode and disable script execution if SQLCMD mode is not supported.
To re-enable the script after enabling SQLCMD mode, execute the following:
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'SQLCMD mode must be enabled to successfully execute this script.';
        SET NOEXEC ON;
    END


GO
PRINT N'Creating [dbo].[Game]...';


GO
CREATE TABLE [dbo].[Game] (
    [GameID]   INT          NOT NULL,
    [Venue]    VARCHAR (50) NOT NULL,
    [Date]     DATE         NOT NULL,
    [Time]     TIME (7)     NOT NULL,
    [Amount]   INT          NULL,
    [MemberID] INT          NULL,
    CONSTRAINT [PK_Game] PRIMARY KEY CLUSTERED ([GameID] ASC)
);


GO
PRINT N'Creating [dbo].[Member]...';


GO
CREATE TABLE [dbo].[Member] (
    [MemberID] INT          NOT NULL,
    [Name]     VARCHAR (50) NOT NULL,
    [Password] VARCHAR (20) NOT NULL,
    [Role]     VARCHAR (20) NOT NULL,
    CONSTRAINT [PK_Member] PRIMARY KEY CLUSTERED ([MemberID] ASC)
);


GO
PRINT N'Creating [dbo].[FK_Game_Member]...';


GO
ALTER TABLE [dbo].[Game] WITH NOCHECK
    ADD CONSTRAINT [FK_Game_Member] FOREIGN KEY ([MemberID]) REFERENCES [dbo].[Member] ([MemberID]);


GO
