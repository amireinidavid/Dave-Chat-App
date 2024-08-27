import { MdCall } from "react-icons/md";
import { IoArrowBack, IoVideocam } from "react-icons/io5";
import { useAppStore } from "@/pages/store";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { HOST } from "@/utils/constants";
import { getColor } from "@/lib/utils";

const ChatHeader = () => {
  const { closeChat, selectedChatData, selectedChatType } = useAppStore();
  return (
    <div className="h-[10vh] border-b-2 border-[#2f303b] flex items-center justify-between px-20">
      <div className="flex items-center justify-center gap-10 mr-4">
        <button
          className="text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all "
          onClick={closeChat}
        >
          <IoArrowBack className="text-3xl " />
        </button>
      </div>
      <div className="flex gap-5 items-center justify-between  w-full">
        <div className="flex gap-3 items-center justify-center">
          <div className="w-12 h-12 relative ">
            <Avatar className="w-12 h-12 rounded-full overflow-hidden">
              {selectedChatData.image ? (
                <AvatarImage
                  src={`${HOST}/${selectedChatData.image}`}
                  alt="profile"
                  className="object-cover w-full h-full bg-black"
                />
              ) : (
                <div
                  className={`uppercase h-12 w-12 text-xl border-[1px] flex items-center justify-center rounded-full ${getColor(
                    selectedChatData.color
                  )} `}
                >
                  {selectedChatData.firstName
                    ? selectedChatData.firstName.split("").shift()
                    : selectedChatData.email.split("").shift()}
                </div>
              )}
            </Avatar>
          </div>
          <div>
            {selectedChatType === "contact" &&
              `${selectedChatData.firstName}  ${selectedChatData.lastName}`}
          </div>
        </div>
        <div className="flex gap-10">
          <MdCall className="text-secondary-panel-header-icon cursor-pointer text-2xl" />
          <IoVideocam className="text-secondary-panel-header-icon cursor-pointer text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
