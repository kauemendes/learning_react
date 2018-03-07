import React, {Component} from 'react'

class Field extends Component {

    constructor(props) {
        super(props)
        this.state = { value: undefined }
        this.handleChange = this.handleChange.bind(this)
        this.logChange = this.logChange.bind(this)
    }

    // vai vir um evento
    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    logChange(event) {
        console.log(event.target.value)
    }

    // obrigatorio
    render() {
        return (
            <div>
                <input type='text' value={this.state.value} />
                <br />
                <input type='text' onChange={this.handleChange} value={this.state.value} />
            </div>
        )
    }
}

export default Field
