/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import SectionTitle from './SectionTitle';
import Table from './Table';
import { Slider } from 'primereact/slider';
import Message from '../utils/Message';
import { SELECT_INSTANCE } from '../store/actions/global';

export default function Volume() {

  const _volumeTypes = [
    { label: 'HDD', value: 'HDD' },
    { label: 'SSD', value: 'SSD' }
  ]

  const _columns = [
    { field: "name", header: "Nome do volume" },
    { field: "size", header: "Tamanho do volume" },
    { field: "type", header: "Tipo do volume" },
  ]

  let [_volume, _setVolume] = useState({ size: 15 });
  let instance = useSelector(state => state.global.instanceSelected);
  let dispatch = useDispatch();

  function _appendVolume(volume) {
    if (!volume.name || !volume.type || !volume.size) {
      Message.showError("Ops...", "Por favor, preencha todos os campos para adicionar um volume.");
      return;
    }

    dispatch({ type: SELECT_INSTANCE, payload: { ...instance, volume: [...instance.volume, volume] } })
  }

  return (
    <div className="content">
      <Panel header="Instância">
        <div className="form-group form-inline">
          <label>Nome do volume: </label>
          <input
            className="form-control"
            value={_volume.volume}
            placeholder="ex.: Principal"
            onChange={(e) => { _setVolume({ ..._volume, name: e.target.value }) }} />
        </div>

        <div className="form-group form-inline">
          <label>Zona de disponibilidade: </label>
          <Dropdown
            value={_volume.type}
            options={_volumeTypes}
            onChange={(e) => { _setVolume({ ..._volume, type: e.target.value }) }}
            placeholder="Selecione o tipo do volume" />
        </div>

        <SectionTitle label="Armazenamento"></SectionTitle>

        <div className="form-group form-inline w-100">
          <div className="counter">
            <label>Tamanho (GB): <div className="ml counter-volume-size">{_volume.size}</div></label>
          </div>
          <Slider
            className="w-100"
            min={15}
            max={4096}
            value={_volume.size}
            onChange={(e) => { _setVolume({ ..._volume, size: e.value }) }} />
        </div>

        <div className="w-100 center-button">
          <Button label="Adicionar Volume" icon="pi pi-plus" onClick={() => _appendVolume(_volume)}></Button>
        </div>

        <Table
          columns={_columns}
          pagination={true}
          rows={5}
          data={instance.volume} />
      </Panel>
    </div>
  );
}
