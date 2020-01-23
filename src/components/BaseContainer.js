import React from 'react';
import { Toolbar } from 'primereact/toolbar';

// import { Container } from './styles';

export default function BaseContainer({title, children, backButton }) {
  return (
    <div className="base-container">
        <Toolbar className="toolbar">
          <div className="p-toolbar-group-left">
              { backButton ? backButton : null }
              <h3>{ title }</h3>
          </div>
        </Toolbar>

        { children }
    </div>
  );
}
