import React, {Component} from "react";
import "./ItemAddForm.css";

export default class ItemAddForm extends Component {
    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {
        return (
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmitForm}>
                <input type="text"
                       className="form-control"
                       placeholder="What i need to do: "
                       onChange={this.onLabelChange}
                       value={this.state.label}
                />
                <button className="btn btn-outline-secondary">
                    Add more
                </button>
            </form>
        )
    }
}
