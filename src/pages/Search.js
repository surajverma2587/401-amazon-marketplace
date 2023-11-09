import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { SearchForm } from "../components/SearchForm";
import { useFetch } from "../hooks/useFetch";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ErrorPanel } from "../components/ErrorPanel";
import { SearchResults } from "../components/SearchResults";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";
import { useApp } from "../context/AppProvider";

export const Search = () => {
  const { state } = useApp();

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("q"));

  const { data, isLoading, error } = useFetch(searchTerm);

  const onSuccess = (query) => {
    setSearchParams({ q: query });
    setSearchTerm(query);
  };

  useEffect(() => {
    if (data) {
      const itemsFromLS = getFromLocalStorage("recentSearches", []);

      const filterItems = itemsFromLS.filter((itemFromLS) => {
        return itemFromLS !== searchTerm;
      });

      const newItems = [searchTerm, ...filterItems];

      localStorage.setItem("recentSearches", JSON.stringify(newItems));
    }
  }, [data]);

  return (
    <Stack spacing={3}>
      <LoadingSpinner open={isLoading} />
      <Box sx={{ p: 3 }}>
        <SearchForm onSuccess={onSuccess} initialSearchTerm={searchTerm} />
      </Box>
      {error && (
        <Box sx={{ p: 3 }}>
          <ErrorPanel
            title="Failed to fetch results..."
            subTitle="Please refresh the page and try again."
          />
        </Box>
      )}
      {data && Array.isArray(data) && data.length > 0 && (
        <Box sx={{ p: 3 }}>
          <SearchResults results={data} />
        </Box>
      )}
      {data && !Array.isArray(data) && (
        <Box sx={{ p: 3 }}>
          <ErrorPanel
            title="No data available..."
            subTitle="Please refresh the page and try again."
          />
        </Box>
      )}
    </Stack>
  );
};
