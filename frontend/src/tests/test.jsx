import TestResults from "./components/display";
import { TestMain } from "./Main";
import { useState } from "react";

const TestPage = () => {
  const [results, setResults] = useState({
    passed: [],
    failed: [],
  });
  const [buttonState, disableButton] = useState(false);

  const success = (content) => {
    let passOb = { id: Math.random(), name: content };
    setResults((prevResults) => ({
      ...prevResults,
      passed: [...prevResults.passed, passOb],
    }));
  };

  const failed = (content) => {
    let failOb = { id: Math.random(), name: content };
    setResults((prevResults) => ({
      ...prevResults,
      failed: [...prevResults.failed, failOb],
    }));
  };

  const TestApi = async () => {
    setResults({ passed: [], failed: [] });
    disableButton(true);
    await TestMain(success, failed, disableButton);
  };

  return (
    <>
      <TestResults
        runTests={TestApi}
        results={results}
        buttonState={buttonState}
      ></TestResults>
    </>
  );
};
export default TestPage;
