package com.example.Velog_server.controller;

import com.example.Velog_server.dto.ArticleForm;
import com.example.Velog_server.entity.Article;
import com.example.Velog_server.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ArticleController {
    @Autowired // 스프링부트가 미리 생성해놓은 객체를 가져다가 자동으로 연결한다.
    private ArticleRepository articleRepository;
    @GetMapping("/articles/new")
    public String newArticleForm(){
        return "articles/new";
    }

    @PostMapping("articles/create")
    public String createArticle(ArticleForm form){ // DTO로 데이터 받아온다.
        System.out.println(form.toString());
        // 1. DTO를 변환! Entity!
        Article article = form.toEntity();
        System.out.println(article.toString());

        // 2. Repository에게 Entity를 DB안에 저장하게 함.
        Article saved = articleRepository.save(article); // 위에서 만든 article 데이터를 save 하게 한다.
        System.out.println(saved.toString());

        return "";
    }
}
