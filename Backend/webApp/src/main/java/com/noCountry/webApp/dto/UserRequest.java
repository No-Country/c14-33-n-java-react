package com.noCountry.webApp.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.noCountry.webApp.util.AccountStatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import java.io.Serializable;
import java.time.LocalDate;
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
public class UserRequest implements Serializable {

    private String firstName;
    private String lastName;
    private String email;
    private String userName;
    private String password;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate registrationDate;
    private String imagePerfil;
    private String phone;
    private String address;

    @Enumerated(EnumType.STRING)
    private AccountStatus accountStatus;

}
