package com.example.doctor_appointment.Controller;

import com.example.doctor_appointment.Model.Appointment;
import com.example.doctor_appointment.Model.Registration;
import com.example.doctor_appointment.Service.AppointmentService;
import com.example.doctor_appointment.Service.RegistrationService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/admin")
public class AdminController {

    private final RegistrationService registrationService;
    private final AppointmentService appointmentService;

    public AdminController(
            RegistrationService registrationService,
            AppointmentService appointmentService) {

        this.registrationService = registrationService;
        this.appointmentService = appointmentService;
    }

    // ==============================
    // ADMIN DASHBOARD
    // ==============================

    @GetMapping
    public String dashboard(Model model) {

        List<Registration> patients =
                registrationService.getAllRegistrations();

        List<Appointment> appointments =
                appointmentService.getAllAppointments();

        long pending = appointments.stream()
                .filter(a -> "PENDING".equalsIgnoreCase(a.getStatus()))
                .count();

        long confirmed = appointments.stream()
                .filter(a -> "CONFIRMED".equalsIgnoreCase(a.getStatus()))
                .count();

        long cancelled = appointments.stream()
                .filter(a -> "CANCELLED".equalsIgnoreCase(a.getStatus()))
                .count();

        model.addAttribute("patients", patients);
        model.addAttribute("appointments", appointments);

        model.addAttribute("totalPatients", patients.size());
        model.addAttribute("totalAppointments", appointments.size());
        model.addAttribute("pendingAppointments", pending);
        model.addAttribute("confirmedAppointments", confirmed);
        model.addAttribute("cancelledAppointments", cancelled);

        return "admin";
    }


    // ==============================
    // CONFIRM APPOINTMENT
    // ==============================

    @PostMapping("/appointment/{id}/confirm")
    public String confirmAppointment(@PathVariable Long id) {

        Appointment appointment =
                appointmentService.getAppointmentById(id);

        if (appointment != null) {
            appointment.setStatus("CONFIRMED");
            appointmentService.updateAppointment(appointment);
        }

        return "redirect:/admin";
    }


    // ==============================
    // CANCEL APPOINTMENT
    // ==============================

    @PostMapping("/appointment/{id}/cancel")
    public String cancelAppointment(@PathVariable Long id) {

        Appointment appointment =
                appointmentService.getAppointmentById(id);

        if (appointment != null) {
            appointment.setStatus("CANCELLED");
            appointmentService.updateAppointment(appointment);
        }

        return "redirect:/admin";
    }


    // ==============================
    // DELETE APPOINTMENT
    // ==============================

    @PostMapping("/appointment/{id}/delete")
    public String deleteAppointment(@PathVariable Long id) {

        appointmentService.deleteAppointment(id);

        return "redirect:/admin";
    }


    // ==============================
    // DELETE PATIENT
    // ==============================

    @PostMapping("/patient/{id}/delete")
    public String deletePatient(@PathVariable Long id) {

        registrationService.deleteRegistration(id);

        return "redirect:/admin";
    }
}