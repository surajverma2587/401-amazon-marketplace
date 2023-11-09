import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";
import { useApp } from "../context/AppProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const CreateWishListModal = ({ showModal, setShowModal }) => {
  const { dispatch } = useApp();

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Please enter a title."),
    }),
    onSubmit: ({ title }) => {
      const wishlist = {
        title,
        createdOn: moment().format("DD/MM/YYYY"),
        items: [],
      };

      dispatch({ type: "CREATE_WISHLIST", payload: wishlist });

      setShowModal(false);

      formik.resetForm();
    },
  });

  return (
    <Modal
      open={showModal}
      onClose={() => {
        setShowModal(false);
      }}
    >
      <Box sx={style}>
        <Stack spacing={2}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Wish List
          </Typography>
          <Stack component="form" spacing={2} onSubmit={formik.handleSubmit}>
            <TextField
              label="Title"
              variant="outlined"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && !!formik.errors.title}
              helperText={formik.errors.title}
            />
            <Button variant="contained" color="success" type="submit">
              Create
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};
