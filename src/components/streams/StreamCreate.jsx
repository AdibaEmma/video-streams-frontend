import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
export class StreamCreate extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <Field name="title" />
                    <Field name="description" />
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate)

