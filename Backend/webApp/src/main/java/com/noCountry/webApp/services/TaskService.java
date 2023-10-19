package com.noCountry.webApp.services;

import com.noCountry.webApp.dto.TaskRequest;
import com.noCountry.webApp.entities.Task;
import java.util.List;
import java.util.Optional;

public interface TaskService {

    List<Task> findAll();

    Optional<Task> findById(Long id);

    Task save(TaskRequest request, Long projectId);

    Optional<Task> update(TaskRequest request, Long taskId, Long projectId);

    void remove(Long id);

}
