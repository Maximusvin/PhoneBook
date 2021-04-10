import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
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

const ContactEditor = ({
  onAddContact,
  contacts,
  showModal,
  onToggleContactEditor,
}) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        if (
          contacts.find(
            contact =>
              contact.name === values.name || contact.number === values.number,
          )
        ) {
          toast.error(`Контакт "${values.name}" або номер телефону уже існує`);
          return;
        }

        onAddContact(values);
        actions.setSubmitting(false);
        actions.resetForm({});
        onToggleContactEditor();
      }}
    >
      <Form className={showModal ? s.wrapShow : s.wrapHide}>
        <h2 className={s.title}>Створіть новий контакт</h2>
        <Field
          name="name"
          type="text"
          placeholder="Прізвище та ім'я"
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
