import './App.css';
import { useState, useEffect } from 'react';
import CanvasXpressReact from 'canvasxpress-react';

function App() {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [canvasRef, setCanvasRef] = useState(null);

  const sendMessage = () => {
    setMessageList([...messageList, {text: message, id: messageList.length, user: 'You'}]);
    setMessage('');
    // Mock reply
    setTimeout(() => {
      setMessageList(prev => [...prev, {text: 'This is a mock reply', id: messageList.length + 1, user: 'Bot'}]);
    }, 1000);
  };

  const clearMessages = () => {
    setMessageList([]);
  };

  useEffect(() => {
    if (canvasRef) {
      const ctx = canvasRef.getContext('2d');
      ctx.fillStyle = 'blue';
      ctx.fillRect(10, 10, 100, 100);
    }
  }, [canvasRef]);

  return (
    <div className="App">
      <div className="chatContainer">
        <div className="messages">
          {messageList.map((val, key) => {
            return (
              <div className="messageContainer" key={key}>
                <div className={val.user === 'Bot' ? "messageBot" : "messageIndividual"}>{val.user}: {val.text}</div>
                {val.user === 'Bot' && 
                  <div>
                    <CanvasXpressReact 
                      data={{
                        y: {
                          data: [[1,2,3], [4,5,6], [7,8,9]],
                          smps: ['One', 'Two', 'Three'],
                          vars: ['A', 'B', 'C']
                        }
                      }}
                      config={{graphType: 'Bar'}}
                    />
                    {/* <canvas ref={setCanvasRef} width="200" height="200" /> */}
                  </div>
                }
              </div>
            );
          })}
        </div>
        <div className="messageInputs">
          <input type="text" placeholder="Message..." onChange={(e) => setMessage(e.target.value)} value={message} />
          <button onClick={sendMessage}>Send</button>
          <button onClick={clearMessages}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;