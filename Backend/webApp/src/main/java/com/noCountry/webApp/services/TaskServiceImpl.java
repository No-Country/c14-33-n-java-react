package com.noCountry.webApp.services;

import com.noCountry.webApp.dto.TaskRequest;
import com.noCountry.webApp.entities.Task;
import com.noCountry.webApp.repositories.ProjectRepository;
import com.noCountry.webApp.repositories.TaskRepository;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@AllArgsConstructor
@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;

    @Transactional(readOnly = true)
    @Override
    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<Task> findById(Long id) {
        return taskRepository.findById(id);
    }

    @Transactional
    @Override
    public Task save(TaskRequest request, Long projectId) {
        var project = projectRepository.findById(projectId);
        if (project.isPresent()) {
            var task = taskRequestToTask(request);
            task.setProject(project.get());
            return taskRepository.save(task);
        }
        return null;
    }

    @Transactional
    @Override
    public Optional<Task> update(TaskRequest request, Long taskId, Long projectId) {
        Optional<Task> searchedTask = taskRepository.findById(taskId);
        if (searchedTask.isPresent()) {
            var project = projectRepository.findById(projectId).get();
            Task taskDB = searchedTask.get();
            taskDB.setProject(project);
            taskDB.setName(request.getName());
            taskDB.setDescription(request.getDescription());
            taskDB.setName(request.getName());
            taskDB.setComment(request.getComment());
            return Optional.of(taskRepository.save(taskDB));
        }
        return Optional.empty();
    }

    @Transactional
    @Override
    public void remove(Long id) {
        taskRepository.deleteById(id);
    }

    // Mapper
    private Task taskRequestToTask(TaskRequest request) {
        var task = new Task();
        BeanUtils.copyProperties(request, task);
        return task;
    }
}
