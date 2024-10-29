import { useState, useEffect } from "react";

const BASE_URL = "https://apiserver.intelligentsystems.com.bd/api/v1/";

const useGetDetails = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(endpoint);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!endpoint) {
        console.error("Endpoint is not defined.");
        setError("No endpoint provided");
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const url = `${BASE_URL}${endpoint}`;
        console.log(`Fetching data from: ${url}`);

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        console.log("Fetched data:", result);

        setData({
          ...result,
          fileKey: Date.now(),
          imagePreview: `${BASE_URL}${result.banner}`,
        });
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useGetDetails;
