package com.eastern.shipservers.service;

import com.eastern.shipservers.bean.Weather;

public interface IWeatherService {
    Weather getWeather(String cityId);
}
