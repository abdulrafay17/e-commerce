"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage({ user: serverUser }) {
  const router = useRouter();
  const [user, setUser] = useState(serverUser);

  const [profileData, setProfileData] = useState({
    userId: serverUser.user_id,
    firstname: serverUser.first_name || "",
    lastname: serverUser.last_name || "",
    email: serverUser.email || "",
    address: serverUser.address || "",
    newpassword: "",
    confirmnewpassword: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  }

  async function updateUserInfo() {
    try {
      const response = await axios.patch("/api/profile/patch", profileData);
      console.log("✅ Update response:", response.data);
      router.refresh();
    } catch (error) {
      console.log("❌ Profile Updating error:", error);
    }
  }

  return (
    <div className="flex flex-col sm:flex-row min-h-screen w-screen bg-white">
      {/* left sidebar */}
      <aside className="w-screen md:w-1/2 p-6 border-r border-gray-200">
        <div className="text-sm text-gray-500 mb-4">Home / My Account</div>
        <h2 className="text-lg font-semibold mb-4">Manage My Account</h2>
        <div className="space-y-2">
          <div className="text-red-500 p-2 rounded cursor-pointer">
            My Profile
          </div>
          <div className="p-2 rounded cursor-pointer hover:bg-gray-100">
            Address Book
          </div>
          <div className="p-2 rounded cursor-pointer hover:bg-gray-100">
            My Payment Options
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">My Orders</h2>
        <div className="space-y-2">
          <div className="p-2 rounded cursor-pointer hover:bg-gray-100">
            My Returns
          </div>
          <div className="p-2 rounded cursor-pointer hover:bg-gray-100">
            My Cancellations
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold mt-6 mb-4">My Wishlist</h2>
        </div>
      </aside>

      {/* main content */}
      <main className="w-full !h-auto flex-col md:w-3/4 p-6">
        <div className="text-red-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl mb-4 font-semibold">
          Welcome! {`${user?.first_name} ${user?.last_name || ""}`}
        </div>

        <div className="bg-red-100/60 w-full p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-red-600 mb-6">
            Edit Your Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* first name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 mb-1 font-semibold"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstname"
                onChange={handleChange}
                type="text"
                className="w-full p-2 text-gray-500 rounded bg-gray-200/90"
                value={profileData.firstname}
              />
            </div>

            {/* last name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 mb-1 font-semibold"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastname"
                onChange={handleChange}
                type="text"
                className="w-full p-2 text-gray-500 rounded bg-gray-200/90"
                value={profileData.lastname}
              />
            </div>

            {/* email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 mb-1 font-semibold"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                readOnly
                type="email"
                className="w-full p-2 text-gray-500 rounded bg-gray-200/90"
                value={profileData.email}
              />
            </div>

            {/* address */}
            <div>
              <label
                htmlFor="address"
                className="block text-gray-700 mb-1 font-semibold"
              >
                Address
              </label>
              <input
                id="address"
                name="address"
                onChange={handleChange}
                type="text"
                className="w-full p-2 text-gray-500 rounded bg-gray-200/90"
                value={profileData.address}
              />
            </div>

            {/* current password */}
            <div>
              <label
                htmlFor="currentPassword"
                className="block text-gray-700 mb-1 font-semibold"
              >
                Current Password
              </label>
              <input
                id="currentPassword"
                type="password"
                value="*********"
                readOnly
                className="w-full p-2 text-gray-500 rounded bg-gray-200/90"
              />
            </div>

            {/* new password */}
            <div>
              <label
                htmlFor="newPassword"
                className="block text-gray-700 mb-1 font-semibold"
              >
                New Password
              </label>
              <input
                id="newPassword"
                name="newpassword"
                onChange={handleChange}
                type="password"
                className="w-full p-2 text-gray-500 rounded bg-gray-200/90"
                value={profileData.newpassword}
              />
            </div>

            {/* confirm password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 mb-1 font-semibold"
              >
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                name="confirmnewpassword"
                onChange={handleChange}
                type="password"
                className="w-full p-2 text-gray-500 rounded bg-gray-200/90"
                value={profileData.confirmnewpassword}
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-4">
            <button className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400 transition">
              Cancel
            </button>
            <button
              onClick={updateUserInfo}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
            >
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
