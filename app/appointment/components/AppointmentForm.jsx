'use client'

import { useState } from 'react'

const formData = {
  step1: [
    {
      id: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'Enter your first name',
      validation: {
        required: true,
        minLength: 2,
        maxLength: 50,
      },
    },
    {
      id: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Enter your last name',
      validation: {
        required: true,
        minLength: 2,
        maxLength: 50,
      },
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email address',
      validation: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    },
  ],
  step2: [
    {
      id: 'mobile',
      label: 'Mobile',
      type: 'tel',
      placeholder: 'Enter your phone number',
      validation: {
        required: true,
        pattern: /^[0-9]{10}$/,
      },
    },
    {
      id: 'nic',
      label: 'NIC',
      type: 'text',
      placeholder: 'Enter your NIC',
      validation: {
        required: true,
      },
    },
    {
      id: 'address',
      label: 'Address',
      type: 'text',
      placeholder: 'Enter your address',
      validation: {
        required: true,
        minLength: 10,
      },
    },
  ],
  step3: [
    {
      id: 'gender',
      label: 'Gender',
      type: 'select',
      options: [
        { value: '', label: 'Select gender', disabled: true },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
      ],
      validation: {
        required: true,
      },
    },
    {
      id: 'dateOfBirth',
      label: 'Date of Birth',
      type: 'date',
      validation: {
        required: true,
      },
    },
    {
      id: 'pediatrics',
      label: 'Pediatrics',
      type: 'select',
      options: [
        { value: '', label: 'Select pediatrics', disabled: true },
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ],
      validation: {
        required: true,
      },
    },
    {
      id: 'appointmentDate',
      label: 'Appointment Date',
      type: 'date',
      validation: {
        required: true,
      },
    },
    {
      id: 'doctor',
      label: 'Select Doctor',
      type: 'select',
      options: [
        { value: '', label: 'Select doctor', disabled: true },
        { value: 'dr_smith', label: 'Dr. Smith' },
        { value: 'dr_jones', label: 'Dr. Jones' },
        { value: 'dr_williams', label: 'Dr. Williams' },
      ],
      validation: {
        required: true,
      },
    },
  ],
}

const AppointmentForm = () => {
  const [step, setStep] = useState(1)
  const [formValues, setFormValues] = useState({})

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleInputChange = (id, value) => {
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formValues)
  }

  const renderFields = (fields) => {
    return fields.map((field) => {
      if (field.type === 'select') {
        return (
          <div key={field.id} className="flex flex-col">
            <label className="block text-sm font-medium text-white">{field.label}</label>
            <select
              id={field.id}
              value={formValues[field.id] || ''}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              className="w-full border-none bg-white/80 rounded-lg p-3 text-[16px] focus:outline-none focus:ring-1 focus:ring-black"
            >
              {field.options.map((option) => (
                <option key={option.value} value={option.value} disabled={option.disabled}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )
      }

      return (
        <div key={field.id} className="flex flex-col">
          <label className="block text-sm font-medium text-white">{field.label}</label>
          <input
            type={field.type}
            id={field.id}
            placeholder={field.placeholder}
            value={formValues[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            className="w-full border bg-white/80 rounded-lg p-3 text-[16px] focus:outline-none focus:ring-0"
          />
        </div>
      )
    })
  }

  return (
    <div className="relative z-20 w-[90%] md:w-[30%] backdrop-blur-lg rounded-xl p-6 border-white/20">
      {/* Progress Indicators */}
      <div className="flex justify-between items-center mb-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`w-[20%] h-2 rounded-full ${
              step > index ? 'bg-[#706D54]' : 'bg-gray-300'
            } transition-all duration-300`}
          ></div>
        ))}
      </div>

      {/* Form Sections */}
      <form className="space-y-4">{renderFields(formData[`step${step}`])}</form>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="bg-zinc-900 text-white px-4 py-2 rounded"
          >
            Previous
          </button>
        )}
        {step < 3 ? (
          <button
            type="button"
            onClick={nextStep}
            className="bg-gray-300 text-[#706D54] px-4 py-2 rounded"
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  )
}
export default AppointmentForm
