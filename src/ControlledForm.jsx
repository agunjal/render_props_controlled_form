import React from 'react'

class ControlledForm extends React.Component {
  state = {
    firstname: {
      value: '',
      required: true
    },
    lastname: {
      value: '',
      required: true
    },
    email: {
      value: '',
      required: true
    },
    favoritecolor: {
      value: '',
      required: true
    }
  }

  isComplete = 0

  handleSubmit = (e) => {
    e.preventDefault()
    alert(JSON.stringify(this.state, null, 2))
  }

  handleChange = (e) => {
    e.preventDefault()

    const arrValues = []

    this.setState({
      [e.target.name]: {
        value: e.target.value,
        required: true
      }
    })

    for (const key in this.state) {
      arrValues.push(this.state[key].value)
    }
    this.isComplete = arrValues.every((element) => '' !== element)
  }

  render() {
    return this.props.render(this.state, {
      onSubmit: this.handleSubmit,
      onChange: this.handleChange,
      isComplete: this.isComplete
    })
  }
}

export default ControlledForm
