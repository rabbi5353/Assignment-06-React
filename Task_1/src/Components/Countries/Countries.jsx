import "./Countries.css";
const Countries = (props) => {
  return (
    <div className="country">
      <img src={props.flags.png} alt="Flag Image" />
      <h2>Country Name: {props.name}</h2>
      <h3>Capital: {props.capital}</h3>
    </div>
  );
};

export default Countries;
