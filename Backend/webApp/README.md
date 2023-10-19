# API REST para Gestión de Proyectos y Tareas
### Spring Boot, JPA, Web, Error Handling, DTO, Swagger, Rest API, MySQL, Lombok

## Introducción
Esta API REST proporciona una interfaz programática para acceder y manipular datos relacionados con la gestión de tareas y proyectos. Permite a los desarrolladores crear, asignar, modificar y obtener información sobre tareas y proyectos a través de solicitudes HTTP. Con esta API, las aplicaciones y sistemas pueden integrarse fácilmente con la plataforma de gestión de tareas, lo que permite una mayor automatización y personalización de las funciones de gestión de proyectos.

## Configuración
Para utilizar la API REST en tu entorno local, sigue estos pasos:

1. Clona este repositorio: `https://github.com/No-Country/c14-33-n-java-react.git`
2. Crear base de datos H2 Console: `create database db_tasks`
3. Cambie el nombre de usuario y la contraseña de MySQL según su instalación:
    - open src/main/resources/application.properties
    - change spring.datasource.username and spring.datasource.password según su instalación de MySQL
4. Compile y ejecute la aplicación usando maven: `mvn spring-boot:run`
5. La aplicación comenzará a ejecutarse en http://localhost:8080.

## Endpoints
### User
- **Listar User**: `GET /api/users`
- **Obtener User por ID**: `GET /api/users/{id}`
- **Crear User**: `POST /api/users`
- **Actualizar User por ID**: `PUT /api/users/{id}`
- **Eliminar User por ID**: `DELETE /api/users/{id}`
  
### Task
- **Listar Task**: `GET /api/tasks`
- **Obtener Task por ID**: `GET /api/tasks/{id}`
- **Crear Task**: `POST /api/tasks/projects/{projectId}`
- **Actualizar Task por ID**: `PUT /api/tasks/{taskId}/projects/{projectId}`
- **Eliminar Task por ID**: `DELETE /api/tasks/{id}`

### Project
- **Listar Project**: `GET /api/projects`
- **Obtener Project por ID**: `GET /api/projects/{id}`
- **Crear Project**: `POST /api/projects/users/{userId}`
- **Actualizar Project por ID**: `PUT /api/projects/{projectId}/users/{userId}`
- **Eliminar Project por ID**: `DELETE /api/projects/{id}`

## Ejemplos de uso
### Listar Users

- **URL**: `/api/users`
- **Método**: `GET`
- **Respuesta exitosa**:

