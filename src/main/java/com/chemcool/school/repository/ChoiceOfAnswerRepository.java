package com.chemcool.school.repository;


import com.chemcool.school.domains.tasks.SingleSelectQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Пример аннотации, если мы хотим использовать CUSTOM spring-rest-starter
 * @RepositoryRestResource(collectionResourceRel = "users", path = "users")
 *
 */

public interface ChoiceOfAnswerRepository extends JpaRepository<SingleSelectQuestion, String> {
}
