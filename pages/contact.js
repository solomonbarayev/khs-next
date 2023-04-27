import React from 'react';
import styled from 'styled-components';
import SidepageHero from '../components/building-blocks/SidepageHero';
import FormInput from '../components/building-blocks/FormInput';
import PrimaryButton from '../components/building-blocks/PrimaryButton';
import useForm from '../hooks/useForm';
import HeaderTwo from '../components/building-blocks/HeaderTwo';
import BodyText from '../components/building-blocks/BodyText';
import { api } from '../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const { formValues, setFormValues, handleChange } = useForm();

  const notify = () => toast.success('Message sent!');

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactEntry = {
      data: {
        name: formValues.name,
        email: formValues.email,
        message: formValues.message,
      },
    };

    api.postContactEntry(contactEntry).then((data) => {
      //if successful login clear form
      if (data != 400) {
        setFormValues({}); //clear form
        notify();
      } else {
        toast.error('Error sending message');
      }
    });
  };

  return (
    <>
      <Content>
        <SidepageHero title="Contact Us" />
        <Wrapper>
          <Left></Left>
          <Right>
            <div className="contact">
              <div className="contact__container">
                <HeaderTwo text="Let's talk" />
                <BodyText text="We’d love to hear from you! Send us a message using the form below." />
                <form className="contact_form" onSubmit={handleSubmit}>
                  <FormInput
                    id="name"
                    className="contact_form__input"
                    label="Name"
                    type="text"
                    handleChange={handleChange}
                    value={formValues.name || ''}
                  />
                  <FormInput
                    id="email"
                    className="contact_form__input"
                    label="Email"
                    type="email"
                    handleChange={handleChange}
                    value={formValues.email || ''}
                  />

                  <div>
                    <label htmlFor="message" className="form__label">
                      Message
                    </label>
                    <textarea
                      value={formValues.message || ''}
                      id="message"
                      label="Message"
                      type="textarea"
                      name="message"
                      onChange={handleChange}
                      className="form__input contact_form__input_type_textarea"
                    />
                  </div>

                  <div className="form__row">
                    <PrimaryButton buttonText="Submit" type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </Right>
        </Wrapper>
      </Content>
      <ToastContainer />
    </>
  );
};

export default Contact;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 92vh;
`;

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: nowrap;
`;

const Left = styled.div`
  background-image: url('/Contact-Us-Image-min.jpeg');
  background-size: cover;
  max-width: 50%;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  max-width: 50%;
  min-width: 500px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    min-width: 200px;
    max-width: 100%;
    padding-left: 30px;
    padding-right: 30px;
  }

  .contact__container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .contact_form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .form__label {
      margin-bottom: 0.5rem;
    }
  }

  //target parent div of inputs
  .input:has(.contact_form__input) {
    max-width: 600px;
  }

  .contact_form__input_type_textarea {
    min-height: 100px;
    justify-content: top;
    vertical-align: top;
  }
`;
