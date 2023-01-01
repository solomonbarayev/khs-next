import React from 'react';
export default function DegreeRadios({ setFormValues, formValues }) {
  return (
    <div className="form__row form__row_type_radios">
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
        <span className="form__error"></span>
      </div>
    </div>
  );
}
