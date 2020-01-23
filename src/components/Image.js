/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Panel } from 'primereact/panel';
import { RadioButton } from 'primereact/radiobutton';
import LinuxList from './LinuxList';
import WindowsList from './WindowsList';

export default function Image() {

  let [_os, _setOs] = useState("windows");

  return (
    <div className="content">
      <Panel header="Imagem" className="w-100">
        <div className="image-panel w-100">
          <div className="w-30 os-selection">
            <h3 className="w-100 mt mb">Sistema operacional:</h3>

            <div className="selections">
              <div className="w-50">
                <img src="assets/img/windows.png" alt="Windows" width="80"></img >
                <div className="w-100 mt">
                  <label className="mr">Windows</label>
                  <RadioButton value="windows" name="windowsOS" onChange={(e) => _setOs(e.value)} checked={_os === 'windows'} />
                </div>
              </div>

              <div className="w-50">
                <img src="assets/img/linux.png" alt="linux" width="80"></img>
                <div className="w-100 mt">
                  <label className="mr">Linux</label>
                  <RadioButton value="linux" name="linuxOS" onChange={(e) => _setOs(e.value)} checked={_os === 'linux'} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-70">
            {_os === "linux" ? <LinuxList></LinuxList> : <WindowsList></WindowsList> }
          </div>
        </div>
      </Panel>
    </div>
  );
}
