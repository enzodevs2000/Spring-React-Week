import NotificationButton from '../NotificationButton'

import './style.css';

function SalesCard() {
  return (
    <>
      <div className="dsmeta-card">
                        <h3>Vendas</h3>
                        <div>
                            <div className="dsmeta-input-container">
                                <input className="dsmeta-form-input" type="text"/>
                            </div>

                            <div className="dsmeta-input-container">
                                <input className="dsmeta-form-input" type="text"/>
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
  )
}

export default SalesCard
