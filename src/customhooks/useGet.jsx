import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const BASE_URL = "https://apiserver.intelligentsystems.com.bd/api/v1/";

const useGet = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!endpoint) return; // Exit if endpoint is not provided

      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        toast.error("Error fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]); // Track `endpoint` as a dependency

  return { data, isLoading, error };
};

export default useGet;
