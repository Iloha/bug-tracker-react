import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div className="navbar header">

          <menu className="nav">
              <ul className="nav__list">
                  <li className="nav-item">TODO_list</li>
                  <li className="nav-item">Личный кабинет</li>
              </ul>
          </menu>
      </div>
    );
  }
}

export default Header;
