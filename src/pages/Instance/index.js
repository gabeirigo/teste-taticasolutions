/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BaseContainer from '../../components/BaseContainer'
import { Redirect } from 'react-router';

import { Steps } from 'primereact/steps';
import { Button } from 'primereact/button';

import Image from '../../components/Image';
import InstanceConfig from '../../components/InstanceConfig';
import Volume from '../../components/Volume';
// import Network from '../../components/Network';
// import Configuration from '../../components/Configuration';
import Review from '../../components/Review';
import { UNSELECT_INSTANCE } from '../../store/actions/global';

export default function Instance() {

    const listComponentsToRender = [
        <Image />, // 0
        <InstanceConfig />, // 1
        <Volume />, // 2
        // <Network />, // 3
        // <Configuration />, // 4
        <Review /> // 3
    ]

    const stepsItems = [
        { label: 'Imagem'},
        { label: 'Instância' },
        { label: 'Volume'},
        // { label: 'Rede'},
        // { label: 'Configuração'},
        { label: 'Revisão'}
    ]

    let instanceSelected = useSelector(state => state.global.instanceSelected);
    let [_activeIndex, _setActiveIndex] = useState(0);
    let [_componentToRender, _setComponentToRender] = useState(<Image />)
    let [_redirect, _setRedirect] = useState(false);
    let _dispatch = useDispatch();

    useEffect(() => {
        _setComponentToRender(listComponentsToRender[_activeIndex])
    }, [_activeIndex])
    
    useEffect(() => {
        console.log("INSTANCE", instanceSelected);
    }, [instanceSelected])

    function _prevStep() {
        _setActiveIndex(--_activeIndex);
    }

    function _nextStep() {
        _setActiveIndex(++_activeIndex);
    }

    function _redirectToHome() {
        _dispatch({type: UNSELECT_INSTANCE});
        _setRedirect(true);
    }

    function _renderBackButton() {
        return <Button className="back-button" icon="pi pi-arrow-left" onClick={() => _redirectToHome()}></Button>
    }

    return (
        <BaseContainer backButton={_renderBackButton()} title={instanceSelected.name || "Nova instância"}>
            <div className="instance-content w-100">
                <Steps 
                    model={stepsItems} 
                    activeIndex={_activeIndex}
                    readOnly={false} 
                />

                {_componentToRender}
            </div>
            <div className="step-controls content w-100">
                {
                    _activeIndex > 0 ?  <Button className="p-button-secondary mr" icon="pi pi-angle-double-left
                    " label="Anterior" onClick={() => _prevStep()}></Button> : null
                }

                {
                    _activeIndex < stepsItems.length - 1 ?  <Button className="p-button-secondary" iconPos="right" icon="pi pi-angle-double-right
                    " label="Próximo" onClick={() => _nextStep()}></Button> : null
                }
            </div>
            {_redirect ? <Redirect to="/"></Redirect> : null}
        </BaseContainer>
    );
}
