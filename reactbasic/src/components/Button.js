const Button = ({ handleClick, title }) => (
  <button onClick={handleClick} className="btn btn-primary">
    {title}
  </button>
);

export default Button;
