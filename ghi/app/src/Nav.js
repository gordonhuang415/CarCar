import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers">Manufacturer</NavLink>
            </li>     
          <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/new">New Manufacturer</NavLink>
            </li>     
          <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles">Automobiles</NavLink>
            </li>     
          <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/new">New Automobile</NavLink>
            </li>     
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales">Sales</NavLink>
            </li>                        
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/new">Sales Form</NavLink>
            </li>                        
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales_persons/new">New Sales Person</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales_history"> Sales Person History</NavLink>
            </li>                                                        
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers/new">New Customer</NavLink>
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link" to="/technician/new">New Technician</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/appointment">Appointment List</NavLink>
            </li>   
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointment/new">New Appointment</NavLink>
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link" to="/models">Models List</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink className="nav-link" to="/models/new">Create Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ahistory">Service History</NavLink>
            </li>              
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
