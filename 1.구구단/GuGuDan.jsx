const React = require('react');

const GuGuDan = () => {
    // state를 각자 할당해야 한다는 점!
    // 1번째 => state, 2번째 => setState
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (first * second === parseInt(value)) {
            setResult(value + ' 딩동댕');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };

    return (
        <React.Fragment>
            <div>{first} X {second}?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} type="number" value={value} />
                <button>입력</button>
            </form>
            <div id="result">{result}</div>
        </React.Fragment>
    );
}

module.exports = GuGuDan;