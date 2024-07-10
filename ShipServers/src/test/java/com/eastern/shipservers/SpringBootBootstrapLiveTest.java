package com.eastern.shipservers;

import com.eastern.shipservers.bean.Books;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import java.util.List;

import static org.apache.commons.lang3.RandomStringUtils.randomAlphabetic;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class SpringBootBootstrapLiveTest {
    private static final String API_ROOT
            = "http://localhost:8081/api/books";

    private Books createRandomBooks() {
        Books books = new Books();
        books.setTitle(randomAlphabetic(10));
        books.setTitle(randomAlphabetic(15));
        return books;
    }

    private String createBooksAsUri(Books Books) {
        Response response = RestAssured.given()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .body(Books)
                .post(API_ROOT);
        return API_ROOT + "/" + response.jsonPath().get("id");
    }

    @Test
    public void whenGetAllBooks_thenOK() {
        Response response = RestAssured.get(API_ROOT);
        assertEquals(HttpStatus.OK.value(), response.getStatusCode());
    }

    @Test
    public void whenGetBooksByTitle_thenOK() {
        Books book = createRandomBooks();
        book.setTitle("xxx");
        createBooksAsUri(book);
        Response response = RestAssured.get(
                API_ROOT + "/find/title/" + book.getTitle());
        assertEquals(HttpStatus.OK.value(), response.getStatusCode());
        assertTrue(!response.as(List.class).isEmpty());
    }

    @Test
    public void whenFindAllBooks_thenOK() {
        Response response = RestAssured.get(API_ROOT + "/find/all");
        assertEquals(HttpStatus.OK.value(), response.getStatusCode());
        assertTrue(!response.as(List.class).isEmpty());
    }
}
