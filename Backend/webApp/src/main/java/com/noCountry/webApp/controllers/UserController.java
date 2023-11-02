package com.noCountry.webApp.controllers;

import com.noCountry.webApp.entities.User;
import com.noCountry.webApp.repositories.UserRepository;
import com.noCountry.webApp.dto.request.UserRequest;
import com.noCountry.webApp.dto.response.UserResponse;
import com.noCountry.webApp.services.UserService;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api")
//@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;
    private UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<UserResponse>> list() {
        return ResponseEntity.ok(userService.findAll());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserResponse> show(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }

    @PostMapping("/")/* registro */
    public ResponseEntity<UserResponse> create(@RequestBody UserRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(request));
    }
    @PostMapping("/login")/* login */
    public ResponseEntity<UserResponse> authenticate(@RequestBody UserRequest request) {
        String email = request.getEmail();
        String password = request.getPassword();
        User user=userRepository.findByEmail(email);
        UserResponse response = new UserResponse();
        if (user != null && user.getPassword().equals(password)) {
            response.setMsg("Autorización realizada con exito!");
            return ResponseEntity.ok(response);
        }else{
            response.setMsg("Autorización Rechazada!");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<UserResponse> update(@RequestBody UserRequest request,
        @PathVariable Long id) {
        return ResponseEntity.ok(userService.update(request, id));
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.userService.remove(id);
        return ResponseEntity.noContent().build();
    }
    
}
