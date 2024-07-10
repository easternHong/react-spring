package com.eastern.shipservers.service;

import com.eastern.shipservers.bean.Books;
import com.eastern.shipservers.dao.IBaseDao;
import com.eastern.shipservers.dao.IBooksDao;
import com.eastern.shipservers.jpa.BaseDoServiceImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class BooksServiceImpl extends BaseDoServiceImpl<Books, Long> implements IBookService {

    /**
     * userDao.
     */
//    @Autowired
    private final IBooksDao booksDao;

    /**
     * init.
     *
     * @param booksDao user dao
     */
    public BooksServiceImpl(final IBooksDao booksDao) {
        this.booksDao = booksDao;
    }

    @Override
    public IBaseDao<Books, Long> getBaseDao() {
        return booksDao;
    }

    @Override
    public Books findById(int id) {
        return null;
    }

    @Override
    public void deleteById(int id) {

    }

    @Override
    public Page<Books> findPage(Books queryBean, PageRequest pageRequest) {
        return null;
    }
}