```json
[
  {
    "id": 1,
    "firstName": "Jon",
    "lastName": "Doe",
    "email": "jon@gmail.com",
    "userName": "jondoe123",
    "password": "123456",
    "registrationDate": "2023-10-18",
    "imagePerfil": "www.imagen.com.ar",
    "phone": "3889656562",
    "address": "Los Angeles",
    "accountStatus": "ACTIVE",
    "projects": [
      {
        "id": 1,
        "name": "Proyecto n°1",
        "description": "Realizar el proyecto numero 1",
        "creationDate": "2023-10-18",
        "expirationDate": "2023-10-18",
        "comment": "Comentariooooooooo loremusssss",
        "priority": "MEDIUM",
        "status": "IN_PROGRESS",
        "tasks": [
          {
            "id": 1,
            "name": "Tarea 1",
            "description": "Realizar la tarea n 1",
            "creationDate": "2023-10-18",
            "finishDate": "2023-10-18",
            "priority": "MEDIUM",
            "status": "IN_PROGRESS",
            "comment": "Comentarioooooooo",
            "workHour": "2023-10-18 10:16"
          },
          {
            "id": 2,
            "name": "Tarea 2",
            "description": "Realizar la tarea n 2",
            "creationDate": "2023-10-18",
            "finishDate": "2023-10-18",
            "priority": "MEDIUM",
            "status": "IN_PROGRESS",
            "comment": "Comentarioooooooo",
            "workHour": "2023-10-18 10:16"
          }
        ]
      },
      {
        "id": 2,
        "name": "Proyecto n°2",
        "description": "Descripcion 2......",
        "creationDate": "2023-10-18",
        "expirationDate": "2023-10-18",
        "comment": "Comentario2 lorem ipsum",
        "priority": "MEDIUM",
        "status": "IN_PROGRESS",
        "tasks": [
          {
            "id": 3,
            "name": "Tarea 3",
            "description": "Realizar la tarea n 3",
            "creationDate": "2023-10-18",
            "finishDate": "2023-10-18",
            "priority": "MEDIUM",
            "status": "IN_PROGRESS",
            "comment": "Comentarioooooooo",
            "workHour": "2023-10-18 10:16"
          },
          {
            "id": 4,
            "name": "Tarea 4",
            "description": "Realizar la tarea n 4",
            "creationDate": "2023-10-18",
            "finishDate": "2023-10-18",
            "priority": "MEDIUM",
            "status": "IN_PROGRESS",
            "comment": "Comentarioooooooo",
            "workHour": "2023-10-18 10:16"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "firstName": "George",
    "lastName": "Ken",
    "email": "ken@gmail.com",
    "userName": "george_ken",
    "password": "123456",
    "registrationDate": "2023-10-18",
    "imagePerfil": "www.imagen.com.ar",
    "phone": "3889656562",
    "address": "London",
    "accountStatus": "ACTIVE",
    "projects": [
      {
        "id": 3,
        "name": "Proyecto n°3",
        "description": "Descripcion 3......",
        "creationDate": "2023-10-18",
        "expirationDate": "2023-10-18",
        "comment": "Comentario2 lorem ipsum",
        "priority": "MEDIUM",
        "status": "IN_PROGRESS",
        "tasks": [
          {
            "id": 5,
            "name": "Tarea 5",
            "description": "Realizar la tarea n 5",
            "creationDate": "2023-10-18",
            "finishDate": "2023-10-18",
            "priority": "MEDIUM",
            "status": "IN_PROGRESS",
            "comment": "Comentarioooooooo",
            "workHour": "2023-10-18 10:16"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Mario",
    "lastName": "Perez",
    "email": "mario@gmail.com",
    "userName": "mario_perez123",
    "password": "123456",
    "registrationDate": "2023-10-18",
    "imagePerfil": "www.imagen.com.ar",
    "phone": "3889656562",
    "address": "Mexico",
    "accountStatus": "ACTIVE",
    "projects": []
  }
]
```

### Obtener User por ID

- **URL**: `/api/users/{id}`
- **Método**: GET
- **Cuerpo de la Solicitud:**

```json
{
  "id": 2,
  "firstName": "George",
  "lastName": "Ken",
  "email": "ken@gmail.com",
  "userName": "george_ken",
  "password": "123456",
  "registrationDate": "2023-10-18",
  "imagePerfil": "www.imagen.com.ar",
  "phone": "3889656562",
  "address": "London",
  "accountStatus": "ACTIVE",
  "projects": [
    {
      "id": 3,
      "name": "Proyecto n°3",
      "description": "Descripcion 3......",
      "creationDate": "2023-10-18",
      "expirationDate": "2023-10-18",
      "comment": "Comentario2 lorem ipsum",
      "priority": "MEDIUM",
      "status": "IN_PROGRESS",
      "tasks": [
        {
          "id": 5,
          "name": "Tarea 5",
          "description": "Realizar la tarea n 5",
          "creationDate": "2023-10-18",
          "finishDate": "2023-10-18",
          "priority": "MEDIUM",
          "status": "IN_PROGRESS",
          "comment": "Comentarioooooooo",
          "workHour": "2023-10-18 10:16"
        }
      ]
    }
  ]
}
```

### Crear User

- **URL**: `/api/users`
- **Método**: POST
- **Cuerpo de la Solicitud:**

```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "userName": "string",
  "password": "string",
  "registrationDate": "2023-10-19",
  "imagePerfil": "string",
  "phone": "string",
  "address": "string",
  "accountStatus": "ACTIVE"
}
```

### Actualizar User por ID

- **URL**: `/api/users/{id}`
- **Método**: PUT
- **Cuerpo de la Solicitud:**

```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "userName": "string",
  "password": "string",
  "registrationDate": "2023-10-19",
  "imagePerfil": "string",
  "phone": "string",
  "address": "string",
  "accountStatus": "ACTIVE"
}
```

### Eliminar User por ID

- **URL**: `/api/users/{id}`
- **Método**: DELETE
- **Respuesta exitosa**:

```json
{
    "message": "The user has been successfully deleted"
}
```
