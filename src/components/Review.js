import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import InstanceService from '../services/Instance';
import Table from './Table'
import Message from '../utils/Message';
import { Redirect } from 'react-router-dom';

export default function Review() {

  let instance = useSelector(state => state.global.instanceSelected);
  let [_showMessage, _setShowMessage] = useState(false);
  let [_disableSave, _setDisableSave] = useState(false);
  let [_redirect, _setRedirect] = useState(false);

  const _columns = [
    { field: "name", header: "Nome do volume" },
    { field: "size", header: "Tamanho do volume" },
    { field: "type", header: "Tipo do volume" },
  ]

  useEffect(() => {
    if(!instance.name || !instance.image || !instance.zone || !instance.flavor.hasOwnProperty("flavor") || instance.volume === 0) {
      _setShowMessage(true)
      _setDisableSave(true)
    }
  }, [instance])

  async function _save() {
    let response = await InstanceService.save(instance);
    if (response) {
      _setRedirect(true);
      Message.showSuccess("Isso aí...", "Você cadastrou uma instância com sucesso.");
    }
  }

  return (
    <div className="content">
      {
        _showMessage 
          ? <div className="alert">
              Você esqueceu de preencher alguns campos. Por favor, volte alguns passos e preencha todos os campos.
            </div> 
          : null 
      }
      <Panel header="Revisar" className="w-100">
        <div className="w-100 row-cards">
          <div className="w-50 pr pt pb pl">
            <Card title="Flavor">
              <div className="w-100 mb">
                <label>Nome da instancia: </label>{instance.name}
              </div>
              <div className="w-100 mb">
                <label>Zona / Região: </label>{instance.zone}
              </div>
              <div className="w-100 mb">
                <label>Nome da imagem: </label>{instance.image}
              </div>
            </Card>
          </div>

          <div className="w-50 pr pt pb pl">
            <Card title="Instancia">
              <div className="w-100 mb">
                <label>Nome do flavor: </label>{instance.flavor.flavor}
              </div>
              <div className="w-100 mb">
                <label>Família: </label>{instance.flavor.family}
              </div>
              <div className="w-100 mb">
                <label>CPU: </label>{instance.flavor.cpu}
              </div>
              <div className="w-100 mb">
                <label>Memória (GB): </label>{instance.flavor.memory}
              </div>
            </Card>
          </div>
        </div>

        <div className="w-100 pr pt pb pl">
          <Card title="Volumes">
            <Table
              columns={_columns}
              pagination={true}
              rows={5}
              data={instance.volume} />
          </Card>
        </div>

        <div className="w-100 pr pt pb pl center-button">
         <Button className="p-button-success" label="Salvar" icon="pi pi-check" disabled={_disableSave} onClick={() => _save()}></Button>
        </div>
      </Panel>

      { _redirect ? <Redirect to="/"></Redirect> : null}
    </div>
  );
}
