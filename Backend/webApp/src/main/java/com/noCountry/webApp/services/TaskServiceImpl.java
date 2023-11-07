package com.noCountry.webApp.services;

import com.noCountry.webApp.dto.request.TaskRequest;
import com.noCountry.webApp.dto.response.TaskResponse;
import com.noCountry.webApp.entities.Task;
import com.noCountry.webApp.exceptions.NotFoundException;
import com.noCountry.webApp.repositories.ProjectRepository;
import com.noCountry.webApp.repositories.TaskRepository;
import com.noCountry.webApp.util.Status;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@AllArgsConstructor
@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;

    @Transactional(readOnly = true)
    @Override
    public List<TaskResponse> taskByProjectId(Long projectId) {
        var projectFromDB = projectRepository.findById(projectId)
            .orElseThrow(() -> new NotFoundException("projects", "id", projectId));
        return projectFromDB.getTasks().stream()
            .map(this::taskToTaskResponse)
            .toList();
    }

    @Transactional
    @Override
    public TaskResponse save(TaskRequest request, Long projectId) {
        var project = projectRepository.findById(projectId)
            .orElseThrow(() -> new NotFoundException("projects", "id", projectId));
        var taskToPersist = taskRequestToTask(request);
        taskToPersist.setCreationDate(LocalDate.now());
        taskToPersist.setFinishDate(LocalDate.now());
        taskToPersist.setStatus(Status.IN_PROGRESS);
        taskToPersist.setWorkHour(LocalDateTime.now());
        taskToPersist.setProject(project);

        var taskPersisted = taskRepository.save(taskToPersist);
        log.info("Task saved with id: {}", taskPersisted.getId());
        return this.taskToTaskResponse(taskPersisted);
    }

    @Transactional
    @Override
    public TaskResponse update(TaskRequest request, Long projectId, Long taskId) {
        var project = projectRepository.findById(projectId)
            .orElseThrow(() -> new NotFoundException("projects", "id", projectId));
        var taskToUpdate = taskRepository.findById(taskId)
            .orElseThrow(() -> new NotFoundException("tasks", "id", taskId));

        taskToUpdate.setProject(project);
        taskToUpdate.setName(request.getName());
        taskToUpdate.setDescription(request.getDescription());
        taskToUpdate.setComment(request.getComment());
        taskToUpdate.setPriority(request.getPriority());

        var taskUpdated = this.taskRepository.save(taskToUpdate);
        log.info("Task updated with id {}", taskUpdated.getId());
        return this.taskToTaskResponse(taskToUpdate);
    }

    @Transactional
    @Override
    public void removeByProjectId(Long taskId, Long projectId) {
        var project = projectRepository.findById(projectId)
            .orElseThrow(() -> new NotFoundException("projects", "id", projectId));
        List<Task> tasks = project.getTasks();
        tasks.removeIf(task -> Objects.equals(task.getId(), taskId));
        projectRepository.save(project);
    }

    // Mapper
    private TaskResponse taskToTaskResponse(Task task) {
        var response = new TaskResponse();
        BeanUtils.copyProperties(task, response);
        return response;
    }

    private Task taskRequestToTask(TaskRequest request) {
        var response = new Task();
        BeanUtils.copyProperties(request, response);
        return response;
    }

}
