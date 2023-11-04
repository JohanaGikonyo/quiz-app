import React, { Component } from 'react';
import { DirectLine } from 'botframework-webchat';

class Chatbot extends Component {
  constructor(props) {
    super(props);

    // You'll need to obtain your Direct Line secret from Azure Bot Service.
    this.directLine = new DirectLine({ token: 'YOUR_DIRECT_LINE_SECRET' });

    this.state = {
      messages: [],
      userInput: '',
    };
  }

  componentDidMount() {
    this.directLine.activity$.subscribe(activity => {
      if (activity.type === 'message') {
        this.setState(prevState => ({
          messages: [...prevState.messages, { text: activity.text, fromUser: false }],
        }));
      }
    });
  }

  handleUserInput = event => {
    this.setState({ userInput: event.target.value });
  };

  handleSendMessage = async () => {
    const { userInput } = this.state;
    if (userInput.trim() !== '') {
      this.setState(prevState => ({
        messages: [...prevState.messages, { text: userInput, fromUser: true }],
        userInput: '',
      }));

      await this.directLine.postActivity({
        from: { id: 'user', name: 'User' },
        type: 'message',
        text: userInput,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="chat-window">
          {this.state.messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.fromUser ? 'user' : 'bot'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleUserInput}
            placeholder="Type a message..."
          />
          <button onClick={this.handleSendMessage}>Send</button>
        </div>
      </div>
    );
  }
}

export default Chatbot;
