package com.example.Velog_server.entity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity // DB가 해당 객체를 인식 가능 !
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 자동으로 빈 생성자를 처리해줌?
@Table(name = "article")
public class Article {
    @Id // 대표값을 지정한다. (주민번호처럼)
    @GeneratedValue // 1, 2, 3 .. 이런식으로 자동 생성해주는 어노테이션이다.
    private Long article_id; //primary key
    @Column
    private String title;
    @Column
    private String content;
    @Column
    private int like_count;
    @Column
    private int comment_count;
    @Column
    private Date reg_date;
    @Column
    private Date mod_date;

    // entity를 위한 생성자를 만들어준다.
    public Article(Long article_id, String title, String content, int like_count, int comment_count, Date reg_date, Date mod_date) {
        this.article_id = article_id;
        this.title = title;
        this.content = content;
        this.like_count = like_count;
        this.comment_count = comment_count;
        this.reg_date = reg_date;
        this.mod_date = mod_date;
    }

    @Override
    public String toString() {
        return "Article{" +
                "article_id=" + article_id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", like_count=" + like_count +
                ", comment_count=" + comment_count +
                ", reg_date=" + reg_date +
                ", mod_date=" + mod_date +
                '}';
    }
}
