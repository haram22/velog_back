package com.example.velog_back.domain;

import com.example.velog_back.dto.ArticleRequestDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Setter
@Getter
public class Article extends BaseTime{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long articleId;
    @Column(length = 30)
    private String title;
    @Column(columnDefinition = "text")
    private String content;
    @Column
    private int viewCount;
    @Column
    private int commentCount;

    public Long getId() {
        return articleId;
    }
}
