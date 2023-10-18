package com.noCountry.webApp;

import com.noCountry.webApp.entities.Project;
import com.noCountry.webApp.repositories.ProjectRepository;
import com.noCountry.webApp.util.Priority;
import com.noCountry.webApp.util.Status;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@AllArgsConstructor
public class WebAppApplication implements CommandLineRunner {

    private final ProjectRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(WebAppApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        var project1 = Project.builder()
            .name("Nombre 1 ")
            .description("Descripcion 1......")
            .creationDate(LocalDate.now())
            .expirationDate(LocalDate.now())
            .priority(Priority.MEDIUM)
            .status(Status.IN_PROGRESS)
            .comment("Comentariooooooooo loremusssss")
            .build();

        var project2 = Project.builder()
            .name("Nombre 2 ")
            .description("Descripcion 2......")
            .creationDate(LocalDate.now())
            .expirationDate(LocalDate.now())
            .priority(Priority.MEDIUM)
            .status(Status.IN_PROGRESS)
            .comment("Comentario2 lorem .sdasd")
            .build();

        repository.save(project1);
        repository.save(project2);

    }
}
