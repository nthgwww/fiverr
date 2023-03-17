import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link> - TOMMY HO -
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/325424260_569981544672478_8142361025772127812_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gCnuAPHZxDYAX_7jlHF&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfA49kmrORJvd_TxgavVNHKmWTQSDO-_T40G4uu8iCcyTQ&oe=640EE291"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              veritatis mollitia nisi ab excepturi, quis nemo earum quod odio,
              animi illum esse culpa! Sed in hic laboriosam voluptatem facere!
              Voluptate.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/325424260_569981544672478_8142361025772127812_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gCnuAPHZxDYAX_7jlHF&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfA49kmrORJvd_TxgavVNHKmWTQSDO-_T40G4uu8iCcyTQ&oe=640EE291"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              veritatis mollitia nisi ab excepturi, quis nemo earum quod odio,
              animi illum esse culpa! Sed in hic laboriosam voluptatem facere!
              Voluptate.
            </p>
          </div>
          <div className="item">
            <img
              src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/325424260_569981544672478_8142361025772127812_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gCnuAPHZxDYAX_7jlHF&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfA49kmrORJvd_TxgavVNHKmWTQSDO-_T40G4uu8iCcyTQ&oe=640EE291"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              veritatis mollitia nisi ab excepturi, quis nemo earum quod odio,
              animi illum esse culpa! Sed in hic laboriosam voluptatem facere!
              Voluptate.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/325424260_569981544672478_8142361025772127812_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gCnuAPHZxDYAX_7jlHF&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfA49kmrORJvd_TxgavVNHKmWTQSDO-_T40G4uu8iCcyTQ&oe=640EE291"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              veritatis mollitia nisi ab excepturi, quis nemo earum quod odio,
              animi illum esse culpa! Sed in hic laboriosam voluptatem facere!
              Voluptate.
            </p>
          </div>
          <div className="item">
            <img
              src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/325424260_569981544672478_8142361025772127812_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gCnuAPHZxDYAX_7jlHF&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfA49kmrORJvd_TxgavVNHKmWTQSDO-_T40G4uu8iCcyTQ&oe=640EE291"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              veritatis mollitia nisi ab excepturi, quis nemo earum quod odio,
              animi illum esse culpa! Sed in hic laboriosam voluptatem facere!
              Voluptate.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/325424260_569981544672478_8142361025772127812_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gCnuAPHZxDYAX_7jlHF&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfA49kmrORJvd_TxgavVNHKmWTQSDO-_T40G4uu8iCcyTQ&oe=640EE291"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              veritatis mollitia nisi ab excepturi, quis nemo earum quod odio,
              animi illum esse culpa! Sed in hic laboriosam voluptatem facere!
              Voluptate.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
