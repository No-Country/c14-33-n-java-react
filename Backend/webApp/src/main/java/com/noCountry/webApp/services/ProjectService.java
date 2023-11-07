package com.noCountry.webApp.services;

import com.noCountry.webApp.dto.request.ProjectRequest;
import com.noCountry.webApp.dto.response.ProjectResponse;
import java.util.List;

public interface ProjectService {

    List<ProjectResponse> projectByUserId(Long userId);

    ProjectResponse save(ProjectRequest request, Long userId);

    ProjectResponse update(ProjectRequest request, Long userId, Long projectId);

    void removeByUserId(Long userId, Long projectId);
}
