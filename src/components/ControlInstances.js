import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Redirect } from 'react-router-dom';

// import { Container } from './styles';

export default function ControlInstances() {

  let [_redirect, _setRedirect] = useState(false);

  return (
    <div className="control-instances">
      <div>
        <Button label="Nova instância" icon="pi pi-plus" onClick={() => _setRedirect(true)}></Button>
      </div>

      <div>
        <Button label="Iniciar" className="p-button-secondary mr" icon="pi pi-play"></Button>
        <Button label="Reiniciar" className="p-button-secondary mr" icon="pi pi-refresh"></Button>
        <Button label="Parar" className="p-button-secondary" icon="pi pi-power-off"></Button>
      </div>

      { _redirect ? <Redirect to="/instance"></Redirect> : null}
    </div>
  );
}
