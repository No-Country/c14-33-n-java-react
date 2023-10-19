# API REST para Gestión de Libros y Autores
### Spring Boot, JPA, Web, Error Handling, DTO, Swagger, Rest API, H2 Console, Lombok

## Introducción
API REST que relaciona libros y autores proporciona una interfaz para interactuar con una base de datos de libros y autores a través de solicitudes HTTP. Ofrece endpoints para operaciones como obtener una lista de libros y autores, recuperar información detallada de libros y autores individuales, crear nuevos libros, actualizar registros existentes y eliminar libros. Esto permite a los desarrolladores gestionar la relación entre libros y autores de manera eficiente a través de servicios web RESTful.

## Configuración
Para utilizar la API REST en tu entorno local, sigue estos pasos:

1. Clona este repositorio: `https://github.com/ale94/Book-REST-API-CRUD.git`
2. Crear base de datos H2 Console: `create database testdb`
3. Cambie el nombre de usuario y la contraseña de H2 Console según su instalación:
    - open src/main/resources/application.properties
    - change spring.datasource.username and spring.datasource.password según su instalación de H2
4. Compile y ejecute la aplicación usando maven: `mvn spring-boot:run`
5. La aplicación comenzará a ejecutarse en http://localhost:8080.
