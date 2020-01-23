/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from './Table'
import { SELECT_INSTANCE } from '../store/actions/global';
// import { Container } from './styles';

export default function LinuxList() {
  
  let instance = useSelector(state => state.global.instanceSelected);
  let dispatch = useDispatch();
  let [_imageSelected, _setImageSelected] = useState({ imageName: 'Ubuntu Server 18.04LTS' });

  const _columns = [
    { field: "imageName", header: "Nome da imagem - LINUX" }
  ]
  const _imagesList = [
    { imageName: 'Ubuntu Server 18.04LTS' },
    { imageName: 'CentOS 7.6' },
    { imageName: 'OpenSuse Leap 15.0' }
  ]

  useEffect(() => {
    dispatch({type: SELECT_INSTANCE, payload: {...instance, image: _imageSelected.imageName}})
  }, [_imageSelected])

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
