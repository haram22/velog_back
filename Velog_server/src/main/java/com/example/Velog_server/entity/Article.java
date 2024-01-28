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
    private Long articleId; //primary key
    @Column
    private String title;
    @Column
    private String content;
    @Column
    private int likeCount;
    @Column
    private int commentCount;
    @Column
    private Date regDate;
    @Column
    private Date modDate;

    // entity를 위한 생성자를 만들어준다.
    public Article(Long ArticleId, String title, String content, int likeCount, int commentCount, Date regDate, Date modDate) {
        this.articleId = ArticleId;
        this.title = title;
        this.content = content;
        this.likeCount = likeCount;
        this.commentCount = commentCount;
        this.regDate = regDate;
        this.modDate = modDate;
    }

    @Override
    public String toString() {
        return "Article{" +
                "article_id=" + articleId +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", like_count=" + likeCount +
                ", comment_count=" + commentCount +
                ", reg_date=" + regDate +
                ", mod_date=" + modDate +
                '}';
    }
}
