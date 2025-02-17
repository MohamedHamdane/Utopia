// import React from "react";
import PropTypes from "prop-types";

export const FormField = ({ label, type, placeholder }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      {type === "textarea" ? (
        <textarea
          className="form-control"
          placeholder={placeholder}
          rows="3"
        ></textarea>
      ) : (
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,      // 'label' should be a string and is required
  type: PropTypes.oneOf(["text", "email", "password", "textarea"]).isRequired, // 'type' should be one of these options
  placeholder: PropTypes.string,           // 'placeholder' should be a string
};

