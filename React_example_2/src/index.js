import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = function(){

    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author = "Anthony"
                    image = {faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author = "Brandon"
                    image = {faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author = "James"
                    image = {faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author = "David"
                    image = {faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(
  <App />, document.querySelector("#root")
);