import React, { useState, useCallback, useContext, memo } from 'react';
import { TableContext } from './MineSearch';
import { START_GAME } from './MineSearch';

const Form = () => {
    const [row, setRow] = useState(10);
    const [cell, setCell] = useState(10);
    const [mine, setMine] = useState(20);
    const { dispatch } = useContext(TableContext);

    const onChangeRow = useCallback((e) => {
        setRow(e.target.value);
    });
    const onChangeCell = useCallback((e) => {
        setCell(e.target.value);
    });
    const onChangeMine = useCallback((e) => {
        setMine(e.target.value);
    });

    const onClickBtn = useCallback(() => {
        dispatch({ type: START_GAME, row, cell, mine });
    }, [row, cell, mine]);

    return (
        <div>
            <label>세로줄 : </label>
            <input type="number" placeholder="세로" value={row} onChange={onChangeRow} />
            <br />
            <label>가로줄 : </label>
            <input type="number" placeholder="가로" value={cell} onChange={onChangeCell} />
            <br />
            <label>지뢰수 : </label>
            <input type="number" placeholder="지뢰" value={mine} onChange={onChangeMine} />
            <button onClick={onClickBtn}>시작</button>
            <br />
            <br />
        </div>
    );
};

export default memo(Form);