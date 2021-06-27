import React from 'react';

export const RadioButtonForm = (props) => {
    const {radioButtonForm, setRadioButtonForm} = props;
    const receiveRadioButtonsValue = e => setRadioButtonForm(e.target.value);
    return (
        <form>
            <input type='radio' onChange={receiveRadioButtonsValue} value='all' checked={radioButtonForm === 'all'} /><label>すべて</label>
            <input type='radio' onChange={receiveRadioButtonsValue} value='working' checked={radioButtonForm === 'working'} /><label>作業中</label>
            <input type='radio' onChange={receiveRadioButtonsValue} value='complete' checked={radioButtonForm === 'complete'}/><label>完了</label>
        </form>
    );
}