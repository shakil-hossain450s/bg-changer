import PropTypes from "prop-types";

const Button = ({ btnValue, handleChangeColor, textColor = "text-white" }) => {
  return (
    <div>
      <button
        onClick={() => handleChangeColor(btnValue)}
        className={`outline-none border px-4 py-1 rounded-full shadow-xl font-medium ${textColor}`}
        style={{ backgroundColor: btnValue }}
      >
        {btnValue.toUpperCase()}
      </button>
    </div>
  );
};

Button.propTypes = {
  btnValue: PropTypes.string,
  handleChangeColor: PropTypes.func,
  textColor: PropTypes.string,
};

export default Button;
