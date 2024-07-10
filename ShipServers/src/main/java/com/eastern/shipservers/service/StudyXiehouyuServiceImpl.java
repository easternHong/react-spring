package com.eastern.shipservers.service;

import com.eastern.shipservers.bean.Xiehouyu;
import com.eastern.shipservers.dao.IBaseDao;
import com.eastern.shipservers.dao.IStudyXiehouyuDao;
import com.eastern.shipservers.jpa.BaseDoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class StudyXiehouyuServiceImpl extends BaseDoServiceImpl<Xiehouyu, Long> implements IStudyXiehouyuService {

    @Autowired
    private IStudyXiehouyuDao booksDao;

    @Override
    public IBaseDao<Xiehouyu, Long> getBaseDao() {
        return booksDao;
    }

    @Override
    public Xiehouyu random() {
        long count = booksDao.count();
        if (count == 0) return null;
        return booksDao.findById(new Random().nextLong(count)).get();
    }

    @Override
    public Page<Xiehouyu> findPage(Xiehouyu queryBean, PageRequest pageRequest) {
        return null;
    }
}
