//useForm hook
import { api } from '../utils/api';
import { useState } from 'react';

//axios

export default function useForm() {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleApplicationSubmit = (e, handleFormReset, notify) => {
    e.preventDefault();

    const user = {
      username: formValues.email,
      email: formValues.email,
      password: formValues.password,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
    };

    let status;
    let message;

    api
      .postUser(user)
      .then((res) => {
        status = res.status;

        let createdUser = res.data.user;

        const application = {
          degree: formValues.degree,
          universitiesAppliedTo: formValues.universitiesAppliedTo,
          universitiesAcceptedTo: formValues.universitiesAcceptedTo,
          applicantId: createdUser.id,
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          phone: formValues.phone,
        };

        let formData = new FormData();
        formData.append('data', JSON.stringify(application));
        formData.append('files.letter', formValues.letter);

        api
          .postApplication(formData)
          .then((res) => {
            console.log(res);
            console.log('user created and application submitted');
            handleFormReset();
            status = res.status;
            message = 'Application submitted successfully!';
            notify(status, message);
          })
          .catch((err) => {
            status = err.response.data.error.status;
            message = err.response.data.error.message;
            notify(status, message);
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        status = err.response.data.error.status;
        message = err.response.data.error.message;

        notify(status, message);
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
