import React from "react";

const TestResults = ({ results, runTests, buttonState }) => {
  let totalTests = results.passed.length + results.failed.length;
  let passedTests = results.passed.length;
  let failedTests = results.failed.length;
  return (
    <div className="max-w-2xl  mx-auto p-6 bg-gray-800 rounded-lg shadow-md text-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-100">Test Results</h1>
        <button
          onClick={runTests}
          disabled={buttonState}
          className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ${
            buttonState ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Run Tests
        </button>
      </div>

      {results && (
        <div className="space-y-6 min-h-96 max-h-96 overflow-y-scroll">
          <div>
            <h2 className="text-xl font-semibold text-green-400 mb-2">
              Passed Tests
            </h2>
            <ul className="space-y-2">
              {results.passed.map((test) => (
                <li key={test.id} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>{test.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400 mb-2">
              Failed Tests
            </h2>
            <ul className="space-y-2">
              {results.failed.map((test) => (
                <li key={test.id} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>{test.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {!results && (
        <p className="text-gray-400 text-center">
          Click "Run Tests" to see the results.
        </p>
      )}
      <div className="bg-slate-900 p-4 flex justify-between">
        <span className="text-lg text-slate-400">
          Total Tests: {totalTests}
        </span>
        <span className="text-lg text-green-400">
          Success Tests: {passedTests}
        </span>
        <span className="text-lg text-red-400">
          Failed Tests: {failedTests}
        </span>
        <span className="text-lg text-red-400">
          Ratio: {(passedTests / totalTests) * 100}%
        </span>
      </div>
    </div>
  );
};

export default TestResults;
