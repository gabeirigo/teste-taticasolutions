import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Panel} from 'primereact/panel';
import Table from '../components/Table';
import FlavorInstance from '../services/Flavor';
import {Dropdown} from 'primereact/dropdown';
import { SELECT_INSTANCE } from '../store/actions/global';

export default function InstanceConfig() {


  const _columns = [
    { field: "family", header: "Família" },
    { field: "flavor", header: "Flavor" },
    { field: "cpu", header: "CPU" },
    { field: "memory", header: "Memória (GB)" }
  ]

  const _zones = [
    {label: 'Leste dos EUA (Ohio)', value: 'us-east-2'},
    {label: 'Leste dos EUA (Norte da Virgínia)	', value: 'us-east-1'},
    {label: 'Oeste dos EUA (Norte da Califórnia)', value: 'us-west-1'},
    {label: 'Oeste dos EUA (Oregon)', value: 'us-west-2'}
  ]

  let instance = useSelector(state => state.global.instanceSelected);
  let [_flavor, _setFlavor] = useState();
  let [_list, _setList] = useState()
  let dispatch = useDispatch();

  useEffect(() => {
    _getAllFlavors();
  }, [])

  async function _getAllFlavors() {
    let response = await FlavorInstance.getAll()
    if (response) _setList(response.data);
  }

  return (
    <div className="content">
      <Panel header="Instância">
          <div className="form-group form-inline">
            <label>Nome da instância: </label>
            <input 
              className="form-control" 
              value={instance.name}
              placeholder="ex.: Server Master"
              onChange={(e) => { dispatch({type: SELECT_INSTANCE, payload: {...instance, name: e.target.value}})}} />
          </div>

          <div className="form-group form-inline">
            <label>Zona de disponibilidade: </label>
            <Dropdown 
              value={instance.zone}
              options={_zones} 
              onChange={(e) => { dispatch({type: SELECT_INSTANCE, payload: {...instance, zone: e.value}})}} 
              placeholder="Select a City"/>
          </div>

          <Table 
            selectionMode="single" 
            selection={_flavor} 
            handleChangeSelection={_setFlavor} 
            search={true} 
            columns={_columns} 
            pagination={true}
            rows={5}
            data={_list} />
      </Panel>
    </div>
  );
}
