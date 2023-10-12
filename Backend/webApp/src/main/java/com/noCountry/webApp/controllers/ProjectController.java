package com.noCountry.webApp.controllers;

import com.noCountry.webApp.entities.Project;
import com.noCountry.webApp.services.ProjectService;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api")
public class ProjectController {

    private final ProjectService service = null;

    @GetMapping("/projects")
    public List<Project> list() {
        return service.findAll();
    }

    @GetMapping("/projects/{id}")
    public ResponseEntity<?> show(@PathVariable Long id) {
        Optional<Project> project = service.findById(id);
        if (project.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(project);
    }

    @PostMapping("/projects")
    public ResponseEntity<?> create(@RequestBody Project project) {
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(service.save(project));
    }

    @DeleteMapping("/projects/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<Project> user = service.findById(id);
        if (user.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        service.remove(id);
        return ResponseEntity.noContent().build();
    }

}
