package com.eastern.shipservers.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;


@Configuration
public class CustomWebMvcConfiguration extends WebMvcConfigurationSupport {
    @Override
    protected RequestMappingHandlerMapping createRequestMappingHandlerMapping() {
        return new ApiVersionRequestMappingHandlerMapping();
    }

//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                //是否发送Cookie
//                .allowCredentials(true)
//                //放行哪些原始域
//                .allowedOrigins("http://localhost")
////                .allowedOrigins(Collections.singletonList("*"))
////                .allowedOriginPatterns("*")
//                .allowedMethods(new String[]{"GET", "POST", "PUT", "DELETE"})
//                .allowedHeaders("*")
//                .exposedHeaders("*");
//    }
}
