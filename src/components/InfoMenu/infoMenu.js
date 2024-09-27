import Info from "../Info/info";
import './infoMenu.css';

const InfoMenu = ({ setWorkTime, setRelaxTime, workTime, relaxTime }) => {
  return (
    <div className="infoMenu">
      <Info
        setWorkTime={setWorkTime}
        setRelaxTime={setRelaxTime}
        workTime={workTime}
        relaxTime={relaxTime}
      />
    </div>
  );
};

export default InfoMenu;
