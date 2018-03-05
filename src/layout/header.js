import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div className="header">
          Шапка проекта
          {this.props.siteName}
          Меню
      </div>
    );
  }
}

export default Header;
