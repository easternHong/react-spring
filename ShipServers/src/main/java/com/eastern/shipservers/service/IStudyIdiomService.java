package com.eastern.shipservers.service;

import com.eastern.shipservers.bean.Idioms;
import com.eastern.shipservers.jpa.IBaseService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IStudyIdiomService extends IBaseService<Idioms, Long> {


    Idioms random();


    Page<Idioms> findPage(Idioms queryBean, PageRequest pageRequest);
}
