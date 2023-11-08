import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export const SearchForm = ({ onSuccess, initialSearchTerm }) => {
  const formik = useFormik({
    initialValues: {
      query: initialSearchTerm || "",
    },
    validationSchema: Yup.object({
      query: Yup.string().required("Please enter a valid product name."),
    }),
    onSubmit: ({ query }) => {
      onSuccess(query);
    },
  });

  return (
    <Box sx={{ my: 3 }} component="form" onSubmit={formik.handleSubmit}>
      <TextField
        placeholder="Enter product name"
        fullWidth
        error={formik.touched.query && !!formik.errors.query}
        helperText={formik.touched.query && formik.errors.query}
        name="query"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.query}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
