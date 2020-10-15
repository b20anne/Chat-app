import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online,
    };
  }
  render() {
    let {online}  = this.state;

    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
          <p className="name">{this.props.name}</p>
          <div className="status"
          onClick={(event) => { this.setState({online: !online})}}>
            <div className={online ? "status-online" : "status-offline"} />
            <p className="status-text">{online ? "online" : "offline"}</p>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool,
};
export default Contact;
