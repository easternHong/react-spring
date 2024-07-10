package com.eastern.shipservers.service;

import com.eastern.shipservers.bean.Weather;
import org.springframework.stereotype.Service;

@Service
public class WeatherService implements IWeatherService {
    @Override
    public Weather getWeather(String cityId) {
        Weather weather = new Weather();
        return weather.test();
    }
}
