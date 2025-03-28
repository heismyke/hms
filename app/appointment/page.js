
import AppointmentForm from "./components/AppointmentForm";

const Appointment = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Form Container */}
      <AppointmentForm />
    </div>
  );
};

export default Appointment;
