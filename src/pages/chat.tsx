import XRayImage from "../components/xrayimage";
import FrontImg from "../assets/images/beauty.jpeg";
import BackImg from "../assets/images/oldman.jpeg";

function ChatPage() {

  return (
    <section className="text-center mb-12 justify-items-center">
      <h2 className="text-3xl font-bold mb-4 text-indigo-800">Hello, I'm NoteNinja AI</h2>
      <p className="text-gray-600 p-3 w-1/2">In the future, you will be able to ask me questions and recieve a response.</p>
      <p className="text-2xl p-2 font-bold text-indigo-500">The chat feature is currently under construction, so check back later</p>
      <p>In the meantime, check out this beautiful woman below. <br/> This image has an x-ray feature, allowing you to see through her clothes by hovering over with the mouse:</p>
      <div className="flex h-200 w-100">
        <XRayImage 
        frontImage={FrontImg} 
        backImage={BackImg}
        shape="circle"
        size={100}>
      </XRayImage>
      </div>
      
    </section>
  );
}

export default ChatPage;