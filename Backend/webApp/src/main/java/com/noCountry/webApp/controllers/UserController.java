package com.noCountry.webApp.controllers;

import com.noCountry.webApp.dto.UserRequest;
import com.noCountry.webApp.entities.User;
import com.noCountry.webApp.services.UserService;
import java.util.Optional;
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
public class UserController {

    private final UserService userService;

    @GetMapping("/users")
    public ResponseEntity<?> list() {
        return ResponseEntity.ok(userService.findAll());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> show(@PathVariable Long id) {
        Optional<User> user = userService.findById(id);
        if (user.isEmpty()) {
            //throw new UserNotFoundException("users", "id", id);
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    @PostMapping("/users")
    public ResponseEntity<?> create(@RequestBody UserRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(userService.save(request));
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<?> update(@RequestBody UserRequest request, @PathVariable Long id) {
        Optional<User> searchedUser = userService.findById(id);
        if (searchedUser.isEmpty()) {
            //throw new UserNotFoundException("users", "id", id);
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(userService.update(request, id));
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<User> user = userService.findById(id);
        if (user.isEmpty()) {
            //throw new UserNotFoundException("users", "id", id);
            return ResponseEntity.notFound().build();
        }
        userService.remove(id);
        return ResponseEntity.noContent().build();
    }

}
