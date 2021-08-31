import React, { Component } from 'react'
import Modal from '../Modal'
import { connect } from 'react-redux'
import history from '../../history'
import { getStream, deleteStream } from '../../actions'
import { Link } from 'react-router-dom'

class StreamDelete extends Component {
    renderActions() {
        return (
            <React.Fragment>
                <button onClick={() => deleteStream(this.props.stream.id)} className="ui negative button">Delete</button>
                <Link to={'/'} className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }
    

    componentDidMount() {
        this.props.getStream(this.props.match.params.id)
    }

    render() {
    return (
        <div>
            <Modal 
                title="Delete Stream" 
                content={this.props.stream ? `Are you sure you want to delete stream with title: ${this.props.stream.title}?` : null}
                actions={ this.renderActions() }
                onDismiss={() => history.push('/') }
            />
        </div>
    )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps, { getStream, deleteStream })(StreamDelete)
