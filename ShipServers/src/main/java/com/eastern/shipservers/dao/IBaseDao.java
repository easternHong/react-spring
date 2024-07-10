package com.eastern.shipservers.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.io.Serializable;

@NoRepositoryBean
public interface IBaseDao<T extends BaseEntity, I extends Serializable> extends JpaRepository<T, I> {
}