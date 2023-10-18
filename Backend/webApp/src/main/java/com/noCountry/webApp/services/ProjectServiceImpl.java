package com.noCountry.webApp.services;

import com.noCountry.webApp.dto.ProjectRequest;
import com.noCountry.webApp.entities.Project;
import com.noCountry.webApp.repositories.ProjectRepository;
import com.noCountry.webApp.repositories.UserRepository;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    @Override
    public List<Project> findAll() {
        return projectRepository.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<Project> findById(Long id) {
        return projectRepository.findById(id);
    }

    @Transactional
    @Override
    public Project save(ProjectRequest request, Long userId) {
        var user = userRepository.findById(userId);
        if (user.isPresent()) {
            var project = projectRequestToProject(request);
            project.setUser(user.get());
            return projectRepository.save(project);
        }
        return null;
    }

    @Transactional
    @Override
    public Optional<Project> update(ProjectRequest request, Long projectId, Long userId) {
        Optional<Project> searchedProject = projectRepository.findById(projectId);
        if (searchedProject.isPresent()) {
            var user = userRepository.findById(userId).get();
            Project projectDB = searchedProject.get();
            projectDB.setUser(user);
            projectDB.setName(request.getName());
            projectDB.setComment(request.getComment());
            projectDB.setPriority(request.getPriority());
            projectDB.setStatus(request.getStatus());
            return Optional.of(projectRepository.save(projectDB));
        }
        return Optional.empty();
    }

    @Transactional
    @Override
    public void remove(Long id) {
        projectRepository.deleteById(id);
    }

    // Mapper
    private Project projectRequestToProject(ProjectRequest request) {
        var project = new Project();
        BeanUtils.copyProperties(request, project);
        return project;
    }
}
