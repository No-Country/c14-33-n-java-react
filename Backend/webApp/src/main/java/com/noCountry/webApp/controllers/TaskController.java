package com.noCountry.webApp.controllers;

import com.noCountry.webApp.dto.TaskRequest;
import com.noCountry.webApp.entities.Task;
import com.noCountry.webApp.exceptions.NotFoundException;
import com.noCountry.webApp.services.TaskService;
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
public class TaskController {

    private final TaskService taskService;

    @GetMapping("/tasks")
    public List<Task> list() {
        return taskService.findAll();
    }

    @GetMapping("/tasks/{id}")
    public ResponseEntity<?> show(@PathVariable Long id) {
        Optional<Task> task = taskService.findById(id);
        if (task.isEmpty()) {
            throw new NotFoundException("tasks", "id", id);
        }
        return ResponseEntity.ok(task);
    }

    @PostMapping("/tasks/projects/{projectId}")
    public ResponseEntity<?> create(@RequestBody TaskRequest request,
        @PathVariable Long projectId) {
        var task = taskService.save(request, projectId);
        if (task == null) {
            throw new NotFoundException("tasks", "id", task.getId());
        }
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(task);
    }

    @PutMapping("/tasks/{taskId}/projects/{projectId}")
    public ResponseEntity<?> update(@RequestBody TaskRequest request,
        @PathVariable Long taskId,
        @PathVariable Long projectId) {
        Optional<Task> task = taskService.findById(projectId);
        if (task.isEmpty()) {
            throw new NotFoundException("tasks", "id", taskId);
        }
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(taskService.update(request, taskId, projectId));
    }

    @DeleteMapping("/tasks/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<Task> task = taskService.findById(id);
        if (task.isEmpty()) {
            throw new NotFoundException("tasks", "id", id);
        }
        taskService.remove(id);
        return ResponseEntity.noContent().build();
    }

}
