import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import useFollow from "./hooks/useFollow";
import useUnFollow from "./hooks/useUnFollow";

const FollowButton = () => {
  const [isFollowing, toggleIsFollowing] = useState(false);
  const { follow } = useFollow();
  const { unFollow } = useUnFollow();

  const handleClick = async () => {
    if (!isFollowing) {
      const { isSuccess } = await follow("cyberconnect");

      if (isSuccess) toggleIsFollowing(true);
    } else {
      const { isSuccess } = await unFollow("cyberconnect");

      if (isSuccess) toggleIsFollowing(false);
    }
  };

  return (
    <button className="follow-btn" onClick={handleClick}>
      {isFollowing ? "UnFollow" : "Follow"}
    </button>
  );
};

function App() {
  return (
    <div className="App">
      <div className="item">
        <img className="logo" src="/logo.png" alt="logo" />
        <span className="name">CyberConnect</span>
        <FollowButton />
      </div>
    </div>
  );
}

export default App;
