package com.eastern.shipservers.bean;

import com.eastern.shipservers.dao.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import javax.persistence.Table;

@Getter
@Setter
@ToString
@Entity
@Table(name = "idioms")
public class Idioms implements BaseEntity {
    @Getter
    @jakarta.persistence.Id
    @Setter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    private String derivation;
    private String example;
    private String explanation;
    private String pinyin;
    private String word;
    private String abbreviation;
}
