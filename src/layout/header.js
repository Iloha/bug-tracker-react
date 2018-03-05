import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div className="header">
          Шапка проекта
          {this.props.siteName}
          <span className="header__logo">Логотип</span>
          <menu className="nav">
              <ul className="nav__list">
                  <li className="nav-item">Список багов</li>
                  <li className="nav-item">Личный кабинет</li>
              </ul>

          </menu>
      </div>
    );
  }
}

export default Header;
