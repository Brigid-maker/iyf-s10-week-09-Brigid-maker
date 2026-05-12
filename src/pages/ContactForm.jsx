import useForm from '../hooks/useForm';

export default function ContactForm() {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.email.includes('@')) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const { values, errors, touched, handleChange, handleBlur, reset } =
    useForm({ name: '', email: '' }, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', values);
    alert(`Submitted! Name: ${values.name}, Email: ${values.email}`);
    reset();
  };

  return (
    <div>
      <h1>Contact Form</h1>

      <div onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>Name: </label>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ marginLeft: 8 }}
          />
          {touched.name && errors.name && (
            <p style={{ color: 'red' }}>{errors.name}</p>
          )}
        </div>

        <div style={{ marginBottom: 16 }}>
          <label>Email: </label>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ marginLeft: 8 }}
          />
          {touched.email && errors.email && (
            <p style={{ color: 'red' }}>{errors.email}</p>
          )}
        </div>

        <button onClick={handleSubmit}>Submit</button>
        <button onClick={reset} style={{ marginLeft: 8 }}>Reset</button>
      </div>
    </div>
  );
}