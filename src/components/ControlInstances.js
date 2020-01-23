import React from 'react';
import { Button } from 'primereact/button';

// import { Container } from './styles';

export default function ControlInstances() {
  
  return (
    <div className="control-instances">
      <div>
        <Button label="Nova instância" icon="pi pi-plus"></Button>
      </div>

      <div>
        <Button label="Iniciar" className="p-button-secondary mr" icon="pi pi-play"></Button>
        <Button label="Reiniciar" className="p-button-secondary mr" icon="pi pi-refresh"></Button>
        <Button label="Parar" className="p-button-secondary" icon="pi pi-power-off"></Button>
      </div>
    </div>
  );
}
