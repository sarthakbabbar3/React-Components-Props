import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// For Reloading
if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          time="9:00"
          content={faker.lorem.sentences()}
          imgSource={faker.internet.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          time="9:00"
          content={faker.lorem.sentences()}
          imgSource={faker.internet.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          time="10:00"
          content={faker.lorem.sentences()}
          imgSource={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
