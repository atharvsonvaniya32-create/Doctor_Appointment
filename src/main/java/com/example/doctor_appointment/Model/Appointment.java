package com.example.doctor_appointment.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter 
@Getter 
@Table(name = "appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    private String phone;

    private String doctor;

    private String date;

    private String appointmentType;

    private String time;

    @Column(length = 1000)
    private String message;

    private String status;


    public Appointment() {
        this.status = "PENDING";
    }


    public Appointment(String name,
                       String email,
                       String phone,
                       String doctor,
                       String date,
                       String appointmentType,
                       String time,
                       String message) {

        this.name = name;
        this.email = email;
        this.phone = phone;
        this.doctor = doctor;
        this.date = date;
        this.appointmentType = appointmentType;
        this.time = time;
        this.message = message;
        this.status = "PENDING";
    }
}