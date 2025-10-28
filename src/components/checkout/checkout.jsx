import { FaTv } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcPaypal} from "react-icons/fa6";

export default function CheckoutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
      {/* Billing Details */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">First Name*</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Company Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Street Address*</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Town/City*</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number*</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address*</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" className="accent-red-500" />
            <label className="text-sm text-gray-600">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div>
        <div className="space-y-5 border border-gray-200 rounded-lg p-6">

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 mb-10">
              <FaTv className="text-red-500 text-xl" />
              <span className="font-bold text-xl">LCD Monitor</span>
            </div>
            <div className="flex items-center gap-3 mb-10">
                <span className="font-bold text-xl">$650</span>
            </div>
          </div>

          <hr />

          <div className="flex justify-between text-gray-700">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>$1750</span>
          </div>

          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" />
              <div className="w-full flex justify-between">
                <span className="flex items-center gap-2">
                  Bank
                </span>
                <div className="flex">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-8 w-8" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="MasterCard" className="h-8 w-8" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8 w-8 " />
                </div>
              </div>
            </label>

            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" defaultChecked />
              <span className="flex items-center gap-2">
                Cash on Delivery
              </span>
            </label>
          </div>

          <div className="flex gap-2 mt-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
              Apply Coupon
            </button>
          </div>

          <button className="w-full mt-4 bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
