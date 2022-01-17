import React from 'react'

function Fields(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.children}
      <button className="btn" type="submit" disabled={!props.isComplete}>
        Submit
      </button>
    </form>
  )
}

export default Fields
