package com.eastern.shipservers.dao;

import com.eastern.shipservers.bean.Books;
import org.springframework.stereotype.Repository;

@Repository
//@NoRepositoryBean
public interface IBooksDao extends IBaseDao<Books, Long> {
}
