/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

/**
 * @author Gabriel Beirigo
 * @param { String } title - { String } Receive a title of table
 * @param { Array } rows - { Number } Number of rows
 * @param { Boolean } search - { Boolean } Receive has search in table
 * @param { Array } pagination - { Boolean } Receive true to pagination
 * @param { Array } columns - { Array } Receives an array with columns
 * @param { Boolean } loading - { Boolean } Receive is loading data
 * @example
 * ```
 * [
 *     {field: "test1", header: "Test 1"},
 *     {field: "test2", header: "Test 2"}
 * ]
 * ```
 * ------------------------------------------------------------------------------------
 * @param { Array } data - { Array } Receives an array with data.
 * @example
 * ```
 * [
 *    {
 *      {column1: value},
 *      {column2: value}
 *    }
 * ]
 * ```
 * ------------------------------------------------------------------------------------
 * @returns Returns a DataTable by PrimeReact lib
 */
export default function Table(props) {

    let [data, setData] = useState([]);
    let [columns, setColumns] = useState([]);
    let [globalFilterInput, setGlobalFilterInput] = useState();

    useEffect(() => {
        setData(props.data);
        setColumns(props.columns);
    }, [props.data])

    function renderColumns() {
        let listColumnsToRender = columns.map((element, index) => {
            return <Column key={element.key || index} field={element.field} header={element.header} style={element.style}></Column>
        })

        return listColumnsToRender;
    }

    function renderHeader() {
        if (props.title || props.add || props.search) {
            return <header className="w-100 header-table">
                <div>
                    <h5 className="m-0">{props.title}</h5>
                </div>

                {   
                    props.search
                        ? <InputText className="sm search-placeholder" placeholder="Pesquise aqui" onChange={(e) => setGlobalFilterInput(e.target.value)}></InputText>
                        : null
                }

                {
                    props.add 
                        ? <Button className="ml-3 p-button-secondary icon-text" icon="fa fa-plus" label="Novo" onClick={props.add}></Button> 
                        : null
                }
            </header>
        }
    }

    return <DataTable
        className={props.size}
        paginator={props.pagination}
        responsive={true}
        globalFilter={globalFilterInput}
        rows={props.rows || 20}
        loading={props.loading}
        value={data}
        rowsPerPageOptions={[5, 10, 20]}
        header={renderHeader()}
        selection={props.selection}
        onSelectionChange={e => props.handleChangeSelection(e.value)}>
        {
            props.selectionMode && props.selectionMode === "single"
                ? <Column selectionMode="single" style={{ width: '40px' }} />
                : props.selectionMode && props.selectionMode === "multiple"
                    ? <Column selectionMode="multiple" style={{ width: '2em' }} />
                    : null
        }

        {renderColumns()}
    </DataTable>
}
