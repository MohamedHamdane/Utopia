import PropTypes from 'prop-types';

export function NavigationButton({ children }) {
  return (
    <button className="px-16 py-7 rounded-[50px] max-md:px-5 text-4xl text-white">
      {children}
    </button>
  );
}

NavigationButton.propTypes = {
  children: PropTypes.node.isRequired, // Validates that children is required and should be a node (string, element, or array of nodes)
};
