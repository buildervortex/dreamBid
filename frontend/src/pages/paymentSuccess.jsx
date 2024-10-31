import React, { useEffect, useState } from "react";
import { CheckCircle, ArrowLeft, Download } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { object } from "joi";
import API from "../services/api";
import { toast } from "react-toastify";

// private readonly string returnUrl = "http://localhost:5189/api/v1/bids/payment/Success";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const paymentId = queryParams.get("paymentId");
  const payerId = queryParams.get("payerId");
  const token = queryParams.get("token");

  const query = {
    paymentId,
    payerId,
    token,
  };

  const [payment, setPayment] = useState("");

  useEffect(() => {
    API.get("/v1/bids/payment/Success", {
      params: query,
    }).then((response) => {
      if (response?.error !== undefined) toast.error(response.error);
      else {
        setPayment(response);
        toast.success(response);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-center">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mt-6">
          Payment Successful!
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Your payment has been processed successfully
        </p>

        <div className="mt-8 space-y-4">
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Transaction ID</span>
            <span className="font-medium text-gray-800">TXN123456789</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Amount Paid</span>
            <span className="font-medium text-gray-800">$24,500.00</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-100">
            <span className="text-gray-600">Payment Method</span>
            <span className="font-medium text-gray-800">PayPal</span>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <button className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download Receipt
          </button>

          <button
            className="w-full bg-white text-gray-700 py-3 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-5 h-5" />
            Return to Dashboard
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p>
          Having trouble?{" "}
          <button className="text-green-500 hover:underline">
            Contact Support
          </button>
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
