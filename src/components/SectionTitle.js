/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button } from "primereact/button";
/**
 * @param { String } label - { String } Receive label of title
 * @param { String } size - { String } Receive two values: "normal" or "small". Tha "normal" is default value
 * @param { Function } buttons - { Function } Receive function to render buttons
 */
export default function SectionTitle(props) {

    let [marginRow, setMarginRow] = useState("10px 0 16px");

    return <div>
          <div className="section-title">
                <div className="w-100 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-start">
                        {props.back ? <Button className="back-button mr-2" icon="fas fa-arrow-left" onClick={props.back}></Button> : null }
                        <h4 className={(!props.button) ? "pt-1 pb-1" : null} style={{fontSize: props.size === "small" ? "0.9rem" : "1.2rem"}}>{props.label}</h4>
                    </div>
                    <div className="buttons-section-title">
                        {props.buttons ? props.buttons() : null}
                    </div>
                </div>
                <div className="w-100">
                    <hr />
                </div>
            </div>
    </div>;

}
