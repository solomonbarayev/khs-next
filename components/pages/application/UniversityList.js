import React from 'react';
import styled from 'styled-components';
import { primaryColor, whiteColor } from '../../../utils/style-variables';
import FormInput from '../../building-blocks/FormInput';
import { createUniqueId } from '../../../utils/helpers';
const UniversityList = ({
  handleUniChange,
  uniSet,
  addUni,
  removeUni,
  label,
  set,
}) => {
  return (
    <>
      <label className="form__label form__label_university">{label}</label>

      {uniSet[set].map((uni, index) => {
        return (
          <div key={index}>
            <div className="form__row">
              <FormInput
                handleChange={(e) => handleUniChange(e, uni.id, set)}
                id="university"
                validate={false}
                value={uni.university}
                label={index === 0 ? 'University' : ''}
              />
              <FormInput
                handleChange={(e) => handleUniChange(e, uni.id, set)}
                id="universityLocation"
                label={index === 0 ? 'Location' : ''}
                value={uni.universityLocation}
                validate={false}
              />
              <UniButtons>
                <UniButton
                  type="button"
                  onClick={() => addUni(set, createUniqueId())}>
                  Add
                </UniButton>
                <UniButton
                  type="button"
                  onClick={() => {
                    removeUni(index, set);
                  }}>
                  Delete
                </UniButton>
              </UniButtons>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UniversityList;

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
