import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment'
import Comments from './Comments'
import CommentsContainer from './CommentsContainer'

class App extends React.Component {

  render() {
    let comments = [
      {
        'id':0,
        'parentId': null,
        'content': '谢谢分享'
      },
      {
        'id':1,
        'parentId':0,
        'content': '赞一个'
      },
      {
        'id':2,
        'parentId':0,
        'content': '顶'
      },
      {
        'id':3,
        'parentId':0,
        'content': '已点赞'
      },
      {
        'id':4,
        'parentId':3,
        'content': '我也是哦'
      },
      {
        'id':5,
        'parentId':0,
        'content': '加油！！！'
      },
      {
        'id':6,
        'parentId':4,
        'content': '可以啊'
      },
      {
        'id':7,
        'parentId': null,
        'content': '路过'
      } 
    ]

    return (
      <div className='container'>
        <h1>React Nested Comments Demo</h1>
        <CommentsContainer rootId={null} comments={comments}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));