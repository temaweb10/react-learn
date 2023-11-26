import { useEffect, useRef, useState } from "react";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "aa", body: "Desc1" },
    { id: 2, title: "rr", body: "Desc1" },
    { id: 3, title: "bb", body: "Desc3" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQueary, SetSearchQueary] = useState("");
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  //получает пост из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0px" }} />
      <div>
        <MyInput
          value={searchQueary}
          placeholder={"Поиск"}
          onChange={(e) => SetSearchQueary(e.target.value)}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={"Сортировка"}
          option={[
            { value: "title", name: "По Названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>

      {posts.length ? (
        <PostList remove={removePost} posts={posts} title={"Посты про JS"} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не были найдены!</h1>
      )}
    </div>
  );
}

export default App;
