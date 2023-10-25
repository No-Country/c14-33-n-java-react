package com.noCountry.webApp.dto.response;

import com.noCountry.webApp.util.Priority;
import com.noCountry.webApp.util.Status;
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
public class ProjectResponse implements Serializable {

    private Long id;
    private String name;
    private String description;
    private LocalDate creationDate;
    private LocalDate expirationDate;
    private String comment;
    private Priority priority;
    private Status status;

}
