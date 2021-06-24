import React, { PureComponent } from 'react';

class Test extends PureComponent {
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {},
        array: [],
    };

    /*
    // 필요없는 것의 렌더링을 막기 위함
    // 필요할 때만 렌더링시킬 수 있음
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.counter !== nextState.counter) {
            return true;
        }
        return false;
    }
    */

    // 또는 Component를 PureComponent로 바꾸면 필요없는 것의 렌더링을 막아줌
    // 그러나 PureComponent는 객체나 배열을 구분하는 것을 어려워하는 편
    // 배열 push를 인식 못하기 때문에 전에 썼던 것처럼 [...array, 값] 이런 식으로 해줘야 함

    onClick = () => {
        this.setState({});
    };

    render() {
        console.log('렌더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        );
    }
}

export default Test;