"use client";

import { useState } from "react";
import BillingInformation from "./BillingInformation";
import Cancellations from "./Cancellations";
import ProfilePage from "./profile";
import Returns from "./Returns";
import SidebarMyAccount from "./sidebarMyaccount";
import Wishlist from "./Wishlist";

export default function MyAccountShell({ user }) {
  const [activeSection, setActiveSection] = useState("profile");

  function renderActiveSection() {
    if (activeSection === "profile") {
      return <ProfilePage user={user} />;
    }

    if (activeSection === "billing") {
      return <BillingInformation user={user} />;
    }

    if (activeSection === "returns") {
      return <Returns />;
    }

    if (activeSection === "cancellations") {
      return <Cancellations />;
    }

    if (activeSection === "wishlist") {
      return <Wishlist />;
    }

    return <ProfilePage user={user} />;
  }

  return (
    <div className="flex min-h-screen w-screen flex-col bg-white sm:flex-row">
      <SidebarMyAccount
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <div className="min-w-0 flex-1">
        {renderActiveSection()}
      </div>
    </div>
  );
}