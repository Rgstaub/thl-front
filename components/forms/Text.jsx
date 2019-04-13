const Text = props => {
  return (
    <div>
      <label htmlFor={props.id}>
        {props.label}
        <input
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          name={props.name}
          id={props.id}
          disabled={props.disabled}
          onChange={props.onChange}
        />
      </label>
      <div>{props.feedback}</div>
    </div>
  );
};

export default Text;
