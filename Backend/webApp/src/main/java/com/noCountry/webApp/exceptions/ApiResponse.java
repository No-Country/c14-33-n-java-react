package com.noCountry.webApp.exceptions;

import java.util.Date;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ApiResponse {

    private Date time = new Date();
    private String message;
    private String url;

    public ApiResponse(String message, String url) {
        this.message = message;
        this.url = url.replace("uri=", "");
    }
}
