import React from "react";

export const Filter = (props) => {
    const {filter, setFilter} = props;
    const filterChange = e => setFilter(e.target.value);
    return (
    <form id='todoradio'>
        <input type="radio"  onChange = {filterChange} value = "all" checked = {filter === 'all'} /><label>すべて</label>
        <input type="radio"  onChange = {filterChange} value = "working" checked = {filter === 'working'} /><label>作業中</label>
        <input type="radio"  onChange = {filterChange} value = "complete" checked = {filter === 'complete'}/><label>完了</label>
    </form>
    );
}