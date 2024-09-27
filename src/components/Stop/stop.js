import './stop.css';

const Stop = ({ onClick }) => {
  return (
    <div className="stop" id="stop" onClick={onClick}>
      <p>Stop</p>
    </div>
  );
};

export default Stop;
