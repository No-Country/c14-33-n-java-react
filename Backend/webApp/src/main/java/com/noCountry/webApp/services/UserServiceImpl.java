package com.noCountry.webApp.services;

import com.noCountry.webApp.dto.request.UserRequest;
import com.noCountry.webApp.dto.response.UserResponse;
import com.noCountry.webApp.entities.User;
import com.noCountry.webApp.exceptions.NotFoundException;
import com.noCountry.webApp.repositories.ProjectRepository;
import com.noCountry.webApp.repositories.UserRepository;
import com.noCountry.webApp.util.AccountStatus;
import java.time.LocalDate;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;

    @Transactional(readOnly = true)
    @Override
    public List<UserResponse> findAll() {
        return userRepository.findAll()
            .stream()
            .map(this::userToUserResponse)
            .toList();
    }

    @Transactional(readOnly = true)
    @Override
    public UserResponse findById(Long id) {
        var userFromDB = userRepository.findById(id)
            .orElseThrow(() -> new NotFoundException("users", "id", id));
        return this.userToUserResponse(userFromDB);
    }

    @Transactional
    @Override
    public UserResponse save(UserRequest request) {
        var userToPersist = userRequestToUser(request);
        userToPersist.setRegistrationDate(LocalDate.now());
        userToPersist.setAccountStatus(AccountStatus.ACTIVE);

        var userPersisted = userRepository.save(userToPersist);
        log.info("User saved with id: {}", userPersisted.getId());
        return this.userToUserResponse(userPersisted);
    }

    @Transactional
    @Override
    public UserResponse update(UserRequest request, Long id) {
        var userToUpdate = userRepository.findById(id)
            .orElseThrow(() -> new NotFoundException("users", "id", id));
        userToUpdate.setFirstName(request.getFirstName());
        userToUpdate.setLastName(request.getLastName());
        userToUpdate.setEmail(request.getEmail());
        userToUpdate.setImagePerfil(request.getImagePerfil());
        userToUpdate.setPhone(request.getPhone());

        var userUpdated = this.userRepository.save(userToUpdate);
        log.info("User updated with id {}", userUpdated.getId());
        return this.userToUserResponse(userUpdated);
    }

    @Transactional
    @Override
    public void remove(Long id) {
        var userToDelete = userRepository.findById(id)
            .orElseThrow(() -> new NotFoundException("users", "id", id));
        log.info("User removed with id {}", userToDelete.getId());
        this.userRepository.deleteById(userToDelete.getId());
    }

    // Mapper
    private UserResponse userToUserResponse(User user) {
        var response = new UserResponse();
        BeanUtils.copyProperties(user, response);
        return response;
    }

    private User userRequestToUser(UserRequest request) {
        var response = new User();
        BeanUtils.copyProperties(request, response);
        return response;
    }
}
