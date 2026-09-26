package com.example.doctor_appointment.Service;

import com.example.doctor_appointment.Model.Registration;
import com.example.doctor_appointment.Repository.RegistrationRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationService {

    private final RegistrationRepository registrationRepository;

    public RegistrationService(RegistrationRepository registrationRepository) {
        this.registrationRepository = registrationRepository;
    }

    public Registration saveRegistration(Registration registration) {
        return registrationRepository.save(registration);
    }

    public List<Registration> getAllRegistrations() {
        return registrationRepository.findAll();
    }

    public Registration getRegistrationById(Long id) {
        return registrationRepository.findById(id).orElse(null);
    }

    public void deleteRegistration(Long id) {
        registrationRepository.deleteById(id);
    }

    public boolean emailExists(String email) {
        return registrationRepository.existsByEmail(email);
    }
}