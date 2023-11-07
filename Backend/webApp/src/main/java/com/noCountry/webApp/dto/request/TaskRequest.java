package com.noCountry.webApp.dto.request;

import com.noCountry.webApp.util.Priority;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
public class TaskRequest implements Serializable {

    private String name;
    private String description;
    private String comment;

    @Enumerated(EnumType.STRING)
    private Priority priority;

}
