package com.eastern.shipservers.service;

import com.eastern.shipservers.bean.Xiehouyu;
import com.eastern.shipservers.jpa.IBaseService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IStudyXiehouyuService extends IBaseService<Xiehouyu, Long> {


    Xiehouyu random();


    Page<Xiehouyu> findPage(Xiehouyu queryBean, PageRequest pageRequest);
}
