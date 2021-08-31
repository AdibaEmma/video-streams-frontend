import React, { Component } from 'react'
import Modal from '../Modal'
import { connect } from 'react-redux'
import history from '../../history'
import { getStream, deleteStream } from '../../actions'
import { Link } from 'react-router-dom'

class StreamDelete extends Component {

    componentDidMount() {
        this.props.getStream(this.props.match.params.id)
    }

    renderActions() {
        const { id } = this.props.match.params
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui negative button">Delete</button>
                <Link to={'/'} className="ui button">Cancel</Link>
            </React.Fragment>
        )
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
