"use client";
// This is the sidebar which in my-account PAGE.

export default function SidebarMyAccount({ activeSection, onSectionChange }) {

    const accountItems = [
        ["profile", "My Profile"],
        ["billing", "Billing Information"],
    ];

    const orderItems = [
        ["returns", "My Returns"],
        ["cancellations", "My Cancellations"],
        ["wishlist", "My Wishlist"],
    ];

    return (
        <>
        <aside className="w-screen shrink-0 border-r border-gray-200 p-6 md:w-1/3 lg:w-1/4">
            <div className="text-sm text-gray-500 mb-4">Home / My Account</div>
            <h2 className="text-lg font-semibold mb-4">Manage My Account</h2>
            <div className="space-y-2">
            {accountItems.map(([value, label]) => (
                <button
                    key={value}
                    type="button"
                    onClick={() => onSectionChange(value)}
                    className={`block cursor-pointer w-full rounded p-2 text-left ${activeSection === value ? "text-red-500" : "hover:bg-gray-100"}`}
                >
                    {label}
                </button>
            ))}
            </div>

            <h2 className="text-lg font-semibold mt-6 mb-4">My Orders</h2>
            <div className="space-y-2">
            {orderItems.map(([value, label]) => (
                <button
                    key={value}
                    type="button"
                    onClick={() => onSectionChange(value)}
                    className={`cursor-pointer block w-full rounded p-2 text-left ${activeSection === value ? "text-red-500" : "hover:bg-gray-100"}`}
                >
                    {label}
                </button>
            ))}
            </div>
        </aside>
        </>
    )
}