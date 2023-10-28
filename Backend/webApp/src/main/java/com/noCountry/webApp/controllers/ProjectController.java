package com.noCountry.webApp.controllers;

import com.noCountry.webApp.dto.request.ProjectRequest;
import com.noCountry.webApp.dto.response.ProjectResponse;
import com.noCountry.webApp.services.ProjectService;
import java.util.List;
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

    @GetMapping("users/{userId}/projects")
    public ResponseEntity<List<ProjectResponse>> projectByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(this.service.projectByUserId(userId));
    }

    @PostMapping("/users/{userId}/projects")
    public ResponseEntity<ProjectResponse> create(@RequestBody ProjectRequest request,
        @PathVariable Long userId) {
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(this.service.save(request, userId));
    }

    @PutMapping("/users/{userId}/projects/{projectId}")
    public ResponseEntity<ProjectResponse> update(@RequestBody ProjectRequest request,
        @PathVariable Long userId,
        @PathVariable Long projectId) {
        return ResponseEntity.ok(this.service.update(request, userId, projectId));
    }

    @DeleteMapping("users/{userId}/projects/{projectId}")
    public ResponseEntity<Void> removeByUserId(@PathVariable Long userId, Long projectId) {
        this.service.removeByUserId(userId, projectId);
        return ResponseEntity.noContent().build();
    }

}
