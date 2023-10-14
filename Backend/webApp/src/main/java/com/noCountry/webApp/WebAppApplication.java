package com.noCountry.webApp;

import com.noCountry.webApp.entities.Project;
import com.noCountry.webApp.repositories.ProjectRepository;
import com.noCountry.webApp.util.Prioridad;
import com.noCountry.webApp.util.Estado;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@AllArgsConstructor
public class WebAppApplication implements CommandLineRunner {

    private final ProjectRepository repository = null;

    public static void main(String[] args) {
        SpringApplication.run(WebAppApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        var project1 = Project.builder()
            .nombre("Nombre 1 ")
            .descripcion("Descripcion 1......")
            .fechaCreacion(LocalDate.now())
            .fechaVencimiento(LocalDate.now())
            .prioridad(Prioridad.MEDIUM)
            .estado(Estado.IN_PROGRESS)
            .build();

        var project2 = Project.builder()
            .nombre("Nombre 2 ")
            .descripcion("Descripcion 2......")
            .fechaCreacion(LocalDate.now())
            .fechaVencimiento(LocalDate.now())
            .prioridad(Priority.MEDIUM)
            .estado(Status.IN_PROGRESS)
            .build();

        repository.save(project1);
        repository.save(project2);

    }
}
