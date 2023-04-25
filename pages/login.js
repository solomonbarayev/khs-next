import React from 'react';
import styled from 'styled-components';
import SidepageHero from '../components/building-blocks/SidepageHero';
import bgImage from '../public/get-involved-hero-bg.jpg';
import FormInput from '../components/building-blocks/FormInput';
import PrimaryButton from '../components/building-blocks/PrimaryButton';
import useForm from '../hooks/useForm';

const Login = () => {
  const { formValues, setFormValues, handleChange } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    console.log('form submitted. add strapi api call here');
    setFormValues({});
  };

  return (
    <Content>
      <SidepageHero
        title="Login"
        bgImg="/get-involved-hero-bg.jpg"
        darkBg={true}
      />
      <Wrapper>
        <div className="login-form__container">
          <p className="login-form__text">
            Please login to access your application. (Accounts are created when
            an application is submitted.)
          </p>
          <form className="form" onSubmit={handleSubmit}>
            <FormInput
              id="email"
              className="form__input"
              label="Email"
              value={formValues.email || ''}
              type="email"
              placeholder="Enter your email"
              handleChange={handleChange}
            />
            <FormInput
              id="password"
              value={formValues.password || ''}
              label="Password"
              className="form__input"
              type="password"
              placeholder="Enter your password"
              handleChange={handleChange}
            />

            <div className="form__row">
              <PrimaryButton buttonText="Login" type="submit">
                Login
              </PrimaryButton>
            </div>
          </form>
        </div>
      </Wrapper>
    </Content>
  );
};

export default Login;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
`;

const Wrapper = styled.main`
  flex-grow: 1;

  .login-form__container {
    max-width: 370px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: -3rem auto 0;
    padding: 2rem 2rem 4rem;
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 70px -12px rgb(35 35 35 / 19%);
  }

  .login-form__text {
    margin-bottom: 2rem;
    font-size: 0.8rem;
  }

  .form {
    /* max-width: 300px; */
    width: 100%;
  }

  .form__input {
    width: 100%;
  }
`;
