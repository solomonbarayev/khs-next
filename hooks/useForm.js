//useForm hook

import { useState } from 'react';

export default function useForm() {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e, handleFormReset) => {
    e.preventDefault();
    console.log(formValues);
    handleFormReset();
  };

  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    setFormValues({ ...formValues, [name]: files[0] });
  };

  return {
    formValues,
    handleChange,
    handleSubmit,

    handleFileUpload,
    setFormValues,
  };
}
