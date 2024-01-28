package com.example.Velog_server.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Entity // DB가 해당 객체를 인식 가능 !
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 자동으로 빈 생성자를 처리해줌?

public class Article {
    @Id // 대표값을 지정한다. (주민번호처럼)
    @GeneratedValue // 1, 2, 3 .. 이런식으로 자동 생성해주는 어노테이션이다.
    private Long id; //primary key
    @Column
    private String title;
    @Column
    private String content;

    // entity를 위한 생성자를 만들어준다.
    public Article(Long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    @Override
    public String toString() {
        return "Article{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
