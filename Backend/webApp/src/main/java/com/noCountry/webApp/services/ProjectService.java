package com.noCountry.webApp.services;

import com.noCountry.webApp.entities.Project;
import java.util.List;
import java.util.Optional;

public interface ProjectService {

    List<Project> findAll();

    Optional<Project> findById(Long id);

    Project save(Project project);

    Optional<Project> update(Project project, Long id);

    void remove(Long id);
}
