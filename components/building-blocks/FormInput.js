import styled from 'styled-components';

export default function FormInput({
  handleChange,
  value,
  id,
  type,
  label,
  validate,
}) {
  return (
    <FormControl>
      <label htmlFor={id} className="form__label">
        {label}
      </label>
      <input
        type={type || 'text'}
        name={id}
        id={id}
        className="form__input"
        onChange={handleChange}
        value={value}
      />
      {validate && <span className="form__error">Error message</span>}
    </FormControl>
  );
}

const FormControl = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 300px;

  .form__input {
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 100%;
  }

  .form__error {
    position: absolute;
    bottom: -1.5rem;
    font-size: 0.8rem;
    left: 0;
    color: red;
  }
`;
