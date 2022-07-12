import NotificationButton from "../NotificationButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./style.css";
import { useState } from "react";

function SalesCard() {
    const max = new Date();
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);
  
    return (
    <>
      <div className="dsmeta-card">
        <h3>Vendas</h3>
        <div>
          <div className="dsmeta-input-container">
            <DatePicker
              selected={minDate}
              onChange={(date: Date) => setMinDate(date)}
              className="dsmeta-form-input"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div className="dsmeta-input-container">
            <DatePicker
              selected={maxDate}
              onChange={(date: Date) => setMaxDate(date)}
              className="dsmeta-form-input"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>

        <div>
          <table className="dsmeta-sales-table">
            <thead>
              <tr>
                <th className="show992">Id</th>
                <th className="show576">Data</th>
                <th>Vendedor</th>
                <th className="show992">Visitas</th>
                <th className="show992">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="show992">#200</td>
                <td className="show576">01/02/2000</td>
                <td>Enzo</td>
                <td className="show992">10</td>
                <td className="show992">20</td>
                <td>R$ 2300,00</td>
                <td>
                  <div className="dsmeta-red-button-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>

              <tr>
                <td className="show992">#200</td>
                <td className="show576">01/02/2000</td>
                <td>Enzo</td>
                <td className="show992">10</td>
                <td className="show992">20</td>
                <td>R$ 2300,00</td>
                <td>
                  <div className="dsmeta-red-button-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>

              <tr>
                <td className="show992">#200</td>
                <td className="show576">01/02/2000</td>
                <td>Enzo</td>
                <td className="show992">10</td>
                <td className="show992">20</td>
                <td>R$ 2300,00</td>
                <td>
                  <div className="dsmeta-red-button-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SalesCard;
