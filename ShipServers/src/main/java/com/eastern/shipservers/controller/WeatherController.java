package com.eastern.shipservers.controller;


import com.eastern.shipservers.bean.Weather;
import com.eastern.shipservers.service.IWeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/weather")
public class WeatherController {

    @Autowired
    IWeatherService weatherService;

    @GetMapping("/details/{cityId}")
    public Weather getWeather(@PathVariable String cityId) {
        return weatherService.getWeather(cityId);
    }
}
