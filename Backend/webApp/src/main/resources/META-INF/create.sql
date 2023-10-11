DROP DATABASE nocountryDB;
CREATE 	DATABASE nocountryDB;
USE nocountryDB;
CREATE TABLE `Users` (
    idUser INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE,
    userPassword VARCHAR(20) NOT NULL,
    userType ENUM('adminstrador', 'miembro'),
    userRole ENUM('frontend', 'backend', 'ux/ui')
) ;

CREATE TABLE `Projects`(

    idProject INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    projectName VARCHAR(50) NOT NULL
);

CREATE TABLE `Tasks`(

    idTask INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    taskName VARCHAR(50) NOT NULL,
    creationDate DATE,
    deadline DATE,
    priority ENUM("High","Medium","Low"),
    roleTag ENUM("frontend","backend","ux/ui"),
	taskStatus ENUM("To-do","In progress","Complete"),  
    taskDescription VARCHAR(300) 
);

CREATE TABLE `LogsTask`(

    idLog INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    startTime DATETIME,
    endtTime DATETIME,
    totalTime INTEGER
);