package com.example.demo.Service;

import com.example.demo.Dto.LoginRequest;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class AuthService {
    private final RestTemplate restTemplate;

    public AuthService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String login(LoginRequest loginRequest) {
        String url = "http://168.126.147.134:18080/auth/login";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<LoginRequest> request = new HttpEntity<>(loginRequest, headers);

        try {
            ResponseEntity<Map> response = restTemplate.postForEntity(url, request, Map.class);
            if (response.getStatusCode().is2xxSuccessful()) {
                return response.getBody().get("token").toString();
            }
        } catch (HttpClientErrorException e) {
            System.err.println("Error Response: " + e.getResponseBodyAsString());
            throw e;
        }
        return null;
    }

    public String getProtectedResource(String token) {
        String url = "http://168.126.147.134:18080/protected/resource";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + token);

        HttpEntity<Void> request = new HttpEntity<>(headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
            return response.getBody(); // 성공적으로 받은 데이터 반환
        } catch (HttpClientErrorException e) {
            System.err.println("Error Response: " + e.getResponseBodyAsString());
            throw e;
        }
    }
}
