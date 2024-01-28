package com.example.Velog_server.repository;

import com.example.Velog_server.entity.Article;
import org.springframework.data.repository.CrudRepository;

// JPA에 있는 Repository를 활용해서 만든다.
// 이렇게 CrudRepository를 참조하면 여기서 제공하는 기능들을 정의 없이 사용할 수 있다.
public interface ArticleRepository  extends CrudRepository<Article, Long> { //이렇게 하면 Article을 crud하는 과정을 할 수 있다.
}
