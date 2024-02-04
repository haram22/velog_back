package com.example.velog_back.service;

import com.example.velog_back.domain.Article;
import com.example.velog_back.dto.ArticleRequestDto;
import com.example.velog_back.dto.ArticleResponseDto;
import com.example.velog_back.repository.ArticleRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository articleRepository;

    public void createArticle(ArticleRequestDto articleRequestDto) {
        Article article = new Article();

        article.setTitle(articleRequestDto.getTitle());
        article.setContent(articleRequestDto.getContent());

        articleRepository.save(article);
    }
    public List<ArticleResponseDto> getAllArticles() {
        // ArticleRepository를 사용하여 모든 Article을 조회
        List<Article> articles = articleRepository.findAll();

        // Article 객체를 ArticleResponseDto로 변환하여 리스트에 추가
        List<ArticleResponseDto> responseDtoList = new ArrayList<>();
        for (Article article : articles) {
            ArticleResponseDto responseDto = new ArticleResponseDto();
            // Article 객체의 필드 값을 responseDto에 설정
            responseDto.setId(article.getId());
            responseDto.setTitle(article.getTitle());
            responseDto.setContent(article.getContent());
            responseDto.setCommentCount(article.getCommentCount());
            responseDto.setViewCount(article.getViewCount());
            responseDto.setCreatedAt(String.valueOf(article.getCreatedAt()));
            responseDto.setUpdatedAt(String.valueOf(article.getModifiedAt()));
            responseDtoList.add(responseDto);
        }
        return responseDtoList;
    }

    public ArticleResponseDto getArticle(long id) {
        Article article = articleRepository.getReferenceById(id);
        ArticleResponseDto responseDto = new ArticleResponseDto();
        responseDto.setId(id);
        responseDto.setTitle(article.getTitle());
        responseDto.setContent(article.getContent());
        responseDto.setCommentCount(article.getCommentCount());
        responseDto.setViewCount(article.getViewCount());
        responseDto.setCreatedAt(String.valueOf(article.getCreatedAt()));
        responseDto.setUpdatedAt(String.valueOf(article.getModifiedAt()));
        return responseDto;
    }

    public void deleteArticle(long id) {
        articleRepository.deleteById(id);
    }



}
