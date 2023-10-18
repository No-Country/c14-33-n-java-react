package com.noCountry.webApp.services;

import com.noCountry.webApp.dto.UserRequest;
import com.noCountry.webApp.entities.User;
import com.noCountry.webApp.repositories.UserRepository;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    @Transactional
    @Override
    public User save(UserRequest request) {
        return userRepository.save(userRequestToUser(request));
    }

    @Transactional
    @Override
    public Optional<User> update(UserRequest request, Long id) {
        Optional<User> searchedUser = userRepository.findById(id);
        if (searchedUser.isPresent()) {
            User userDB = searchedUser.get();
            userDB.setFirstName(request.getFirstName());
            userDB.setLastName(request.getLastName());
            userDB.setEmail(request.getEmail());
            userDB.setImagePerfil(request.getImagePerfil());
            userDB.setPhone(request.getPhone());
            return Optional.of(userRepository.save(userDB));
        }
        return Optional.empty();
    }

    @Transactional
    @Override
    public void remove(Long id) {
        userRepository.deleteById(id);
    }

    // Mapper
    private User userRequestToUser(UserRequest request) {
        var user = new User();
        BeanUtils.copyProperties(request, user);
        return user;
    }
}
