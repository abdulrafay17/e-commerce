"use client"

import React, { useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Modal from '../modal/modal';
import { useSignUp } from '@/context/SignUpContext';

const SignupPage = () => {
  const router = useRouter();

  const { data, setData, conditions, setConditions, showModal, setShowModal } = useSignUp();

  async function handleSubmit(e) {
    e.preventDefault();

    if (data.password.length < 6) {
      alert('PASSWORD LENGTH IS TOO SHORT')
      return;
    }

    if (data.name.length < 3) {
      alert('NAME LENGTH IS TOO SHORT')
      return;
    }

    try {
      const result = await axios.post('/api/auth/sign', data, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      setConditions(prev=> ({...prev, success: result.data.success}));
      setConditions(prev=> ({...prev, messages: result.data.message}));
      setData({
        name: '',
        email: '',
        password: ''
      })

      if (conditions.success || !conditions.success) {
        
        setTimeout(()=> {
          setShowModal(true)
          setTimeout(()=> {
            setShowModal(false);
            result.data.success && router.push('/');
          }, 2500)
        },0)
      }

    } catch (error) {
      console.error("Signup error:", error);
    }
  }


  function handleChange(e) {
    const {name, value} = e.target;
    setData(prev=> ({...prev, [name]: value}));
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {showModal && <Modal conditions={conditions} />}
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-lg overflow-hidden rounded-lg">
        
        {/* Left Image */}
        <div className="md:w-1/2 w-full bg-blue-200 flex items-center justify-center">
          <img
            src="/images/loginpic.png"
            alt="Signup Visual"
            className="object-cover w-full h-64 md:h-full"
          />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 w-full bg-white p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Create an account</h2>
          <p className="text-gray-600 mb-6">Enter your details below</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={data.name}
                placeholder="Name"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="sr-only">Email or Phone Number</label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
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
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Create Account
              </button>
            </div>
            
            <div>
              <button
                type="button"
                className="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <FaGoogle className="mr-2" /> Sign up with Google
              </button>
            </div>
          </form>
          
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <Link href="/login" className="text-red-500 hover:underline" >Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
