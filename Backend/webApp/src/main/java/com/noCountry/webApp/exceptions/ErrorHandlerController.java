package com.noCountry.webApp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class ErrorHandlerController {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ApiResponse> handlerErrorHandlerApplication(
        NotFoundException exception,
        WebRequest webRequest) {
        ApiResponse response = new ApiResponse(exception.getMessage(),
            webRequest.getDescription(false));
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

}
