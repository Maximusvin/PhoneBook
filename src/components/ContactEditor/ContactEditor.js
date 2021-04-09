import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from './ContactEditor.module.css';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp = /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/;

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegExp, "Не вірно вказано ім'я")
    .required('Required'),
  number: yup
    .string()
    .matches(phoneRegExp, 'Телефонний номер не валідний')
    .required('Required'),
});

function CustomInput({ field, placeholder, type }) {
  return (
    <>
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className={s.input}
      />
      <ErrorMessage name={field.name} component="span" />
    </>
  );
}

const ContactEditor = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onAddContact(values);
        actions.setSubmitting(false);
        actions.resetForm({});
      }}
    >
      <Form className={s.wrap}>
        <Field
          name="name"
          type="text"
          placeholder="Ім'я"
          component={CustomInput}
        />
        <Field
          name="number"
          type="tel"
          placeholder="Телефон"
          component={CustomInput}
        />

        <button type="submit" className={s.btn}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactEditor;
