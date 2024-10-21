import { testDeleteAccount } from "./viewModels/TestAccountViewModel";
import { testRegisterAccount } from "./viewModels/TestAuthViewModel";

const TestPage = () => {
  const TestApi = async () => {
    console.log("Start test on register Account")
    await testRegisterAccount();
    console.log("\nStart test on delete account")
    await testDeleteAccount();
    console.log("\n\n");
  };

  return (
    <button
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
      onClick={TestApi}
    >
      RUN TEST
    </button>
  );
};

export default TestPage;
