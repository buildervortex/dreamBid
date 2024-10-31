import { useCallback, useState } from "react";
import ErrorMessage from "../viewModels/ErrorViewModel";

const useLoading = (asyncFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = useCallback(
    async (...args) => {
      setLoading(true);
      setError(null);

      try {
        const result = await asyncFunction(...args);
        if (result instanceof ErrorMessage) setError(result.error);
        else setData(result);
        return result;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [asyncFunction]
  );
  return { loading, error, data, execute };
};

export default useLoading;
