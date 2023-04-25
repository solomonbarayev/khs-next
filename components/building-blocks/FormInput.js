import styled from 'styled-components';

export default function FormInput({
  handleChange,
  value,
  id,
  type,
  label,
  validate,
  className,
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
        className={`form__input ${className ? className : ''}`}
        onChange={handleChange}
        value={value}
      />
      {validate && <span className="form__error"></span>}
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

  @media (max-width: 650px) {
    max-width: none;
  }
`;
