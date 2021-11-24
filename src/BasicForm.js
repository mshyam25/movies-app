import { useFormik } from 'formik'

import * as yup from 'yup'

const formValidation = (values) => {
  const errors = {}
  console.log('formValidation', values)

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email addresssssssss'
  }

  if (values.password.length < 8 || values.password.length > 13) {
    errors.password =
      'Please enter password with minimum 8 characters and maximum of 13 characters'
  }
  console.log(errors)
  return errors
}

const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(8)
    .max(15)
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Invalid Email Address'
    )
    .required(),
  password: yup.string().min(6).max(12).required(),
})

export const BasicForm = () => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: { email: '', password: '' },
      //validate:formValidation,
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log('onSubmit', values)
      },
    })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          placeholder="Please enter your email"
        />

        {errors.email && touched.email ? errors.email : ''}

        <input
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          placeholder="Please enter your password"
        />
        {errors.password && touched.password ? errors.password : ''}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
