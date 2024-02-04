package com.example.velog_back.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ArticleResponseDto {
    private Long id;
    private String title;
    private String content;
    private String createdAt;
    private String updatedAt;
    private int commentCount;
    private int viewCount;
}