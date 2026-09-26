package com.example.doctor_appointment.Controller;

import com.example.doctor_appointment.Model.Appointment;
import com.example.doctor_appointment.Service.AppointmentService;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class AppointmentController {

    private final AppointmentService appointmentService;


    public AppointmentController(
            AppointmentService appointmentService) {

        this.appointmentService = appointmentService;
    }

    @GetMapping("/appointment")
    public String appointmentPage() {

        return "appointment";
    }

    @PostMapping("/appointment")
    public String bookAppointment(
            @ModelAttribute Appointment appointment) {

        appointment.setStatus("PENDING");

        appointmentService.saveAppointment(appointment);

        return "redirect:/";
    }

}