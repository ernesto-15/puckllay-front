import React from 'react';
import AdWorkshop from '../Components/Admin/AdWorkshop';

import './AdminWorkshops.css';

const AdminWorkshops = () => {
  return (
    <div className="admin-container">
      <div className="users">
        {/* <h1 className="users__title">USUARIOS</h1> */}
        <div className="input-container__workshops">
          <p>Buscar: </p>
          <input
            type="text"
            className="form__input"
            placeholder="Buscar Taller"
          />
        </div>
        <div className="create-workshop">
          <button>NUEVO TALLER</button>
        </div>
        <div className="workshops__container">
          <AdWorkshop name="Taller 1" user="Huaman" />
          <AdWorkshop name="Taller 2" user="Perez" />
          <AdWorkshop name="Taller 3" user="Gonzales" />
        </div>
      </div>
    </div>
  );
};

export default AdminWorkshops;