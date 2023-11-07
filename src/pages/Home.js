import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { TrendingProducts } from "../components/TrendingProducts";
import { ErrorPanel } from "../components/ErrorPanel";
import { RecentSearches } from "../components/RecentSearches";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useFetch } from "../hooks/useFetch";

export const Home = ({ query }) => {
  const [recentSearches, setRecentSearches] = useState();

  const { data, isLoading, error } = useFetch(query);

  useEffect(() => {
    if (!recentSearches) {
      const itemsFromLS = getFromLocalStorage("recentSearches", []);

      setRecentSearches(itemsFromLS);
    }
  }, []);

  const handleClearLocalStorage = () => {
    setRecentSearches([]);
  };

  return (
    <Stack spacing={3}>
      <LoadingSpinner open={isLoading} />
      {error && (
        <Box sx={{ p: 3 }}>
          <ErrorPanel
            title="Failed to load this section..."
            subTitle="Please refresh the page and try again."
          />
        </Box>
      )}
      {data && data.length > 0 && (
        <Box sx={{ p: 3 }}>
          <TrendingProducts trendingProducts={data} />
        </Box>
      )}
      {recentSearches && (
        <Box sx={{ p: 3 }}>
          <RecentSearches
            recentSearches={recentSearches}
            handleClearLocalStorage={handleClearLocalStorage}
          />
        </Box>
      )}
    </Stack>
  );
};
