package com.example.demo.Service;

import com.example.demo.Dto.DispatchResponse;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class DispatchService {
    private final RestTemplate restTemplate;

    public DispatchService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public DispatchResponse getDispatch(String date, String token) {
        String url = "http://168.126.147.134:18080/dispatch/driver/" + date;

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", token);

        HttpEntity<Void> request = new HttpEntity<>(headers);
        ResponseEntity<DispatchResponse> response =
                restTemplate.exchange(url, HttpMethod.GET, request, DispatchResponse.class);

        return response.getBody();
    }
}
