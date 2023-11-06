import { useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { getRandomSearchTerm } from "../utils/getRandomSearchTerm";
import { mockSearchResponse } from "../data/mockSearchResponse";
import { TrendingProducts } from "../components/TrendingProducts";
import { ErrorPanel } from "../components/ErrorPanel";

const AMAZON_SEARCH_URL = "https://amazon-price1.p.rapidapi.com/search";

export const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchTerm = getRandomSearchTerm();

    const fetchData = async () => {
      setIsLoading(true);

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
          setError(true);
          setTrendingProducts();
        } else {
          setError(false);
          setTrendingProducts(response.data.slice(0, 5));
        }
      } catch (error) {
        setError(true);
        setTrendingProducts();
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Stack spacing={3}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {error && (
        <Box sx={{ p: 3 }}>
          <ErrorPanel />
        </Box>
      )}
      {trendingProducts && (
        <TrendingProducts trendingProducts={trendingProducts} />
      )}
      <div>Recent Searches</div>
    </Stack>
  );
};
