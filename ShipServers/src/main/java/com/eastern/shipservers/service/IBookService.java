package com.eastern.shipservers.service;

import com.eastern.shipservers.bean.Books;
import com.eastern.shipservers.jpa.IBaseService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public interface IBookService extends IBaseService<Books, Long> {
    List<Books> findAll();

    Books findById(int id);

    void deleteById(int id);

    Page<Books> findPage(Books queryBean, PageRequest pageRequest);
}
