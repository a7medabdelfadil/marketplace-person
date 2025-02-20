/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from "react";
import { Search, Mic, Smile, Paperclip } from "lucide-react";
import Container from "~/_components/Container";
import { IoIosVideocam } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations";
import { Text } from "~/_components/Text";

const ChatInterface = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  
  const sidebarChats = [
    { id: 1, name: "Claire", message: "Haha oh man", time: "10:14 pm" },
    { id: 2, name: "Joe", message: "Haha that's terrifying 😅", time: "07:38 pm" },
    { id: 3, name: "Optimus prime", message: "My name is Optimus prime 😅", time: "11:45" },
    { id: 4, name: "Progate Rwanda Develo...", message: "~TheDime: This is amazing...", time: "07:40" }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle file upload logic here
      console.log('File selected:', file.name);
    }
  };

  return (
    <Container className="flex h-[800px]">
      {/* Sidebar */}
      <div className="w-80 border-r bg-bgPrimary">
        <div className="p-4">
          <div className="flex items-center w-full justify-between py-4">
            <h1 className="text-xl font-bold mb-2">{t.chats}</h1>
            <button className="p-1 rounded-full bg-primary2"><FiPlus color="white" size={25} /></button>
          </div>
          
          {/* Tabs */}
          <div className="flex space-x-4 mb-4 font-semibold text-sm">
            <button className="text-primary2 ml-4">{t.all}</button>
            <button className="text-textSecondary">{t.unread}</button>
            <button className="text-textSecondary">{t.read}</button>
            <button className="text-textSecondary">{t.favorite}</button>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="w-full p-2 pl-8 rounded-lg outline-none text-sm"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          </div>

          {/* Chat list */}
          <div className="space-y-2">
            {sidebarChats.map((chat) => (
              <div key={chat.id} className="flex items-center p-2 hover:bg-gray-100 shadow-lg rounded-full cursor-pointer">
                <div className="w-10 h-10  rounded-full mr-3">
                  <img src="/images/chatProf.png" className="rounded-full w-10 h-10" alt="#" />
                </div>
                <div className="mr-2 flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{chat.name}</span>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{chat.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b bg-comment flex items-center justify-between">
          <div className="flex items-center space-x-4">
          <div className="w-10 h-10  rounded-full mr-3">
                  <img src="/images/chatProf.png" className="rounded-full w-10 h-10" alt="#" />
                </div>
            <div>
              <Text font="medium" className="mr-4">Joe</Text>
              <span className="text-sm mr-4 text-primary2 font-medium">• {t.online}</span>
            </div>
          </div>
          <div className="flex space-x-4 items-center text-gray-600">
            <FaPhone size={16} className="ml-4 lg:w-5 lg:h-5" />
            <IoIosVideocam size={20} className="lg:w-7 lg:h-6" />
            <div className="w-[1px] h-7 bg-[#979FA7]"/>
            <Search size={20} className="lg:w-7 lg:h-6" />
            <HiOutlineDotsVertical size={20} className="lg:w-7 lg:h-6" />
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 relative p-4 overflow-y-auto space-y-4 bg-[url(/images/chatBG.png)] bg-cover bg-fixed">
        <div className="absolute inset-0 bg-bgPrimary opacity-80"/>
          <div className="flex justify-start max-w-md">
            <div className="bg-[#E7F0FC] text-black font-medium p-3 rounded-lg relative">
              <p>Hey brother, are you still a fan of UI design?</p>
              <p>Can I show you something?</p>
              <div className="flex items-center justify-end mt-1 space-x-1">
                <span className="text-xs text-gray-500">17:07</span>
              </div>
            </div>
          </div>
          
          <div className={`flex justify-end max-w-md ${language === 'ar' ? 'mr-auto' : 'ml-auto'} `}>
            <div className="bg-primary text-black font-medium p-3 rounded-lg relative">
              <p>Hey Regis, absolutely</p>
              <div className="flex items-center justify-end mt-1 space-x-1">
                <span className="text-xs opacity-75">17:08</span>
              </div>
            </div>
          </div>
        </div>

        {/* Input area */}
        <div className="p-4 border-t bg-bgPrimary">
          <div className="flex items-center space-x-2">
            {/* File input hidden but triggered by Paperclip icon */}
            <input 
              type="file" 
              id="file-upload" 
              className="hidden" 
              onChange={handleFileUpload}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Paperclip className="h-6 w-6 text-gray-400 hover:text-gray-600" />
            </label>
            
            <input
              type="text"
              placeholder={t.typeMessage}
              className="flex-1 p-2 rounded-lg  outline-none"
            />
            
            <button 
              className="text-gray-400 hover:text-gray-600"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <Smile className="h-6 w-6" />
            </button>
            
            <button className="text-gray-400 hover:text-gray-600">
              <Mic className="h-6 w-6" />
            </button>
          </div>

          {/* Emoji picker popup */}
          {showEmojiPicker && (
            <div className="absolute bottom-20 right-4 bg-white p-4 rounded-lg shadow-lg border">
              <div className="grid grid-cols-8 gap-2">
                {/* Sample emojis - you'd typically use an emoji picker library here */}
                {['😊', '😂', '❤️', '👍', '🎉', '🔥', '👋', '😎'].map((emoji, index) => (
                  <button 
                    key={index}
                    className="text-xl hover:bg-gray-100 p-1 rounded"
                    onClick={() => {
                      // Handle emoji selection
                      console.log('Selected emoji:', emoji);
                    }}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ChatInterface;