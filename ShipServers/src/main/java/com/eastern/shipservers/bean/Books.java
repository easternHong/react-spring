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
@Table(name = "books")
public class Books implements BaseEntity {

    @Getter
    @jakarta.persistence.Id
    @Setter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    private String title;
    private String batchno;
    private double price;
    private int noofproduct;


    public void orElseThrow(Throwable throwable) {

    }

    @Override
    public String toString() {
        return "Books{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", batchno='" + batchno + '\'' +
                ", price=" + price +
                ", noofproduct=" + noofproduct +
                '}';
    }

}
