import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const currentUser = {
  id: 1,
  username: "Ngoc Thong",
  isSeller: true,
};

const message = "This is myy project";

const Messages = () => {
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Tommy Ho</td>
            <td>
              <Link to="/message/123" className="link">{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Tommy Ho</td>
            <td>
              <Link to="/message/123" className="link">{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Tommy Ho</td>
            <td>
              <Link to="/message/123" className="link">{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Tommy Ho</td>
            <td>
              <Link to="/message/123" className="link">{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
