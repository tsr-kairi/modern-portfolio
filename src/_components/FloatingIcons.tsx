import { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare, Bot } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function FloatingIcons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{text: string, isUser: boolean}>>([{
    text: "Hello! I'm your AI assistant. How can I help you today?",
    isUser: false
  }]);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = '9127301592';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');

    // Add WhatsApp link to clipboard
    navigator.clipboard.writeText(`https://wa.me/${phoneNumber}`);
    
    // Show toast notification
    toast.success(`WhatsApp link copied to clipboard: https://wa.me/${phoneNumber}`);
    
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message
    const userMessage = { text: message, isUser: true };
    setChatMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { 
        text: "Thank you for your message! I'm a simple AI assistant. For real inquiries, please contact me through the contact form.", 
        isUser: false 
      };
      setChatMessages(prev => [...prev, aiResponse]);
    }, 1000);
    
    setMessage('');
  };

  return (
    <div className="fixed right-6 bottom-6 flex flex-col items-end space-y-4 z-50">
      {/* AI Chat Popup */}
      {showAIChat && (
        <div className="bg-black bg-opacity-90 border border-gray-700 rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="bg-gray-900 p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="text-white font-medium">AI Assistant</h3>
            <button 
              onClick={() => setShowAIChat(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {chatMessages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs p-3 rounded-lg ${
                    msg.isUser 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-gray-800 text-white rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
      
      {/* Floating Action Buttons */}
      <div className="flex flex-col space-y-3">
        {/* AI Assistant Button */}
        <button
          onClick={() => setShowAIChat(!showAIChat)}
          className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
          aria-label="AI Assistant"
        >
          <Bot size={24} />
        </button>
        
        {/* WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={24} />
        </button>
        
        {/* Scroll to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-gray-800 bg-opacity-80 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        )}
      </div>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1f2937',
            color: '#fff',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: '#111827',
            },
          },
        }}
      />
    </div>
  );
};
