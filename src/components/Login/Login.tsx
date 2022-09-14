import { css } from '@emotion/react';
import { Button, FormLabel, Grid, Hidden, Link, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

interface LoginFormProps {
  email: string;
  password: string;
}

const Login = () => {
  const formik = useFormik<LoginFormProps>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      router.push('/dashboard/test');
    },
  });
  const {} = useQuery(['login'], () => {});
  const router = useRouter();

  return (
    <Grid container css={style}>
      <Grid item xs={false} sm={6} className="left">
        <Hidden only="xs">어쩌구 저쩌구</Hidden>
      </Grid>
      <Grid item xs={12} sm={6} container className="right" alignItems="center" justifyContent="center">
        <Grid item xs={10} sm={10} md={6}>
          <form onSubmit={formik.handleSubmit}>
            <FormLabel>Sign In</FormLabel>
            <TextField
              required
              autoFocus
              // type="email"
              id="email"
              name="email"
              label="Email"
              margin="normal"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              required
              type="password"
              id="password"
              name="password"
              label="Password"
              margin="normal"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <div className="wrapper__link">
              <Link>Forgot password?</Link>
            </div>
            <Button className="button_submit" variant="contained" fullWidth size="large" type="submit">
              Sign In
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;

const style = css`
  height: 100vh;
  align-items: center;
  .left {
    background: #2a5dc4;
    height: inherit;
  }
  .right {
    .wrapper__link {
      font-size: 0.75rem;
      display: flex;
      justify-content: flex-end;
    }
    .button_submit {
      margin-top: 1rem;
    }
  }
`;
