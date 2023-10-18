package com.noCountry.webApp.services;

import com.noCountry.webApp.dto.ProjectRequest;
import com.noCountry.webApp.entities.Project;
import java.util.List;
import java.util.Optional;

public interface ProjectService {

    List<Project> findAll();

    Optional<Project> findById(Long id);

    Project save(ProjectRequest request, Long userId);

    Optional<Project> update(ProjectRequest request, Long projectId, Long userId);

    void remove(Long id);
}
