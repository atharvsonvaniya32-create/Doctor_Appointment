package com.example.doctor_appointment.Repository;

import com.example.doctor_appointment.Model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RegistrationRepository
        extends JpaRepository<Registration, Long> {

    Optional<Registration> findByEmail(String email);

    boolean existsByEmail(String email);
}