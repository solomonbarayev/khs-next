//useForm hook
import { api } from '../utils/api';
import { useState } from 'react';

export default function useForm() {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleApplicationSubmit = (e, handleFormReset) => {
    e.preventDefault();

    const user = {
      username: formValues.email,
      email: formValues.email,
      password: formValues.password,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
    };

    api
      .postUser(user)
      .then((createdUser) => {
        const application = {
          degree: formValues.degree,
          universitiesAppliedTo: formValues.universitiesAppliedTo,
          universitiesAcceptedTo: formValues.universitiesAcceptedTo,
          applicantId: createdUser.user.id,
          firstName: formValues.firstName,
          lastName: formValues.lastName,
        };

        let formData = new FormData();
        formData.append('data', JSON.stringify(application));
        formData.append('files.letter', formValues.letter);

        api
          .postApplication(formData)
          .then((res) => {
            console.log(res);
            console.log('user created and application submitted');
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    setFormValues({ ...formValues, [name]: files[0] });
  };

  return {
    formValues,
    handleChange,
    handleApplicationSubmit,
    handleFileUpload,
    setFormValues,
  };
}
