import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { createPost } from 'redux/operations';
import { removeComments } from 'redux/slice';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Typography } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';

import formFields from './form-fields';
import initialValues from './form-initial-values';
import validationSchema from './validation-schema';

import { StyledBox } from './AddPostForm.styled';

const AddPostForm = ({ setIsModalOpen }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeComments());
  }, [dispatch]);

  const handleSubmit = values => {
    dispatch(createPost(values)).then(() => setIsModalOpen(false));
  };

  return (
    <StyledBox>
      <Typography
        variant="h3"
        align="center"
        gutterBottom={true}
        sx={{ fontSize: 30 }}
      >
        Add your post
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount={false}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              as={TextField}
              {...formFields.title}
              margin="normal"
              fullWidth
              error={Boolean(errors.title && touched.title)}
              helperText={<ErrorMessage name={formFields.title.name} />}
            />

            <Field
              as={TextField}
              {...formFields.body}
              multiline
              rows={6}
              margin="dense"
              fullWidth
              error={Boolean(errors.body && touched.body)}
              helperText={<ErrorMessage name={formFields.body.name} />}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ margin: '16px auto', display: 'flex' }}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </StyledBox>
  );
};

export default AddPostForm;
