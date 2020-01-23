/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from './Table'
import { SELECT_INSTANCE } from '../store/actions/global';
// import { Container } from './styles';

export default function WindowsList() {

  const _columns = [
    { field: "imageName", header: "Nome da imagem - WINDOWS" }
  ]
  const _imagesList = [
    { imageName: 'Windows Server 2018' },
    { imageName: 'Windows Server 2019' }
  ]

  let instance = useSelector(state => state.global.instanceSelected);
  let dispatch = useDispatch();
  let [_imageSelected, _setImageSelected] = useState({ imageName: 'Windows Server 2018' });

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
