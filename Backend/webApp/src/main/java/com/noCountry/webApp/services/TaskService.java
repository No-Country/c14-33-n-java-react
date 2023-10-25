package com.noCountry.webApp.services;

import com.noCountry.webApp.dto.request.TaskRequest;
import com.noCountry.webApp.dto.response.TaskResponse;
import java.util.List;

public interface TaskService {

    List<TaskResponse> taskByProjectId(Long projectId);

    TaskResponse save(TaskRequest request, Long projectId);

    TaskResponse update(TaskRequest request, Long userId, Long projectId);

    void removeByProjectId(Long userId, Long projectId);

}
