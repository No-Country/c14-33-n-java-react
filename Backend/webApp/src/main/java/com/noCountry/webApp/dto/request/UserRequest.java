package com.noCountry.webApp.dto.request;

import java.io.Serializable;
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
    private String imagePerfil;
    private String phone;


}
