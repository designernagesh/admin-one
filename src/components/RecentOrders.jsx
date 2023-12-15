import { recentOrders } from '../data/data.json';

export const RecentOrders = () => {
  const statusClass = (order) => {
    if(order.status === "Delivered"){
      return "delivered"
    }
    if(order.status === "Pending"){
      return "pending"
    }
    if(order.status === "Return"){
      return "return"
    }
    if(order.status === "In Progress"){
      return "inProgress"
    }
  }

  return (
    <div className="recentOrders">
      <div className="cardHeader">
        <h2>Recent Orders</h2>
        <a href="#" className="btn">View All</a>
      </div>

      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Payment</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {
            recentOrders.map(order => {
              return (
                <tr key={order.id}>
                  <td>{order.name}</td>
                  <td>${order.price}</td>
                  <td>{order.payment}</td>
                  <td><span className={`status ${statusClass(order)}`}>{order.status}</span></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}