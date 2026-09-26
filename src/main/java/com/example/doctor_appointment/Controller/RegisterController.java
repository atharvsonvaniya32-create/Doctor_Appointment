package com.example.doctor_appointment.Controller;

import com.example.doctor_appointment.Model.Registration;
import com.example.doctor_appointment.Service.RegistrationService;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class RegisterController {

    private final RegistrationService registrationService;


    public RegisterController(
            RegistrationService registrationService) {

        this.registrationService = registrationService;
    }


    /* ================================
       REGISTRATION PAGE
    ================================= */

    @GetMapping("/register")
    public String registerPage() {

        return "register";
    }


    /* ================================
       SAVE REGISTRATION
    ================================= */

    @PostMapping("/register")
    public String registerUser(
            @ModelAttribute Registration registration) {

        registrationService.saveRegistration(registration);

        return "redirect:/";
    }

}