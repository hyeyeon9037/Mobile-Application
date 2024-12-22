package com.example.demo.Dto;

import lombok.Data;

@Data
public class DispatchResponse {
    private String busNumber;
    private String actualStartTime;
    private String actualEndTime;
    private String driverName;
}
