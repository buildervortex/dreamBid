import React from "react";
import { XCircle, ArrowLeft, RefreshCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

// private readonly string cancleUrl = "http://localhost:5189/api/v1/bids/payment/Failure";

const PaymentFailed = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
I        <div className="flex justify-center">
          <XCircle className="w-16 h-16 text-red-500" />
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mt-6">
          Payment Failed
        </h1>
        <p className="text-center text-gray-600 mt-2">
          We couldn't process your payment. Please try again.
        </p>

        <div className="mt-8 bg-red-50 border border-red-100 rounded-lg p-4">
          <h3 className="text-sm font-medium text-red-800">
            Possible reasons:
          </h3>
          <ul className="mt-2 text-sm text-red-700 list-disc list-inside space-y-1">
            <li>Insufficient funds</li>
            <li>Invalid card details</li>
            <li>Transaction declined by bank</li>
            <li>Network connectivity issues</li>
          </ul>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Attempted Amount</span>
            <span className="font-medium text-gray-800">$24,500.00</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Error Code</span>
            <span className="font-medium text-gray-800">
              ERR_PAYMENT_DECLINED
            </span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Payment Method</span>
            <span className="font-medium text-gray-800">PayPal</span>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <button className="w-full bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
            <RefreshCcw className="w-5 h-5" />
            Try Again
          </button>

          <button
            className="w-full bg-white text-gray-700 py-3 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-5 h-5" />
            Return to Checkout
          </button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">Need help? </p>
        <div className="mt-2 space-x-4">
          <button className="text-red-500 hover:underline">
            Contact Support
          </button>
          <span className="text-gray-400">|</span>
          <button className="text-red-500 hover:underline">FAQs</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
