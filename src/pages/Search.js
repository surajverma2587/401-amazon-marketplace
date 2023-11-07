import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { SearchForm } from "../components/SearchForm";
import { useFetch } from "../hooks/useFetch";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ErrorPanel } from "../components/ErrorPanel";
import { SearchResults } from "../components/SearchResults";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("q"));

  const { data, isLoading, error } = useFetch(searchTerm);

  const onSuccess = (query) => {
    setSearchParams({ q: query });
    setSearchTerm(query);
  };

  return (
    <Stack spacing={3}>
      <LoadingSpinner open={isLoading} />
      <Box sx={{ p: 3 }}>
        <SearchForm onSuccess={onSuccess} />
      </Box>
      {error && (
        <Box sx={{ p: 3 }}>
          <ErrorPanel
            title="Failed to fetch results..."
            subTitle="Please refresh the page and try again."
          />
        </Box>
      )}
      {data && data.length > 0 && (
        <Box sx={{ p: 3 }}>
          <SearchResults results={data} />
        </Box>
      )}
    </Stack>
  );
};
