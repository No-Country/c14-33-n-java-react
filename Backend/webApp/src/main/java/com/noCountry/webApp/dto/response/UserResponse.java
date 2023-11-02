package com.noCountry.webApp.dto.response;

import com.noCountry.webApp.util.AccountStatus;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponse implements Serializable {
    private Long id;
    private String user;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String imagePerfil;
    private String phone;
    private LocalDate registrationDate;
    private AccountStatus accountStatus;
    private String msg;
}
