import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'The title must contain at least 2 characters')
    .trim()
    .required('Please enter a title'),
  body: Yup.string()
    .min(6, `Please include more details...`)
    .max(260, 'Please shorter a bit your post')
    .required('Please enter your thoughts'),
});

export default validationSchema;
