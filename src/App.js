import {Link, Route, Routes} from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import CommentsPage from "./pages/CommentsPage";
import PostsCurrentComment from "./components/post/PostsCurrentComment";
import AlbumsPage from "./pages/AlbumsPage";

export default function App() {
  return (
    <div>
      <div>
        <h2>MENU</h2>
      <div><Link to={'/todos'}>TODOS</Link></div>
      <div><Link to={'/albums'}>ALBUMS</Link></div>
      <div><Link to={'/comments'}>COMMENTS</Link></div>
      </div>
      <div>
        <h2>CONTENT</h2>

        <Routes>
          <Route path={'/todos'} element={<TodosPage/>}/>
          <Route path={'/albums'} element={<AlbumsPage/>}/>
          <Route path={'/comments'} element={<CommentsPage/>}>
              <Route path={':postId'} element={<PostsCurrentComment/>}/>
          </Route>
        </Routes>
      </div>



    </div>
  );
}

