import TestResults from "./components/display";
import { TestMain } from "./Main";
import Test from "./utils/testUtils";
import { useState } from "react";

const TestPage = () => {
  const [results, setResults] = useState({
    passed: [],
    failed: [],
  });

  const success = (content) => {
    addPass(results, content, setResults);
  };
  const failed = (content) => addFail(results, content, setResults);

  const TestApi = async () => {
    let x = { passed: [], failed: [] };
    setResults(x);
    await TestMain(success, failed);
  };

  return (
    <>
      <TestResults runTests={TestApi} results={results}></TestResults>
    </>
  );
};

function addPass(testResult, content, setState) {
  let passOb = { id: Test.getRandomNumber(0, 10000), name: content };
  let resultObject = { ...testResult };
  resultObject.passed.push(passOb);
  setState(resultObject);
}

function addFail(testResult, content, setState) {
  let failOb = { id: Test.getRandomNumber(0, 10000), name: content };
  let resultObject = { ...testResult };
  resultObject.failed.push(failOb);
  setState(resultObject);
}
export default TestPage;
