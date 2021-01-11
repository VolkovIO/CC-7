package com.chemcool.school.controller;


import com.chemcool.school.domains.tasks.SingleSelectQuestion;
import com.chemcool.school.service.Serv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CC7Controller {

    @Autowired
    Serv rep;

    @GetMapping()
    public List<SingleSelectQuestion> allQuestionShow(){
        List<SingleSelectQuestion> list = rep.findAll();
        return list;
    }

    @PostMapping
    public ResponseEntity<SingleSelectQuestion> addQuestion(@RequestBody SingleSelectQuestion answer){
        rep.save(answer);
        return new ResponseEntity<SingleSelectQuestion>(answer, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteTask(@PathVariable String id){
        rep.deleteById(id);
        return new ResponseEntity("Removed user with id: " + id, HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public SingleSelectQuestion getTask(@PathVariable String id){
        return rep.findById(id).orElseThrow(() -> new RuntimeException("Не найден элемент " + id));
    }
}
