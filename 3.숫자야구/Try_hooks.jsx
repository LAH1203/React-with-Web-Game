import React, { memo } from 'react';

// PureComponent의 hooks 버전 -> memo
// props를 구조 분해로 { tryInfo } 로 쓸 수 있음 -> 보통 이 방법 사용
const Try = memo((props) => {
    return (
        <li>
            <div>{props.tryInfo.try}</div>
            <div>{props.tryInfo.result}</div>
        </li>
    );
});

export default Try;