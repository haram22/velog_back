package com.example.Velog_server.dto;

import com.example.Velog_server.entity.Article;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.ToString;

import java.util.Date;

@AllArgsConstructor
@ToString
public class ArticleForm {
    private String title;
    private String content;

    public Article toEntity() {
        return new Article(null, title, content, 0, 0);
    }
}
