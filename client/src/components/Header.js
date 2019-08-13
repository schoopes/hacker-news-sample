import React, { Component } from "react";
import '../styles/App.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <table id="header-table">
          <tbody>
            <tr>
              <td id="logo-space">
                <a href="https://news.ycombinator.com">
                  <img id="logo-img" src="https://news.ycombinator.com/y18.gif"/>
                </a>
              </td>
              <td id="header">
                <span>
                  <b id="header-name">Hacker News</b>
                  <a id="link" href="/">new | </a>
                  <a id="link" href="/">past | </a>
                  <a id="link" href="/">comments | </a>
                  <a id="link" href="/">ask | </a>
                  <a id="link" href="/">show | </a>
                  <a id="link" href="/">jobs | </a>
                  <a id="link" href="/">submit</a>
                </span>
              </td>
              <td>
                <span>
                  <a id="link" href="/login">login</a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Header;