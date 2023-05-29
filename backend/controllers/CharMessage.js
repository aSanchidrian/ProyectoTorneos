const { ChatMessage, User } = require("../models/models");

exports.getAllMessages = async (req, res) => {
    try {
        const messages = await ChatMessage.findAll({
            include: [
                {
                    model: User,
                    attributes: ['nickname', 'profilePic']
                }
            ],
            order: [['timestamp', 'ASC']]
        });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: 'There was an error.' });
    }
};

exports.postMessage = async (req, res) => {
    const {  message } = req.body;
    let userId =req.user.id;

    try {
        const newMessage = await ChatMessage.create({ userId, message, timestamp: new Date() });
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: 'There was an error.' });
    }
};

exports.updateMessage = async (req, res) => {
    const { id } = req.params;
    const { message } = req.body;

    try {
        const result = await ChatMessage.update({ message }, { where: { id } });

        if (result[0] === 0) {
            return res.status(404).json({ message: 'Message not found.' });
        }

        const updatedMessage = await ChatMessage.findOne({ where: { id }, include: User });
        res.status(200).json(updatedMessage);
    } catch (error) {
        res.status(500).json({ error: 'There was an error.' });
    }
};
