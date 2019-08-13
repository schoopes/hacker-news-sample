import React from 'react';
import axios from "axios";

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  getLinks() {
    axios.get("http:localhost:4000/")
  }

  render() {
    return (
      <table id="itemlist">
        <tbody>
        </tbody>
      </table>
    )
  }
}