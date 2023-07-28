import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" abouttext="About TextUtils" />

      <div>
        <Aboutus />
      </div>
    </>
  );
}

export default App;
