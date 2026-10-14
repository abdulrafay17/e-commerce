"use client";

import { useState } from "react";

export default function BillingInformation({ user }) {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    firstName: user?.first_name || "",
    companyName: "",
    streetAddress: user?.address || "",
    apartment: "",
    city: "",
    phoneNumber: "",
    email: user?.email || "",
  });

  function handleChange(event) {
    setSaved(false);
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <>
      <h1 className="mb-2 text-3xl font-semibold text-red-500">Billing Information</h1>
      <p className="mb-6 text-gray-500">Keep your checkout details ready for your next order.</p>
      <form onSubmit={handleSubmit} className="rounded-lg bg-red-100/60 p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            ["firstName", "First Name", "text", true],
            ["companyName", "Company Name", "text", false],
            ["streetAddress", "Street Address", "text", true],
            ["apartment", "Apartment, floor, etc.", "text", false],
            ["city", "Town / City", "text", true],
            ["phoneNumber", "Phone Number", "tel", true],
            ["email", "Email Address", "email", true],
          ].map(([name, label, type, required]) => (
            <label key={name} className="block font-semibold text-gray-700">
              {label}{required ? "*" : ""}
              <input
                name={name}
                type={type}
                required={required}
                value={form[name]}
                onChange={handleChange}
                className="mt-1 w-full rounded bg-white p-2 font-normal"
              />
            </label>
          ))}
        </div>
        <button type="submit" className="mt-6 rounded bg-red-500 px-5 py-2 text-white hover:bg-red-600">
          Save Billing Information
        </button>
        {saved && <p className="mt-3 text-sm text-green-700">Billing information saved for this session.</p>}
      </form>
      </>
  ); 
}