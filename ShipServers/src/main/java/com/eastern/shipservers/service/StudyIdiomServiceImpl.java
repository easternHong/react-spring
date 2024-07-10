package com.eastern.shipservers.service;

import com.eastern.shipservers.bean.Idioms;
import com.eastern.shipservers.dao.IBaseDao;
import com.eastern.shipservers.dao.IStudyIdiomDao;
import com.eastern.shipservers.jpa.BaseDoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class StudyIdiomServiceImpl extends BaseDoServiceImpl<Idioms, Long> implements IStudyIdiomService {

    @Autowired
    private IStudyIdiomDao booksDao;

    @Override
    public IBaseDao<Idioms, Long> getBaseDao() {
        return booksDao;
    }

    @Override
    public Idioms random() {
        long count = booksDao.count();
        if (count == 0) return null;
        return booksDao.findById(new Random().nextLong(count)).get();
    }

    @Override
    public Page<Idioms> findPage(Idioms queryBean, PageRequest pageRequest) {
        return null;
    }
}
