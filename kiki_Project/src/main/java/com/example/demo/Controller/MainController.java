package com.example.demo.Controller;

import com.example.demo.Dto.DriverInfoResponse;
import com.example.demo.Service.RouteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class MainController {
    private final RouteService routeService;

    public MainController(RouteService routeService) {
        this.routeService = routeService;
    }

    @GetMapping("/main")
    public ResponseEntity<DriverInfoResponse> getMainPage(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(routeService.getDriverInfo(token));
    }
}
