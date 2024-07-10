package com.eastern.shipservers.jpa;


import com.eastern.shipservers.dao.BaseEntity;
import com.eastern.shipservers.dao.IBaseDao;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

@Slf4j
@Transactional
public abstract class BaseDoServiceImpl<T extends BaseEntity, I extends Serializable> implements IBaseService<T, I> {

    /**
     * @return IBaseDao
     */
    public abstract IBaseDao<T, I> getBaseDao();

    /**
     * findById.
     *
     * @param id id
     * @return T
     */
    @Override
    public T find(I id) {
        return getBaseDao().findById(id).orElse(null);
    }

    /**
     * @return List
     */
    @Override
    public List<T> findAll() {
//        try {
        return getBaseDao().findAll();
//        } catch (Exception e) {
//            return null;
//        }
    }

    /**
     * @param ids ids
     * @return List
     */
    @Override
    public List<T> findList(I[] ids) {
        List<I> idList = Arrays.asList(ids);
        return getBaseDao().findAllById(idList);
    }


    /**
     * @param pageable pageable
     * @return Page
     */
    @Override
    public Page<T> findAll(Pageable pageable) {
        return getBaseDao().findAll(pageable);
    }

    /**
     * count.
     *
     * @return long
     */
    @Override
    public long count() {
        return getBaseDao().count();
    }

    /**
     * exists.
     *
     * @param id id
     * @return boolean
     */
    @Override
    public boolean exists(I id) {
        return getBaseDao().findById(id).isPresent();
    }

    /**
     * save.
     *
     * @param entity entity
     */
    @Override
    public void save(T entity) {
        getBaseDao().save(entity);
    }

    /**
     * save.
     *
     * @param entities entities
     */
    @Override
    public void save(List<T> entities) {
        getBaseDao().saveAll(entities);
    }

    /**
     * update.
     *
     * @param entity entity
     * @return T
     */
    @Override
    public T update(T entity) {
        return getBaseDao().saveAndFlush(entity);
    }

    /**
     * delete.
     *
     * @param id id
     */
    @Override
    public void delete(I id) {
        getBaseDao().deleteById(id);
    }

    /**
     * delete by ids.
     *
     * @param ids ids
     */
    @Override
    public void deleteByIds(List<I> ids) {
        getBaseDao().deleteAllById(ids);
    }

    /**
     * delete all.
     */
    @Override
    public void deleteAll() {
        getBaseDao().deleteAllInBatch();
    }

    /**
     * delete.
     *
     * @param entities entities
     */
    @Override
    public void delete(T[] entities) {
        List<T> tList = Arrays.asList(entities);
        getBaseDao().deleteAll(tList);
    }

    /**
     * delete.
     *
     * @param entities entities
     */
    @Override
    public void delete(Iterable<T> entities) {
        getBaseDao().deleteAll(entities);
    }

    /**
     * delete.
     *
     * @param entity entity
     */
    @Override
    public void delete(T entity) {
        getBaseDao().delete(entity);
    }

    /**
     * @param ids ids
     * @return List
     */
    @Override
    public List<T> findList(Iterable<I> ids) {
        return getBaseDao().findAllById(ids);
    }


    /**
     * flush.
     */
    @Override
    public void flush() {
        getBaseDao().flush();
    }
}