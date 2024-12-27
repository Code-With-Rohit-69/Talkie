import React from "react";
import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();
  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-400 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh - 8rem)]">
          <div className="flex h-full rounded-lg overflow-visible relative">
            <div className="w-20 lg:w-72 bg-base-300 flex-shrink-0">
              <Sidebar />
            </div>

            <div className="flex-1 ">
              {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
