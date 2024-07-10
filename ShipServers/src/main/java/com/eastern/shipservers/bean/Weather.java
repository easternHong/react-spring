package com.eastern.shipservers.bean;

import com.eastern.shipservers.bean.weather.Value;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.ArrayList;

public class Weather {
    public String code;
    public String message;
    public String redirect;
    public ArrayList<Value> value;

    public Weather test() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.readValue(weathers, Weather.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return  null;
    }

    public static String weathers = """
            {
              "code": "200",
              "message": "",
              "redirect": "",
              "value": [
                {
                  "alarms": [],
                  "city": "南昌市",
                  "cityid": 1286,
                  "indexes": [
                    {
                      "abbreviation": "gm",
                      "alias": "",
                      "content": "感冒较易发生，干净整洁的环境和清新流通的空气都有利于降低感冒的几率，体质较弱的童鞋们要特别加强自我保护。",
                      "level": "较易发",
                      "name": "感冒指数"
                    },
                    {
                      "abbreviation": "xc",
                      "alias": "",
                      "content": "不宜洗车，未来24小时内有雨，如果在此期间洗车，雨水和路上的泥水可能会再次弄脏您的爱车。",
                      "level": "不宜",
                      "name": "洗车指数"
                    },
                    {
                      "abbreviation": "ct",
                      "alias": "",
                      "content": "潮湿闷热，衣物排汗透气，手帕擦汗环保时尚，不建议在露天场所逛街。",
                      "level": "短袖",
                      "name": "穿衣指数"
                    },
                    {
                      "abbreviation": "uv",
                      "alias": "",
                      "content": "辐射较弱，请涂擦SPF12-15、PA+护肤品。",
                      "level": "弱",
                      "name": "紫外线强度指数"
                    },
                    {
                      "abbreviation": "yd",
                      "alias": "",
                      "content": "今天有阵雨，较不适宜户外运动，建议室内运动。",
                      "level": "不适宜",
                      "name": "运动指数"
                    },
                    {
                      "abbreviation": "pp",
                      "alias": "",
                      "content": "",
                      "level": "暂无",
                      "name": "化妆指数"
                    }
                  ],
                  "pm25": {
                    "advice": "0",
                    "aqi": "26",
                    "citycount": 743,
                    "cityrank": 78,
                    "co": "0.6",
                    "color": "0",
                    "level": "0",
                    "no2": "6",
                    "o3": "67",
                    "pm10": "23",
                    "pm25": "18",
                    "quality": "优",
                    "so2": "5",
                    "timestamp": "",
                    "upDateTime": "2024-06-12 15:17:03"
                  },
                  "provinceName": "江西省",
                  "realtime": {
                    "img": "4",
                    "sD": "88",
                    "sendibleTemp": "33",
                    "temp": "28",
                    "time": "2024-06-12 15:10:08",
                    "wD": "东南风",
                    "wS": "1级",
                    "weather": "雷阵雨",
                    "ziwaixian": "N/A"
                  },
                  "weatherDetailsInfo": {
                    "publishTime": "2024-06-12 15:00:00",
                    "weather3HoursDetailsInfos": [
                      {
                        "endTime": "2024-06-12 19:00:00",
                        "highestTemperature": "29",
                        "img": "1",
                        "isRainFall": "",
                        "lowerestTemperature": "29",
                        "precipitation": "0",
                        "startTime": "2024-06-12 16:00:00",
                        "wd": "",
                        "weather": "多云",
                        "ws": ""
                      },
                      {
                        "endTime": "2024-06-12 22:00:00",
                        "highestTemperature": "28",
                        "img": "1",
                        "isRainFall": "",
                        "lowerestTemperature": "28",
                        "precipitation": "0",
                        "startTime": "2024-06-12 19:00:00",
                        "wd": "",
                        "weather": "多云",
                        "ws": ""
                      },
                      {
                        "endTime": "2024-06-13 01:00:00",
                        "highestTemperature": "27",
                        "img": "1",
                        "isRainFall": "",
                        "lowerestTemperature": "27",
                        "precipitation": "0",
                        "startTime": "2024-06-12 22:00:00",
                        "wd": "",
                        "weather": "多云",
                        "ws": ""
                      },
                      {
                        "endTime": "2024-06-13 04:00:00",
                        "highestTemperature": "26",
                        "img": "2",
                        "isRainFall": "",
                        "lowerestTemperature": "26",
                        "precipitation": "0",
                        "startTime": "2024-06-13 01:00:00",
                        "wd": "",
                        "weather": "阴",
                        "ws": ""
                      },
                      {
                        "endTime": "2024-06-13 07:00:00",
                        "highestTemperature": "25",
                        "img": "2",
                        "isRainFall": "",
                        "lowerestTemperature": "25",
                        "precipitation": "0",
                        "startTime": "2024-06-13 04:00:00",
                        "wd": "",
                        "weather": "阴",
                        "ws": ""
                      },
                      {
                        "endTime": "2024-06-13 10:00:00",
                        "highestTemperature": "26",
                        "img": "2",
                        "isRainFall": "",
                        "lowerestTemperature": "26",
                        "precipitation": "0",
                        "startTime": "2024-06-13 07:00:00",
                        "wd": "",
                        "weather": "阴",
                        "ws": ""
                      },
                      {
                        "endTime": "2024-06-13 13:00:00",
                        "highestTemperature": "28",
                        "img": "4",
                        "isRainFall": "",
                        "lowerestTemperature": "28",
                        "precipitation": "0",
                        "startTime": "2024-06-13 10:00:00",
                        "wd": "",
                        "weather": "雷阵雨",
                        "ws": ""
                      }
                    ]
                  },
                  "weathers": [
                    {
                      "aqi": "26",
                      "date": "2024-06-12",
                      "img": "4",
                      "sun_down_time": "19:15",
                      "sun_rise_time": "05:18",
                      "temp_day_c": "29",
                      "temp_day_f": "84.2",
                      "temp_night_c": "25",
                      "temp_night_f": "77.0",
                      "wd": "",
                      "weather": "雷阵雨",
                      "week": "星期三",
                      "ws": ""
                    },
                    {
                      "aqi": "50",
                      "date": "2024-06-13",
                      "img": "4",
                      "sun_down_time": "19:15",
                      "sun_rise_time": "05:18",
                      "temp_day_c": "30",
                      "temp_day_f": "86.0",
                      "temp_night_c": "25",
                      "temp_night_f": "77.0",
                      "wd": "",
                      "weather": "雷阵雨",
                      "week": "星期四",
                      "ws": ""
                    },
                    {
                      "aqi": "45",
                      "date": "2024-06-14",
                      "img": "8",
                      "sun_down_time": "19:15",
                      "sun_rise_time": "05:18",
                      "temp_day_c": "30",
                      "temp_day_f": "86.0",
                      "temp_night_c": "25",
                      "temp_night_f": "77.0",
                      "wd": "",
                      "weather": "中雨",
                      "week": "星期五",
                      "ws": ""
                    },
                    {
                      "aqi": "60",
                      "date": "2024-06-15",
                      "img": "1",
                      "sun_down_time": "19:15",
                      "sun_rise_time": "05:18",
                      "temp_day_c": "32",
                      "temp_day_f": "89.6",
                      "temp_night_c": "25",
                      "temp_night_f": "77.0",
                      "wd": "",
                      "weather": "多云",
                      "week": "星期六",
                      "ws": ""
                    },
                    {
                      "aqi": "60",
                      "date": "2024-06-16",
                      "img": "4",
                      "sun_down_time": "19:15",
                      "sun_rise_time": "05:18",
                      "temp_day_c": "31",
                      "temp_day_f": "87.8",
                      "temp_night_c": "24",
                      "temp_night_f": "75.2",
                      "wd": "",
                      "weather": "雷阵雨",
                      "week": "星期日",
                      "ws": ""
                    },
                    {
                      "aqi": "55",
                      "date": "2024-06-17",
                      "img": "4",
                      "sun_down_time": "19:15",
                      "sun_rise_time": "05:18",
                      "temp_day_c": "29",
                      "temp_day_f": "84.2",
                      "temp_night_c": "24",
                      "temp_night_f": "75.2",
                      "wd": "",
                      "weather": "雷阵雨",
                      "week": "星期一",
                      "ws": ""
                    },
                    {
                      "aqi": "24",
                      "date": "2024-06-11",
                      "img": "4",
                      "sun_down_time": "19:15",
                      "sun_rise_time": "05:18",
                      "temp_day_c": "29",
                      "temp_day_f": "84.2",
                      "temp_night_c": "24",
                      "temp_night_f": "75.2",
                      "wd": "",
                      "weather": "雷阵雨",
                      "week": "星期二",
                      "ws": ""
                    }
                  ]
                }
              ]
            }
            """;
}
