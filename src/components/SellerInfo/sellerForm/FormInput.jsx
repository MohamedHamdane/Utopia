import PropTypes from 'prop-types';

export function FormInput({ label, type = "text", placeholder, minHeight }) {
  const inputId = `${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="flex relative flex-col mt-24 w-full max-w-[1147px] max-md:mt-10 max-md:max-w-full">
      <label
        htmlFor={inputId}
        className="z-0 text-4xl font-semibold max-md:max-w-full"
      >
        {label}:
      </label>
      <input
        type={type}
        id={inputId}
        className={`flex z-0 mt-7 w-full bg-white border border-solid border-stone-300 rounded-[41px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full px-16 py-6 text-3xl font-light`}
        style={{ minHeight: minHeight || "83px" }}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,       // 'label' should be a string and is required
  type: PropTypes.string,                   // 'type' should be a string (default is "text")
  placeholder: PropTypes.string,            // 'placeholder' should be a string
  minHeight: PropTypes.string,              // 'minHeight' should be a string (like '83px')
};
