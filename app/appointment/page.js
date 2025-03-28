"use client";
import { useState } from "react";

const Appointment = () => {
  const [step, setStep] = useState(1);

  // Move to next step
  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  // Go back to previous step
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Video Background */}
      <video 
      autoPlay 
  loop 
  muted 
  playsInline 
  className="absolute inset-0 w-full h-full object-cover z-0"
>
  <source 
    src="https://res.cloudinary.com/dg2ujxltx/video/upload/v1/goza2cvw1cyxqyz3fwef.mp4" 
    type="video/mp4" 
  />
  Your browser does not support the video tag.
</video>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Form Container */}
      <div className="relative z-20 w-[90%] md:w-[30%]  backdrop-blur-lg rounded-xl p-6  border-white/20">
        {/* Progress Indicators */}
        <div className="flex justify-between items-center mb-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`w-[20%] h-2 rounded-full ${
                step > index ? "bg-[#706D54]" : "bg-gray-300"
              } transition-all duration-300`}
            ></div>
          ))}
        </div>

        {/* Form Sections */}
        <form className="space-y-4">
          {step === 1 && (
            <div className="flex flex-col gap-3">
              <label className="block text-sm font-medium text-white">
                First Name
              </label>
              <input
                type="text"
                className="w-full border bg-white/80 rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
              />

              <label className="block text-sm font-medium text-white">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border bg-white/80 rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your last name"
              />

              <label className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                className="w-full border bg-white/80 rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
              />
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-3">
              <label className="block text-sm font-medium text-white">
                Mobile
              </label>
              <input
                type="tel"
                className="w-full border bg-white/80 rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />

              <label className="block text-sm font-medium text-white">
                NIC
              </label>
              <input
                type="text"
                className="w-full border bg-white/80 rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your NIC"
              />

              <label className="block text-sm font-medium text-white">
                Address
              </label>
              <input
                type="text"
                className="w-full border bg-white/80 rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your address"
              />
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-4">
              {/* Gender */}
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-white">
                  Gender
                </label>
                <select
                  defaultValue=""
                  className="w-full border-none bg-white/80 rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-white">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full border-none bg-white/80 rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Pediatrics */}
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-white">
                  Pediatrics
                </label>
                <select
                  defaultValue=""
                  className="w-full border-none bg-white/80 rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select pediatrics
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Appointment Date */}
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-white">
                  Appointment Date
                </label>
                <input
                  type="date"
                  className="w-full border-none bg-white/80 rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Select Doctor */}
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-white">
                  Select Doctor
                </label>
                <select
                  defaultValue=""
                  className="w-full border-none bg-white/80 rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select doctor
                  </option>
                  <option value="dr_smith">Dr. Smith</option>
                  <option value="dr_jones">Dr. Jones</option>
                  <option value="dr_williams">Dr. Williams</option>
                </select>
              </div>
            </div>
          )}
        </form>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={prevStep}
              type="button"
              className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={nextStep}
              type="button"
              className="bg-[#706D54] text-white px-4 py-2 rounded-lg ml-auto hover:bg-[#A08963] transition-all"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-[#706D54] text-white px-4 py-2 rounded-lg ml-auto hover:bg-[#A08963] transition-all"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
