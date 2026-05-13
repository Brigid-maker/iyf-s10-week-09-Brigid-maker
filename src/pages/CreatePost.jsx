import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';
import useForm from '../hooks/useForm';

export default function CreatePost() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.title.trim()) errors.title = 'Title is required';
    if (!values.body.trim()) errors.body = 'Content is required';
    if (values.title.length > 100) errors.title = 'Title is too long';
    return errors;
  };

  const { values, errors, touched, handleChange, handleBlur, reset } =
    useForm({ title: '', body: '' }, validate);

  const handleSubmit = () => {
  // Force all fields to show errors
  const allTouched = { title: true, body: true };
  const validationErrors = validate(values);

  if (Object.keys(validationErrors).length > 0) {
    // Manually trigger touched for all fields
    handleBlur({ target: { name: 'title' } });
    handleBlur({ target: { name: 'body' } });
    return;
  }

  // Simulate posting
  console.log('New post:', values);
  setSubmitted(true);

  setTimeout(() => {
    reset();
    setSubmitted(false);
    navigate('/posts');
  }, 2000);
};

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Create Post</h1>

      {submitted && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700 font-medium">
          ✅ Post created successfully! Redirecting...
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
        {/* Title */}
        <Input
          label="Title"
          name="title"
          placeholder="Enter post title..."
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.title && errors.title}
          required
        />

        {/* Body */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Content <span className="text-red-500">*</span>
          </label>
          <textarea
            name="body"
            value={values.body}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Write your post content..."
            rows={6}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none
              ${touched.body && errors.body
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300'
              }`}
          />
          {touched.body && errors.body && (
            <p className="mt-1 text-sm text-red-500">{errors.body}</p>
          )}
        </div>

        {/* Character count */}
        <p className="text-sm text-gray-400 text-right">
          {values.body.length} characters
        </p>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <Button
            fullWidth
            onClick={handleSubmit}
            loading={submitted}
          >
            Publish Post
          </Button>
          <Button
            variant="secondary"
            fullWidth
            onClick={reset}
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}