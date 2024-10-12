function Button({event, children}) {
  return (
    <button className="self-center w-max button" onClick={event.callBack}>
      {children}
    </button>
  );
}

export default Button;
