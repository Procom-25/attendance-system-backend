import Event from "../models/eventModel.js";
import isInsideAnyArea from "../utils/verifyLocation.js";

export const getTopEvents = async (req, res) => {
    const { x } = req.params;
    const limit = parseInt(x, 10); 

    if (isNaN(limit) || limit <= 0) {
        return res.status(400).json({ message: "Invalid number of events requested" });
    }

    try {
        const events = await Event.find({})
            .sort({ eventStartTime: -1 })
            .limit(limit);

        return res.status(200).json(events);
    } catch (error) {
        console.error("Error fetching top events:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export default getTopEvents;
