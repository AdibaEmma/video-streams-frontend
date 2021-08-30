import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStream, editStream } from '../../actions'
import StreamForm from './StreamForm'
export class StreamEdit extends Component {

    componentDidMount() {
        this.props.getStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        console.log(formValues);
    }

    render() {

        if(!this.props.stream) {
            return <div>No Stream</div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm initialValues={{ title: `${this.props.stream.title}`, description: `${this.props.stream.description}` }} onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { getStream, editStream })(StreamEdit)
