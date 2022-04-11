import Layout from "./components/Layout";
import { RangeStepInput } from "react-range-step-input";
import { useEffect, useRef, useState } from "react";

const music = {
  url: "https://dls.music-fa.com/tagdl/downloads/Benyamin%20Bahadori%20-%20Donya%20Dige%20Melse%20To%20Nadare%20(320).mp3",
  image:
    "https://music-fa.com/wp-content/uploads/2018/11/B-bahadori9835798379857239825740896.jpg",
  title: "متن آهنگ دنیا دیگه مثل تو نداره بهادری",
};

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <Layout>
      <div className="card">
        <div className="card-header">
          <audio src={music.url} ref={audioRef} />
          <img src={music.image} />
          <button className="play" onClick={togglePlay}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-full h-full"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <h2>{music.title}</h2>
        <RangeStepInput />
      </div>
    </Layout>
  );
};
export default App;
