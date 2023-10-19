package com.noCountry.webApp;

import com.noCountry.webApp.entities.Project;
import com.noCountry.webApp.entities.Task;
import com.noCountry.webApp.entities.User;
import com.noCountry.webApp.repositories.ProjectRepository;
import com.noCountry.webApp.repositories.TaskRepository;
import com.noCountry.webApp.repositories.UserRepository;
import com.noCountry.webApp.util.AccountStatus;
import com.noCountry.webApp.util.Priority;
import com.noCountry.webApp.util.Status;
import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@AllArgsConstructor
public class WebAppApplication implements CommandLineRunner {

    private final ProjectRepository repository;
    private final UserRepository userRepository;
    private final TaskRepository taskRepository;

    public static void main(String[] args) {
        SpringApplication.run(WebAppApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        var user1 = User.builder()
            .firstName("Jon")
            .lastName("Doe")
            .email("jon@gmail.com")
            .userName("jondoe123")
            .password("123456")
            .registrationDate(LocalDate.now())
            .imagePerfil("www.imagen.com.ar")
            .phone("3889656562")
            .address("Los Angeles")
            .accountStatus(AccountStatus.ACTIVE)
            .build();

        var user2 = User.builder()
            .firstName("George")
            .lastName("Ken")
            .email("ken@gmail.com")
            .userName("george_ken")
            .password("123456")
            .registrationDate(LocalDate.now())
            .imagePerfil("www.imagen.com.ar")
            .phone("3889656562")
            .address("London")
            .accountStatus(AccountStatus.ACTIVE)
            .build();

        var user3 = User.builder()
            .firstName("Mario")
            .lastName("Perez")
            .email("mario@gmail.com")
            .userName("mario_perez123")
            .password("123456")
            .registrationDate(LocalDate.now())
            .imagePerfil("www.imagen.com.ar")
            .phone("3889656562")
            .address("Mexico")
            .accountStatus(AccountStatus.ACTIVE)
            .build();

        userRepository.save(user1);
        userRepository.save(user2);
        userRepository.save(user3);

        var project1 = Project.builder()
            .name("Proyecto n°1")
            .description("Realizar el proyecto numero 1")
            .creationDate(LocalDate.now())
            .expirationDate(LocalDate.now())
            .priority(Priority.MEDIUM)
            .status(Status.IN_PROGRESS)
            .comment("Comentariooooooooo loremusssss")
            .user(user1)
            .build();

        var project2 = Project.builder()
            .name("Proyecto n°2")
            .description("Descripcion 2......")
            .creationDate(LocalDate.now())
            .expirationDate(LocalDate.now())
            .priority(Priority.MEDIUM)
            .status(Status.IN_PROGRESS)
            .comment("Comentario2 lorem ipsum")
            .user(user1)
            .build();

        var project3 = Project.builder()
            .name("Proyecto n°3")
            .description("Descripcion 3......")
            .creationDate(LocalDate.now())
            .expirationDate(LocalDate.now())
            .priority(Priority.MEDIUM)
            .status(Status.IN_PROGRESS)
            .comment("Comentario2 lorem ipsum")
            .user(user2)
            .build();

        repository.save(project1);
        repository.save(project2);
        repository.save(project3);

        var task1 = Task.builder()
            .name("Tarea 1")
            .description("Realizar la tarea n 1")
            .creationDate(LocalDate.now())
            .finishDate(LocalDate.now())
            .priority(Priority.MEDIUM)
            .status(Status.IN_PROGRESS)
            .comment("Comentarioooooooo")
            .workHour(LocalDateTime.now())
            .project(project1)
            .build();

        var task2 = Task.builder()
            .name("Tarea 2")
            .description("Realizar la tarea n 2")
            .creationDate(LocalDate.now())
            .finishDate(LocalDate.now())
            .priority(Priority.MEDIUM)
            .status(Status.IN_PROGRESS)
            .comment("Comentarioooooooo")
            .workHour(LocalDateTime.now())
            .project(project1)
            .build();

        var task3 = Task.builder()
            .name("Tarea 3")
            .description("Realizar la tarea n 3")
            .creationDate(LocalDate.now())
            .finishDate(LocalDate.now())
            .priority(Priority.MEDIUM)
            .status(Status.IN_PROGRESS)
            .comment("Comentarioooooooo")
            .workHour(LocalDateTime.now())
            .project(project2)
            .build();

        var task4 = Task.builder()
            .name("Tarea 4")
            .description("Realizar la tarea n 4")
            .creationDate(LocalDate.now())
            .finishDate(LocalDate.now())
            .priority(Priority.MEDIUM)
            .status(Status.IN_PROGRESS)
            .comment("Comentarioooooooo")
            .workHour(LocalDateTime.now())
            .project(project2)
            .build();

        var task5 = Task.builder()
            .name("Tarea 5")
            .description("Realizar la tarea n 5")
            .creationDate(LocalDate.now())
            .finishDate(LocalDate.now())
            .priority(Priority.MEDIUM)
            .status(Status.IN_PROGRESS)
            .comment("Comentarioooooooo")
            .workHour(LocalDateTime.now())
            .project(project3)
            .build();

        taskRepository.save(task1);
        taskRepository.save(task2);
        taskRepository.save(task3);
        taskRepository.save(task4);
        taskRepository.save(task5);
    }
}
