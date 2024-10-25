import TestResults from "./components/display";
import { TestMain } from "./Main";
import Test from "./utils/testUtils";
import { useState } from "react";

const TestPage = () => {
  const [results, setResults] = useState({
    passed: [],
    failed: [],
  });
  const [buttonState, disableButton] = useState(false);

  const success = (content) => {
    addPass(results, content, setResults);
  };
  const failed = (content) => addFail(results, content, setResults);

  const TestApi = async () => {
    let x = { passed: [], failed: [] };
    setResults(x);
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

function addPass(testResult, content, setState) {
  let passOb = { id: Math.random(), name: content };
  let resultObject = { ...testResult };
  resultObject.passed.push(passOb);
  setState(resultObject);
}

function addFail(testResult, content, setState) {
  let failOb = { id: Math.random(), name: content };
  let resultObject = { ...testResult };
  resultObject.failed.push(failOb);
  setState(resultObject);
}
export default TestPage;
