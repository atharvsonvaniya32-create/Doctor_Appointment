package com.example.doctor_appointment.Repository;

import com.example.doctor_appointment.Model.Appointment;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findByStatus(String status);

    List<Appointment> findByDoctor(String doctor);

    List<Appointment> findByEmail(String email);
}