/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import BaseContainer from '../../components/BaseContainer'
import ControlInstances from '../../components/ControlInstances'
import Table from '../../components/Table'
import InstanceService from "../../services/Instance";
import { Button } from "primereact/button";
import { useDispatch } from 'react-redux';
import { SELECT_INSTANCE } from '../../store/actions/global'
import { Redirect } from 'react-router-dom';
import Message from '../../utils/Message';

export default function Home() {

  const _columns = [
    { field: "name", header: "Nome da instância" },
    { field: "image", header: "Imagem" },
    { field: "zone", header: "Região / Zona" },
    { field: "actions", header: "Actions"}
  ];

  const dispatch = useDispatch();
  let [_redirect, _setRedirect] = useState(false);
  let [_instances, _setInstances] = useState([]);
  let [_dataTable, _setDataTable] = useState([]);

  useEffect(() => {
    _getAllInstances();
  }, [])

  useEffect(() => {
    _buildDataTable(_instances);
  }, [_instances])

  async function _getAllInstances() {
    let response = await InstanceService.getAll();

    if(response) {
      _setInstances(response.data);
    }
  }

  function _selectInstance(instance) {
    dispatch({
      type: SELECT_INSTANCE, 
      payload: instance
    })

    _setRedirect(true);
  }

  async function _delete(instance) {
    let response = await InstanceService.delete(instance);
    if(response) {
      Message.showSuccess("Isso aí", "Você deletou uma instancia com sucesso")
      _getAllInstances();
    }
  }

  function _buildDataTable(instances) {
    let data = instances.map(element => {
      element.actions = (<div>
        <Button className="mr" icon="pi pi-eye" onClick={() => _selectInstance(element)}></Button>
        <Button className="p-button-danger" icon="pi pi-ban" onClick={() => _delete(element)}></Button>
      </div>)

      return element;
    })

    _setDataTable(data);
  }

  return (
    <BaseContainer title="Instâncias">
      <ControlInstances></ControlInstances>

      <div className="content">
        <Table pagination={true} search={true} columns={_columns} data={_dataTable}></Table>
      </div>

      { _redirect ? <Redirect to="/instance"></Redirect> : null}
    </BaseContainer>
  );
}
