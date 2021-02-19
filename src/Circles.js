function Circles(props) {
  const classes = ["absolute", ...props.classes];
  return (
    <div className={classes.join(" ")}>
      <div className="absolute w-64 h-64 rounded-full opacity-50 bg-gradient-to-br from-red-100 to-red-200"></div>
      <div className="absolute w-64 h-64 mt-10 ml-10 rounded-full opacity-50 bg-gradient-to-br from-teal-100 to-teal-200"></div>
      <div className="absolute w-64 h-64 ml-24 rounded-full opacity-50 bg-gradient-to-br from-purple-100 to-purple-200"></div>
    </div>
  );
}

export default Circles;
