import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedbackForm from "./service/FeedbackForm";
import Header from "./service/Header";
import Image from "./service/Image";
import About from "./service/About";
import CenterText from "./service/Center-text";
import Footer from "./service/Footer";

function App() {
  return (
      <div>
      <Header/>
          <About/>
    <FeedbackForm/>
          <Image/>
          <CenterText/>
          <Footer/>
      </div>

  );
}

export default App;
