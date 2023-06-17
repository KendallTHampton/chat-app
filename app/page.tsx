'use client'
import {useState} from 'react'
import axios from 'axios';
import TypingAnimation from './components/TypingAnimation';



export default function Home() {

  // This is the schema for the message log
  type MessageType = {
    type: string; // Will be either 'user' or 'bot'
    message: string; // The message to be displayed
  };

  const [inputValue, setInputValue] = useState('')
  const [messageLog, setMessageLog] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false)



  //* API CALL TO OPEN AI 
  const sendMessage = (message: string) => {
    const url = 'https://api.openai.com/v1/chat/completions'
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
    }
    const data = {
      'model': 'gpt-3.5-turbo',
      messages: [{'role': 'user', 'content': message}],
    };
    setIsLoading(true)
    // axios post params:  1. Url 2. req.body 3. req.headers 
    // Then from the data we sent in the body, we get the response
    axios.post(url, data, {headers: headers}).then((res) => {
      const responseData = res.data
      setMessageLog((prevMessages) => [...prevMessages, {type: 'bot', message: responseData.choices[0].message.content}])
      setIsLoading(false)
      setInputValue('')
    }).catch((err) => {
      console.log(err)
      setIsLoading(false)
    })
  }

  //* HANDLE SUBMIT FUNCTION
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setMessageLog((prevMessages: MessageType[]) => [...prevMessages, {type: 'user', message: inputValue}]);

    sendMessage(inputValue)


    setInputValue('');
  };




  return (
    <>
      <div className="h-[90vh] sm:h-screen pt-20 sm:pt-16">
        {/* Container */}
        <div className='flex flex-col justify-between gap-10 px-6 md:px-24 sm:px-12 h-full'>
          {/* Message Box */}
          <div className='w-full flex-1  shadow-lg shadow-[#0d0d0d] rounded-lg p-4 overflow-y-scroll flex flex-col items-start scroll'>
            {messageLog.map((message: MessageType, index: number) => (
              <div key={index} className={`mb-2 flex w-full ${message.type === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className='flex items-center gap-2 max-w-2/5'>
                  <div className='text-xs md:text-sm  text-zinc-500'>
                    {message.type === 'user' ? 'User:' : 'Bot:'}
                  </div>
                  <p
                    style={{whiteSpace: 'pre-line'}}
                    className={`border-1 p-3 rounded-lg max-w-sm text-xs sm:text-sm md:text-md
            ${message.type === 'user' ? 'bg-sky-600 text-white' : 'bg-neutral-700 text-white'} 
            `}
                  >
                    {message.message}
                  </p>
                </div>
              </div>
            ))}


            {isLoading && (
              <div className='flex justify-end mb-2 w-full'>
                <div className='flex items-center gap-2 max-w-2/5'>
                  <div className='text-sm text-zinc-500'>Bot: </div>
                  <div className='border-1 bg-neutral-700 rounded-lg p-3 text-white'>
                    <TypingAnimation />
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Input Container */}
          <div className='mb-4'>
            <form className='flex flex-col sm:flex-row items-stretch  gap-2' onSubmit={handleSubmit}>
              <input
                className='flex-grow p-2 border-2 opacity-90 text-black rounded-lg w-full'
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Type Your Message Here' />
              <button
                className='bg-emerald-600 text-white p-2 rounded-lg w-full sm:w-auto'
                type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
