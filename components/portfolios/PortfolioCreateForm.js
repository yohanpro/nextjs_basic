import React from 'react';


class PortFolioCreateFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', description: '', language: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const field = event.target.name;
        this.setState({ [field]: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.title);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                <input name="title" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <label>
                    Description:
                 <textarea name="description" value={this.state.description} onChange={this.handleChange} />
                </label>
                <select name="language" value={this.state.select} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <input n type="submit" value="Submit" />
            </form >
        );
    }
}


export default PortFolioCreateFrom;