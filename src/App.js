import Posts from "./components/Posts";
import Comments from "./components/Comments";

export default function App() {
  return (
    <div>
        <h2>Posts:</h2>
        <Posts/>
        <hr/>
        <h2>Comments:</h2>
        <Comments/>
    </div>
  );
}

