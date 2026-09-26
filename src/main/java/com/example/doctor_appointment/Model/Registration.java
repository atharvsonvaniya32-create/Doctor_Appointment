package com.example.doctor_appointment.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter 
@Getter 
@NoArgsConstructor 
@AllArgsConstructor 
@Table(name = "registrations")
public class Registration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    private String phone;

    private String dateOfBirth;

    private String gender;

    @Column(length = 500)
    private String address;

    private String password;

}