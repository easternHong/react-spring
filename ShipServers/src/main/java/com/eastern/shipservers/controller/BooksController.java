package com.eastern.shipservers.controller;


import com.eastern.shipservers.bean.Books;
import com.eastern.shipservers.exception.BooksNotFoundException;
import com.eastern.shipservers.service.IBookService;
import com.eastern.shipservers.version.ApiVersion;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/{v}/books")
public class BooksController {

    @Autowired
    public IBookService bookService;

    @ApiVersion("1.2")
    @GetMapping("/")
    public ResponseEntity<String> index() {
        return ResponseEntity.ok("Hello, Books Center!");
    }

    @ExceptionHandler({BooksNotFoundException.class})
    @GetMapping(value = "/find/all")
    public ResponseEntity<List<Books>> findBookAll() {
        List<Books> book = bookService.findAll();
        return ResponseEntity.ok(book);
    }

    @ExceptionHandler({BooksNotFoundException.class})
    @GetMapping(value = "/find/page/{page}")
    public ResponseEntity<Page<Books>> getPage(@PathVariable int page) {
        Page<Books> book = bookService.findPage(new Books(), PageRequest.of(page, 10));
        return ResponseEntity.ok(book);
    }

    @ExceptionHandler({BooksNotFoundException.class})
    @GetMapping(value = "/find/id/{id}")
    public ResponseEntity<List<Books>> findBookById(@PathVariable int id) {
        List<Books> book = bookService.findAll().stream().filter(books -> books.getId() == id).toList();
        return ResponseEntity.ok(book);
    }

    @ExceptionHandler({BooksNotFoundException.class})
    @GetMapping(value = "/find/title/{title}")
    public ResponseEntity<List<Books>> findBookByTitle(@PathVariable String title) {
        List<Books> book = bookService.findAll().stream().filter(books -> books.getTitle().contains(title)).toList();
        return ResponseEntity.ok(book);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> createBook(@Valid @RequestBody Books book, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<ObjectError> errors = bindingResult.getAllErrors();
            errors.forEach(p -> {
                FieldError fieldError = (FieldError) p;
                System.out.println(fieldError.getField());
//                log.error("Invalid Parameter : object - {},field - {},errorMessage - {}", fieldError.getObjectName(), fieldError.getField(), fieldError.getDefaultMessage());
            });
            return ResponseEntity.badRequest().body("invalid parameter");
        }
        System.out.println(book);
        try {
            bookService.save(book);
            return ResponseEntity.ok("success");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("failed:" + e.getMessage());
        }
    }

    @PostMapping("/post")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> testPostBook(@RequestBody String book) {
        System.out.println(book);
        return ResponseEntity.ok("success");
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable int id) {
        bookService.findById(id)
                .orElseThrow(new BooksNotFoundException());
        bookService.deleteById(id);
        return ResponseEntity.ok("success");
    }
}
