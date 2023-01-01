import FileUpload from './../components/pages/application/FileUpload';
import DegreeRadios from './../components/pages/application/DegreeRadios';
import FormInput from './../components/building-blocks/FormInput';
import React, { useState } from 'react';
import styled from 'styled-components';
import { whiteColor } from '../utils/style-variables';
import SidepageHero from '../components/building-blocks/SidepageHero';
import UniversityList from '../components/pages/application/UniversityList';
import HeaderTwo from '../components/building-blocks/HeaderTwo';
import PrimaryButton from '../components/building-blocks/PrimaryButton';
import { createUniqueId } from '../utils/helpers';
import { uni } from '../utils/constants';
import useForm from '../hooks/useForm';

const Application = () => {
  const {
    formValues,
    setFormValues,
    handleChange,
    handleFileUpload,
    handleSubmit,
  } = useForm();
  const [uniSet, setUniSet] = useState({
    appliedTo: [{ ...uni, id: createUniqueId() }],
    acceptedTo: [{ ...uni, id: createUniqueId() + 1 }],
  });

  const addUni = (set, newId) => {
    const uniCopy = [...uniSet[set]];
    uniCopy.push({ ...uni, id: newId });
    setUniSet({ ...uniSet, [set]: uniCopy });
  };

  const removeUni = (index, set) => {
    const uniCopy = [...uniSet[set]];
    uniCopy.splice(index, 1);
    setUniSet({ ...uniSet, [set]: uniCopy });

    if (set === 'appliedTo') {
      setFormValues({
        ...formValues,
        universitiesAppliedTo: uniCopy,
      });
    }
    if (set === 'acceptedTo') {
      setFormValues({
        ...formValues,
        universitiesAcceptedTo: uniCopy,
      });
    }
  };

  const handleUniChange = (e, id, set) => {
    const { name, value } = e.target;
    const uniCopy = [...uniSet[set]];

    uniCopy.map((uni) => {
      if (uni.id === id) {
        //if univeristy id matches id of input, update the value
        uni[name] = value;
      } else {
        // else return the university
        return uni;
      }
    });

    // update the state with the new university list
    setUniSet({ ...uniSet, [set]: uniCopy });

    if (set === 'appliedTo') {
      setFormValues({
        ...formValues,
        universitiesAppliedTo: uniCopy,
      });
    }
    if (set === 'acceptedTo') {
      setFormValues({
        ...formValues,
        universitiesAcceptedTo: uniCopy,
      });
    }
  };

  const handleFormReset = () => {
    setFormValues({});
    setUniSet({
      appliedTo: [{ ...uni, id: createUniqueId() }],
      acceptedTo: [{ ...uni, id: createUniqueId() }],
    });

    //reset file input
    const fileInput = document.getElementById('letter');
    fileInput.value = null;
  };

  return (
    <>
      <SidepageHero
        title="KHS Application Portal"
        bgImg="/get-involved-hero-bg.jpg"
        darkBg={true}
        className="application__hero"
      />
      <Wrapper className="application__section">
        <div className="application__container">
          <form
            className="application__form form"
            onSubmit={(e) => handleSubmit(e, handleFormReset)}>
            <div className="form__row">
              <FormInput
                handleChange={handleChange}
                id="firstName"
                value={formValues.firstName || ''}
                label="First Name"
                validate={true}
              />
              <FormInput
                handleChange={handleChange}
                id="lastName"
                value={formValues.lastName || ''}
                label="Last Name"
                validate={true}
              />
            </div>

            <DegreeRadios
              setFormValues={setFormValues}
              formValues={formValues}
            />

            <UniversityList
              handleUniChange={handleUniChange}
              uniSet={uniSet}
              addUni={addUni}
              removeUni={removeUni}
              label="List universities you have applied to:"
              set="appliedTo"
            />

            <UniversityList
              handleUniChange={handleUniChange}
              uniSet={uniSet}
              addUni={addUni}
              removeUni={removeUni}
              label="List universities you have been accepted to, if any:"
              set="acceptedTo"
            />

            <div className="form__row">
              <FileUpload handleFileUpload={handleFileUpload} />
            </div>

            <hr />
            <HeaderTwo className="form__header" text="Create your account:" />

            <div className="form__row">
              <FormInput
                handleChange={handleChange}
                id="email"
                value={formValues.email || ''}
                label="Email"
                validate={true}
              />
              <FormInput
                handleChange={handleChange}
                id="phone"
                value={formValues.phone || ''}
                label="Phone"
                validate={true}
              />
            </div>

            <div className="form__row">
              <FormInput
                handleChange={handleChange}
                id="password"
                value={formValues.password || ''}
                label="Password"
                validate={true}
                type="password"
              />
            </div>

            <div className="form__row">
              <PrimaryButton buttonText="Submit" type="submit">
                Submit
              </PrimaryButton>
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default Application;

const Wrapper = styled.section`
  padding: 0 2rem 3rem;

  .application__container {
    max-width: 700px;
    margin: -3rem auto 0;
    padding: 2rem 2rem 4rem;
    background-color: ${whiteColor};
    border-radius: 0.5rem;
    box-shadow: 0px 0px 70px -12px rgb(35 35 35 / 19%);
  }
`;
