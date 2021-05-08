import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.firstName() + " " + faker.name.lastName()}
        time="9:00"
        content={faker.lorem.sentences()}
        imgSource={faker.internet.avatar()}
      />
      <CommentDetail
        author={faker.name.firstName() + " " + faker.name.lastName()}
        time="10:00"
        content={faker.lorem.sentences()}
        imgSource={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.firstName() + " " + faker.name.lastName()}
        time="11:00"
        content={faker.lorem.sentences()}
        imgSource={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
