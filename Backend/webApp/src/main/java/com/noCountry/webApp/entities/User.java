package com.noCountry.webApp.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.noCountry.webApp.util.AccountStatus;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String userName;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false, unique = true)
    private String email;
    private String token;       
    @Column(columnDefinition = "boolean default false")
    private boolean confirmed; 

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate registrationDate;
    private String imagePerfil;
    private String phone;

    @Enumerated(EnumType.STRING)
    private AccountStatus accountStatus;

    @JsonIgnoreProperties({"user", "hibernateLazyInitializer", "handler"})
    @OneToMany(
        fetch = FetchType.LAZY,
        cascade = CascadeType.ALL,
        orphanRemoval = true,
        mappedBy = "user"
    )
    private List<Project> projects;


}
