import { Component } from "react";
import DetailPost from "./DetailPost";

class ListPost extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Tại sao nên học ReactJS",
        content: "Học ReactJS để đi làm",
        author: "David"
      },
      {
        id: 2,
        title: "Props trong ReactJS",
        content: "Props giúp truyền dữ liệu từ component con xuống component cha",
        author: "Linda"
      },
      {
        id: 3,
        title: "State trong ReactJS là gì?",
        content: "State giúp trữ trạng thái dữ liệu bên trong một component",
        author: "David"
      }
    ]
  };

  render() {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.8" }}>
        <h2>Danh sách bài viết</h2>
        {this.state.posts.map((post) => (
          <DetailPost key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default ListPost;
