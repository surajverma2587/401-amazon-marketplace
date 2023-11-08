import { useEffect, useState } from "react";
import axios from "axios";
import { mockSearchResponse } from "../data/mockSearchResponse";

const AMAZON_SEARCH_URL = "https://amazon-price1.p.rapidapi.com/search";

export const useFetch = (query) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        setIsLoading(true);

        try {
          // const response = await axios.get(AMAZON_SEARCH_URL, {
          //   headers: {
          //     "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY,
          //     "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_API_HOST,
          //   },
          //   params: {
          //     keywords: query,
          //     marketplace: "GB",
          //   },
          // });

          const response = mockSearchResponse;

          if (response.status !== 200) {
            setError(true);
            setData();
          } else {
            setError(false);
            setData(response.data);
          }
        } catch (error) {
          setError(true);
          setData();
        }

        setIsLoading(false);
      };

      fetchData();
    }
  }, [query]);

  return {
    data,
    isLoading,
    error,
  };
};
