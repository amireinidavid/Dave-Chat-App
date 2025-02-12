import Message from "../models/MessagesModel.js";

export const getMessages = async (request, response, next) => {
  try {
    const user1 = request.userId;
    const user2 = request.body.id;

    if (!user1 || !user2) {
      return response.status(400).send("Both User Id are required");
    }

    const messages = await Message.find({
      $or: [
        { sender: user1, recipient: user2 },
        { sender: user2, recipient: user1 },
      ],
    }).sort({ timestamps: 1 });
    return response.status(200).json({ messages });
  } catch (error) {
    console.log({ error });
    return response.status(500).send("Internal server error");
  }
};
