import React from 'react';
import styled from 'styled-components';

export default function FileUpload({ handleFileUpload }) {
  return (
    <Wrapper>
      <label className="form__label form__label_file" htmlFor="letter">
        Upload your professional/graduate school acceptance letter:
      </label>
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .pdf, .doc, .docx, .txt"
        name="letter"
        id="letter"
        onChange={handleFileUpload}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;
