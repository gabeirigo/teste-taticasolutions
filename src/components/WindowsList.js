import React, { useState } from 'react';
import Table from './Table'
// import { Container } from './styles';

export default function LinuxList() {

  let [_imageSelected, _setImageSelected] = useState({ imageName: 'Windows Server 2018' });

  const _columns = [
    { field: "imageName", header: "Nome da imagem - LINUX" }
  ]
  const _imagesList = [
    { imageName: 'Windows Server 2018' },
    { imageName: 'Windows Server 2019' }
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
