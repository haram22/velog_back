package com.example.velog_back.domain;

import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Getter
//  BaseTime class를 상속하는 JPA Entity 클래스들이 BaseTime class의 필드인 createdDate, modifiedDate를 인식하도록 함
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class) // 이벤트가 발생할 때마다 특정 로직을 실행시킬 수 있는 어노테이션
public class BaseTime {
    @CreatedDate // Entity가 생성되어 저장될 때 시간이 자동으로 저장
    private LocalDateTime createdAt;

    @LastModifiedDate // 조회한 Entity의 값을 변경할 때 시간이 자동으로 저장
    private LocalDateTime modifiedAt;
}
