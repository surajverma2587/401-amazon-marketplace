import { useEffect } from "react";
import axios from "axios";
import { getRandomSearchTerm } from "../utils/getRandomSearchTerm";
import { mockSearchResponse } from "../data/mockSearchResponse";

const AMAZON_SEARCH_URL = "https://amazon-price1.p.rapidapi.com/search";

export const Home = () => {
  useEffect(() => {
    const searchTerm = getRandomSearchTerm();

    const fetchData = async () => {
      try {
        // const response = await axios.get(AMAZON_SEARCH_URL, {
        //   headers: {
        //     "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY,
        //     "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_API_HOST,
        //   },
        //   params: {
        //     keywords: searchTerm,
        //     marketplace: "GB",
        //   },
        // });

        const response = mockSearchResponse;

        if (response.status !== 200) {
          // handle error
          console.log("ERROR");
        } else {
          // set data
          console.log(response.data);
        }
      } catch (error) {
        // handle error
      }
    };

    fetchData();
  }, []);

  return <div>Home</div>;
};
