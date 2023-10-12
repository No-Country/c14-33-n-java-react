package com.noCountry.webApp.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDate;

@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String correo;
    private String descripcion;
    private LocalDate fechaCreacion;
    private LocalDate fechaVencimiento;
    private String prioridad;
    private String estado;

    //private User creador_por;

}
