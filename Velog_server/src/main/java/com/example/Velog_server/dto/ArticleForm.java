package com.example.Velog_server.dto;

import com.example.Velog_server.entity.Article;
import jakarta.persistence.Column;

import java.util.Date;

public class ArticleForm {
    private String title;
    private String content;

    public ArticleForm(String title, String content) {
        this.title = title;
        this.content = content;
    }

    @Override
    public String toString() {
        return "ArticleForm{" +
                "title='" + title + '\'' +
                ", content='" + content + '\'' +
                '}';
    }

    public Article toEntity() {
        return new Article(null, title, content, 0, 0, null, null);
    }
}
