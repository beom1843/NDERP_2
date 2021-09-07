package org.nderp2.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig { 
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				//.apis(RequestHandlerSelectors.basePackage("org.eday.controller")) // 현재 RequestMapping으로 할당된 모든 URL 리스트를 추출
				.apis(RequestHandlerSelectors.any())
				//.paths(PathSelectors.ant("/api/**")) // PathSelectors.any() 를 할경우 모든 경로가 다 사용된다. RestController가 아닌 것까지 사용된다.
				.paths(PathSelectors.any())
				.build()
				.useDefaultResponseMessages(false);
	}
	
}