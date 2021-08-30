import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStream } from '../../actions'
export class StreamEdit extends Component {

    componentDidMount() {
        this.props.getStream(this.props.match.params.id)
    }

    render() {
        console.log(this.props);

        if(!this.props.stream) {
            return <div>No Stream</div>
        }
        return (
            <div>
                {this.props.stream.title}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { getStream })(StreamEdit)
