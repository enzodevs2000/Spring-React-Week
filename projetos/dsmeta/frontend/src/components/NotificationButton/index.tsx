import icon from '../../assets/img/notificar.svg';

import './style.css';

function NotificationButton() {
    return (
        <>
            <div className="dsmeta-red-button">
                <img src={icon} alt="icone de notificacao" />
            </div>
        </>
    )
  }
  
  export default NotificationButton
  