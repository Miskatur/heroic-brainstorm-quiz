import React from 'react';

const Option = ({ option }) => {
    console.log(option)
    return (
        <div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                    {option}
                </label>
            </div>
        </div>
    );
};

export default Option; 