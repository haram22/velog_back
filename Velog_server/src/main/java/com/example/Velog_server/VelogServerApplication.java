package com.example.Velog_server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
// JPA Auditing(감시, 감사)을 위한 어노테이션. createdDate, modifiedDate처럼 DB에 데이터가 저장되거나 수정될 때 언제, 누가 했는지를 자동으로 관리
@EnableJpaAuditing
public class VelogServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(VelogServerApplication.class, args);
	}

}
