import React, { useState } from 'react';

const SubmitForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({ image: '', name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    onFormSubmit(formData);
    setFormData({ image: '', name: '', description: '' }); // Reset the form after submission
  };

  return (
    <div>
      <h3>Add New Anime:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmitForm;