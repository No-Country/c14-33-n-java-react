# "Gestión de Proyectos y Tareas: Aplicación Web"
### Spring Boot, JPA, Web, Error Handling, DTO, Swagger, Rest API, MySQL, Lombok

## Introducción
Esta aplicación web facilita la planificación, seguimiento y gestión de proyectos al permitir a los usuarios crear, asignar, priorizar y dar seguimiento a tareas de manera eficiente. Proporciona una visión clara del estado de las tareas y proyectos, fomenta la colaboración entre miembros del equipo, y ayuda a cumplir plazos y objetivos de manera efectiva.

## Configuración
Para utilizar la API REST en tu entorno local, sigue estos pasos:

1. Clona este repositorio: `https://github.com/No-Country/c14-33-n-java-react.git`
2. Crear base de datos H2 Console: `create database db_tasks`
3. Cambie el nombre de usuario y la contraseña de MySQL según su instalación:
    - open src/main/resources/application.properties
    - change spring.datasource.username and spring.datasource.password según su instalación de MySQL
4. Compile y ejecute la aplicación usando maven: `mvn spring-boot:run`
5. La aplicación comenzará a ejecutarse en http://localhost:8080.
