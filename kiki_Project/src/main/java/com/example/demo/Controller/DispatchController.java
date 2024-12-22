package com.example.demo.Controller;

import com.example.demo.Dto.DispatchResponse;
import com.example.demo.Service.DispatchService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class DispatchController {
    private final DispatchService dispatchService;

    public DispatchController(DispatchService dispatchService) {
        this.dispatchService = dispatchService;
    }

    @GetMapping("/dispatch/{date}")
    public ResponseEntity<DispatchResponse> getDispatch(
            @RequestHeader("Authorization") String token,
            @PathVariable String date) {
        return ResponseEntity.ok(dispatchService.getDispatch(date, token));
    }
}
