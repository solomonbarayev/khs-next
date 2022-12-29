import FormInput from './../components/building-blocks/FormInput';
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  primaryColor,
  secondaryColor,
  whiteColor,
} from '../utils/style-variables';
import SidepageHero from '../components/building-blocks/SidepageHero';

const uni = {
  university: '',
  universityLocation: '',
};

const createUniqueId = () => {
  return Math.round(new Date().getTime() + Math.random());
};

const Application = () => {
  const [formValues, setFormValues] = useState({});
  const [uniSet, setUniSet] = useState({
    appliedTo: [{ ...uni, id: createUniqueId() }],
    acceptedTo: [{ ...uni, id: createUniqueId() }],
  });

  const addUni = (set) => {
    const uniCopy = [...uniSet[set]];
    uniCopy.push({ ...uni, id: createUniqueId() });
    setUniSet({ ...uniSet, [set]: uniCopy });
  };

  const removeUni = (index, set) => {
    const uniCopy = [...uniSet[set]];
    uniCopy.splice(index, 1);
    setUniSet({ ...uniSet, [set]: uniCopy });
    //if set is "appliedTo" then set formValues.universitiesAppliedTo to uniCopy else set formValues.universitiesAcceptedTo to uniCopy

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleUniChange = (e, index, set) => {
    const { name, value } = e.target;
    const uniCopy = [...uniSet[set]];

    uniCopy.map((uni, i) => {
      if (i === index) {
        uni[name] = value;
      } else {
        return uni;
      }
    });

    setUniSet({ ...uniSet, [set]: uniCopy });
    // setFormValues({ ...formValues, universitiesAppliedTo: uniCopy });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    handleFormReset();
  };

  const handleFormReset = () => {
    setFormValues({});
    setUniSet({
      appliedTo: [{ ...uni, id: createUniqueId() }],
      acceptedTo: [{ ...uni, id: createUniqueId() }],
    });
  };

  console.log(uniSet);

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
          <form className="application__form form" onSubmit={handleSubmit}>
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
            <div className="form__row">
              <div className="form__control form__control_type_radios">
                <label htmlFor="degree" className="form__label">
                  Which level degree are you currently pursuing?
                </label>
                {/* radio buttons */}
                <div className="form__radios">
                  <div className="form__radio">
                    <input
                      type="radio"
                      name="degree"
                      id="degree"
                      onChange={() =>
                        setFormValues({ ...formValues, degree: "Master's" })
                      }
                      checked={formValues.degree === "Master's"}
                    />
                    <label htmlFor="degree">Masters</label>
                  </div>
                  <div className="form__radio">
                    <input
                      type="radio"
                      name="degree"
                      id="degree"
                      onChange={() =>
                        setFormValues({ ...formValues, degree: 'Doctorate' })
                      }
                      checked={formValues.degree === 'Doctorate'}
                    />
                    <label htmlFor="degree">Doctorate</label>
                  </div>
                </div>
                <span className="form__error">Error message</span>
              </div>
            </div>

            <label className="form__label form__label_university">
              List universities you have applied to:
            </label>

            {uniSet.appliedTo?.map((uni, index) => {
              return (
                <div key={index}>
                  <div className="form__row">
                    <FormInput
                      handleChange={(e) =>
                        handleUniChange(e, index, 'appliedTo')
                      }
                      id="university"
                      validate={false}
                      value={uni.university}
                      label={index === 0 ? 'University' : ''}
                    />
                    <FormInput
                      handleChange={(e) =>
                        handleUniChange(e, index, 'appliedTo')
                      }
                      id="universityLocation"
                      label={index === 0 ? 'Location' : ''}
                      value={uni.universityLocation}
                      validate={false}
                    />
                    <UniButtons>
                      <UniButton
                        type="button"
                        onClick={() => addUni('appliedTo')}>
                        Add
                      </UniButton>
                      <UniButton
                        type="button"
                        onClick={() => {
                          removeUni(index, 'appliedTo');
                        }}>
                        Delete
                      </UniButton>
                    </UniButtons>
                  </div>
                </div>
              );
            })}

            <label className="form__label form__label_university">
              List universities you have been accepted to, if any:
            </label>

            {uniSet.acceptedTo?.map((uni, index) => {
              return (
                <div key={index}>
                  <div className="form__row">
                    <FormInput
                      handleChange={(e) =>
                        handleUniChange(e, index, 'acceptedTo')
                      }
                      id="university"
                      validate={false}
                      value={uni.university}
                      label={index === 0 ? 'University' : ''}
                    />
                    <FormInput
                      handleChange={(e) =>
                        handleUniChange(e, index, 'acceptedTo')
                      }
                      id="universityLocation"
                      label={index === 0 ? 'Location' : ''}
                      value={uni.universityLocation}
                      validate={false}
                    />
                    <UniButtons>
                      <UniButton
                        type="button"
                        onClick={() => addUni('acceptedTo')}>
                        Add
                      </UniButton>
                      <UniButton
                        type="button"
                        onClick={() => {
                          removeUni(index, 'acceptedTo');
                        }}>
                        Delete
                      </UniButton>
                    </UniButtons>
                  </div>
                </div>
              );
            })}

            <div className="form__row">
              <SubmitButton type="submit">Submit</SubmitButton>
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

  .form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .form__row {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    width: 100%;
    align-items: flex-end;
  }

  .form__control {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    max-width: 300px;
  }

  .form__label_university {
    font-weight: bold;
  }

  .form__control_type_radios {
    max-width: none;
  }
`;

const UniButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const UniButton = styled.button`
  background-color: ${primaryColor};
  color: ${whiteColor};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  max-height: 40px;
  font-size: 0.6rem;
`;

const SubmitButton = styled.button`
  background-color: ${secondaryColor};
  color: ${whiteColor};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
`;
