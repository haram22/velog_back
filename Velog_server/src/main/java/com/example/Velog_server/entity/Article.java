package com.example.Velog_server.entity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.Date;

@Entity // DB가 해당 객체를 인식 가능 !
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 자동으로 빈 생성자를 처리해줌
@AllArgsConstructor
@ToString
@Table(name = "article")
public class Article extends BaseTime {
    @Id // 대표값을 지정한다. (주민번호처럼)
    @GeneratedValue // 1, 2, 3 .. 이런식으로 자동 생성해주는 어노테이션이다.
    private Long articleId; //primary key
    @Column
    private String title;
    @Column
    private String content;
    @Column
    private int likeCount;
    @Column
    private int commentCount;
}
