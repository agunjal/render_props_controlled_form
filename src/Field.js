import React from 'react'

function Field(props) {
  return (
    <div className="field">
      <label className="field-label">{props.label}</label>
      <input
        className="field-input"
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onchange}
        required={props.required}
      />
    </div>
  )
}

export default Field
