import React, { useState } from 'react';
import Table from './Table'
// import { Container } from './styles';

export default function LinuxList() {

  let [_imageSelected, _setImageSelected] = useState({ imageName: 'Ubuntu Server 18.04LTS' });

  const _columns = [
    { field: "imageName", header: "Nome da imagem - LINUX" }
  ]
  const _imagesList = [
    { imageName: 'Ubuntu Server 18.04LTS' },
    { imageName: 'CentOS 7.6' },
    { imageName: 'OpenSuse Leap 15.0' }
  ]

  return (
    <Table 
      selectionMode="single" 
      selection={_imageSelected} 
      handleChangeSelection={_setImageSelected} 
      search={true} 
      columns={_columns} 
      pagination={true}
      data={_imagesList} />
  );
}
