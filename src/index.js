import React, { Fragment } from 'react'
import { render } from 'react-dom'
import ControlledForm from './ControlledForm'
import Fields from './Fields'
import Field from './Field'
import './style.css'

const App = () => (
  <Fragment>
    <ControlledForm
      render={(fields, handlers) => (
        <Fields
          fields={fields}
          handleSubmit={handlers.onSubmit}
          handleChange={handlers.onChange}
          isComplete={handlers.isComplete}
        >
          <Field
            label="First Name"
            name="firstname"
            value={fields.firstname.value}
            required={fields.firstname.required}
            onchange={handlers.onChange}
          />
          <Field
            label="Last Name"
            name="lastname"
            value={fields.lastname.value}
            required={fields.lastname.required}
            onchange={handlers.onChange}
          />
          <Field
            label="Email"
            name="email"
            value={fields.email.value}
            required={fields.email.required}
            onchange={handlers.onChange}
          />
          <Field
            label="Favorite Color"
            name="favoritecolor"
            value={fields.favoritecolor.value}
            required={fields.favoritecolor.required}
            onchange={handlers.onChange}
          />
        </Fields>
      )}
    />
  </Fragment>
)

render(<App />, document.getElementById('root'))
