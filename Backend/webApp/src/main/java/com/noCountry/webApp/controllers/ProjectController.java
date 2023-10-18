package com.noCountry.webApp.controllers;

import com.noCountry.webApp.dto.ProjectRequest;
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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api")
public class ProjectController {

    private final ProjectService service;

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

    @PostMapping("/projects/users/{userId}")
    public ResponseEntity<?> create(@RequestBody ProjectRequest request,
        @PathVariable Long userId) {
        var project = service.save(request, userId);
        if (project == null) {
            //throw new NotFoundException("projects", "id", project.getId());
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(project);
    }

    @PutMapping("/projects/{projectId}/users/{userId}")
    public ResponseEntity<?> update(@RequestBody ProjectRequest request,
        @PathVariable Long projectId,
        @PathVariable Long userId) {
        Optional<Project> searchedProject = service.findById(projectId);
        if (searchedProject.isEmpty()) {
            //throw new NotFoundException("books", "id", bookId);
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(service.update(request, projectId, userId));
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
