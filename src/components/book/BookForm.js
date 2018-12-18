import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const BookForm = ({book, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Book</h1>
        <TextInput
    name="title"
    label="Title"
    value={book.title}
    onChange={onChange}
    error={errors.title}/>
  {/*
  <SelectInput
    name="authorId"
    label="Author"
    value={book.authorId}
    defaultOption="Select Author"
    options={allAuthors}
    onChange={onChange} error={errors.authorId}/>
*/}
  <TextInput
    name="publisher"
    label="Publisher"
    value={book.publisher}
    onChange={onChange}
    error={errors.publisher}/>

    <TextInput
      name="pages"
      label="Pages"
      value={book.pages}
      onChange={onChange}
      error={errors.pages}/>

  <TextInput
    name="website"
    label="Website"
    value={book.website}
    onChange={onChange}
    error={errors.website}/>

  <input
    type="submit"
    disabled={saving}
    value={saving ? 'Saving...' : 'Save'}
    className="btn btn-primary"
    onClick={onSave}/>
    </form>
  );
};

BookForm.propTypes = {
  book: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default BookForm;
