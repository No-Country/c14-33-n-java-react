package com.noCountry.webApp.services;

import com.noCountry.webApp.dto.request.ProjectRequest;
import com.noCountry.webApp.dto.response.ProjectResponse;
import com.noCountry.webApp.entities.Project;
import com.noCountry.webApp.exceptions.NotFoundException;
import com.noCountry.webApp.repositories.ProjectRepository;
import com.noCountry.webApp.repositories.UserRepository;
import com.noCountry.webApp.util.Status;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
@Slf4j
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;


    @Transactional(readOnly = true)
    @Override
    public List<ProjectResponse> projectByUserId(Long userId) {
        var userFromDB = userRepository.findById(userId)
            .orElseThrow(() -> new NotFoundException("users", "id", userId));
        return userFromDB.getProjects().stream()
            .map(this::projectToProjectResponse)
            .toList();
    }

    @Transactional
    @Override
    public ProjectResponse save(ProjectRequest request, Long userId) {
        var user = userRepository.findById(userId)
            .orElseThrow(() -> new NotFoundException("users", "id", userId));
        var projectToPersist = this.projectRequestToProject(request);
        projectToPersist.setCreationDate(LocalDate.now());
        projectToPersist.setStatus(Status.IN_PROGRESS);
        projectToPersist.setUser(user);

        var projectPersisted = projectRepository.save(projectToPersist);
        log.info("Project saved with id: {}", projectPersisted.getId());
        return this.projectToProjectResponse(projectPersisted);
    }

    @Transactional
    @Override
    public ProjectResponse update(ProjectRequest request, Long userId, Long projectId) {
        var user = userRepository.findById(userId)
            .orElseThrow(() -> new NotFoundException("users", "id", userId));
        var projectToUpdate = projectRepository.findById(projectId)
            .orElseThrow(() -> new NotFoundException("projects", "id", userId));

        projectToUpdate.setUser(user);
        projectToUpdate.setDescription(request.getDescription());
        projectToUpdate.setName(request.getName());
        projectToUpdate.setComment(request.getComment());
        projectToUpdate.setPriority(request.getPriority());

        var projectUpdated = this.projectRepository.save(projectToUpdate);
        log.info("Project updated with id {}", projectUpdated.getId());
        return this.projectToProjectResponse(projectUpdated);
    }

    @Transactional
    @Override
    public void removeByUserId(Long userId, Long projectId) {
        var user = userRepository.findById(userId)
            .orElseThrow(() -> new NotFoundException("users", "id", userId));
        List<Project> projects = user.getProjects();
        projects.removeIf(project -> Objects.equals(project.getId(), projectId));
        userRepository.save(user);
    }

    // Mapper
    private ProjectResponse projectToProjectResponse(Project project) {
        var response = new ProjectResponse();
        BeanUtils.copyProperties(project, response);
        return response;
    }

    private Project projectRequestToProject(ProjectRequest request) {
        var response = new Project();
        BeanUtils.copyProperties(request, response);
        return response;
    }
}
