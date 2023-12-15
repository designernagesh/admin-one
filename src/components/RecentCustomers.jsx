import { recentCustomers } from '../data/data.json';

export const RecentCustomers = () => {
  return (
    <div className="recentCustomers">
      <div className="cardHeader">
        <h2>Recent Customers</h2>
      </div>
      <table>
        <tbody>
          {
            recentCustomers.map(customer => {
              return (
                <tr key={customer.id}>
                  <td width="60px">
                    <div className="imgBx"><img src={`../src/assets/images/${customer.image}.jpg`} alt="customer 1" /></div>
                  </td>
                  <td>
                    <h4>{customer.name} <br /> <span>{customer.email}</span></h4>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}