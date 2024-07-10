package com.eastern.shipservers.exception;

public class BooksNotFoundException extends RuntimeException{
    public BooksNotFoundException() {
        super();
    }

    public BooksNotFoundException(String message) {
        super(message);
    }

    public BooksNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public BooksNotFoundException(Throwable cause) {
        super(cause);
    }
}
