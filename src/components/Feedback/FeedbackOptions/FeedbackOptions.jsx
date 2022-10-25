import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  console.log(options);
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            name={option}
            onClick={onLeaveFeedback}
            type="button"
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  option: PropTypes.string,
};
