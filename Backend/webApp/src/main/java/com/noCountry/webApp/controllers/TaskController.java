package com.noCountry.webApp.controllers;

import com.noCountry.webApp.dto.request.TaskRequest;
import com.noCountry.webApp.dto.response.TaskResponse;
import com.noCountry.webApp.services.TaskService;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(originPatterns = "*")
public class TaskController {

    private final TaskService taskService;


    @GetMapping("/projects/{projectId}/tasks")
    public ResponseEntity<List<TaskResponse>> taskByProjectId(@PathVariable Long projectId) {
        return ResponseEntity.ok(taskService.taskByProjectId(projectId));
    }

    @PostMapping("/projects/{projectId}/tasks")
    public ResponseEntity<TaskResponse> create(@RequestBody TaskRequest request,
        @PathVariable Long projectId) {
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(taskService.save(request, projectId));
    }

    @PutMapping("/projects/{projectId}/tasks/{taskId}")
    public ResponseEntity<TaskResponse> update(@RequestBody TaskRequest request,
        @PathVariable Long projectId,
        @PathVariable Long taskId) {
        return ResponseEntity.ok(taskService.update(request, projectId, taskId));
    }

    @DeleteMapping("/projects/{projectId}/tasks/{taskId}")
    public ResponseEntity<Void> delete(@PathVariable Long taskId, Long projectId) {
        taskService.removeByProjectId(taskId, projectId);
        return ResponseEntity.noContent().build();
    }

}
