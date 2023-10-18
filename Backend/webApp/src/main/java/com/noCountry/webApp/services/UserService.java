package com.noCountry.webApp.services;

import com.noCountry.webApp.dto.UserRequest;
import com.noCountry.webApp.entities.User;
import java.util.List;
import java.util.Optional;

public interface UserService {

    List<User> findAll();

    Optional<User> findById(Long id);

    User save(UserRequest request);

    Optional<User> update(UserRequest request, Long id);

    void remove(Long id);

}
