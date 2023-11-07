package com.noCountry.webApp.services;

import com.noCountry.webApp.dto.request.UserRequest;
import com.noCountry.webApp.dto.response.UserResponse;
import java.util.List;

public interface UserService {

    List<UserResponse> findAll();

    UserResponse findById(Long id);

    UserResponse findByEmail(String email);

    UserResponse save(UserRequest request);

    UserResponse update(UserRequest request, Long id);

    void remove(Long id);

}
