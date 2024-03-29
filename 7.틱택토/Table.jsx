import React, { memo } from 'react';
import Tr from './Tr';

const Table = memo(({ onClick, tableData, dispatch }) => {
    return (
        <table>
            {Array(tableData.length).fill().map((tr, i) => (<Tr key={i} rowIndex={i} rowData={tableData[i]} dispatch={dispatch} />))}
        </table>
    );
});

export default Table;