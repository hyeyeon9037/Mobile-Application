package com.example.demo.Service;

import com.example.demo.Dto.DriverInfoResponse;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RouteService {
    private final RestTemplate restTemplate;

    public RouteService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public DriverInfoResponse getDriverInfo(String token) {
        String url = "http://168.126.147.134:18080/route/driver";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", token);

        HttpEntity<Void> request = new HttpEntity<>(headers);
        ResponseEntity<DriverInfoResponse> response =
                restTemplate.exchange(url, HttpMethod.GET, request, DriverInfoResponse.class);

        return response.getBody();
    }
}
