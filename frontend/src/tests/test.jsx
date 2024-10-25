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
    console.log(`Before set the state ${results}`);
    console.log(results);
    setResults({ passed: [], failed: [] });
    console.log(`After set te state ${results}`);
    console.log(results);
    disableButton(true);
    await TestMain(success, failed, disableButton);
    console.log(`After run all the tests`);
    console.log(results);
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