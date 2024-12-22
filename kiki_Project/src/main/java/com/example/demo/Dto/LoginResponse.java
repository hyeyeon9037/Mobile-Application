package com.example.demo.Dto;

import lombok.Data;

@Data
public class LoginResponse {
    private String token;
    private String name;
    private String role;
}
