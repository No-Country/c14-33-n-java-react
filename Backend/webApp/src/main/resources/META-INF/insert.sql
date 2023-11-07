USE nocountryDB;
INSERT INTO Users (userName,email,userPassword,userType,userRole) VALUES 
("Ana Pérez","anaperex@correo.com","anaperez",1,NULL),
("Victor Rojas","victorrojas@correo.com","victorrojas",2,1),
("José Gómez","josegomez@correo.com","josegomez",2,2);

INSERT INTO Projects (projectName) VALUES ("Proyecto 1");

INSERT INTO Tasks (taskName,roleTag,taskStatus) VALUES 
("Tarea 1",1,1),
("Tarea 2",2,1);

INSERT INTO LogsTask (totalTime) VALUES
(32),
(25),
(10),
(8);

