package com.noCountry.webApp.services;

import com.noCountry.webApp.entities.Project;
import com.noCountry.webApp.repositories.ProjectRepository;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository repository = null;

    @Override
    public List<Project> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Project> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Project save(Project project) {
        return repository.save(project);
    }

    @Override
    public Optional<Project> update(Project project, Long id) {
        return Optional.empty();
    }

    @Override
    public void remove(Long id) {
        repository.deleteById(id);
    }
}
