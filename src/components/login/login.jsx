"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import Modal from "../modal/modal";
import { useAuth } from "@/context/LoginContext.js";
import { redirect } from "next/navigation";


const LoginPage = () => {
  const router = useRouter();
  const { inputs, setInputs, conditions, setConditions, showModal, setShowModal } = useAuth();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", inputs);

      setConditions({
        success: response.data.success,
        messages: response.data.message,
      });

      setInputs({ email: "", password: "" });

      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        if (response.data.success) {
          window.location.href = "/"
        };
      }, 2500);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {showModal && <Modal conditions={conditions} />}
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-lg overflow-hidden rounded-lg">
        
        {/* Left Image */}
        <div className="md:w-1/2 w-full bg-blue-200 flex items-center justify-center">
          <Image
            src="/images/loginpic.png"
            alt="Login Visual"
            width={600}
            height={500}
            className="object-cover w-full h-64 md:h-full"
          />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 w-full bg-white p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Log in to Exclusive</h2>
          <p className="text-gray-600 mb-6">Enter your details below</p>
          
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email or Phone</label>
              <input
                type="email"
                id="email"
                name='email'
                onChange={handleChange}
                value={inputs.email}
                placeholder="Email or Phone Number"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                type="password"
                id="password"
                value={inputs.password}
                name='password'
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
              <button
                type="submit"
                className="w-full md:w-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Log In
              </button>
              <a href="#" className="text-red-500 hover:underline">Forget Password?</a>
              
            </div>
            <p className="text-center text-gray-600 mt-4">
                 Dont have an Account Create one{' '}
                <Link href="/sign" className="text-red-500 hover:underline" >Sign Up</Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
