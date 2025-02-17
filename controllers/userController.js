import Event from "../models/eventModel.js";
import isInsideAnyArea from "../utils/verifyLocation.js";

export const verify = async (req, res) => {
  try {
    const { teamcode, latitude, longitude } = req.body;
    if (!teamcode || longitude == null || latitude == null) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const currentTime = new Date();
    const event = await Event.findOne({
      "registeredTeams.team_code": teamcode,
      // eventStartTime: { $lte: currentTime },
      // eventEndTime: { $gte: currentTime },
    });

    if (!event) {
      return res
        .status(400)
        .json({ message: "Invalid Team Code or event has not started yet" });
    }

    const teamIndex = event.registeredTeams.findIndex(
      (team) => team.team_code === teamcode
    );
   
    if (teamIndex === -1) {
      return res.status(404).json({ message: "Team Not Found" });
    }
    console.log(latitude,longitude)
    const isInside = await isInsideAnyArea(latitude, longitude);

    if (!isInside) {
      return res
        .status(403)
        .json({ message: "You are not inside the valid event location" });
    }

    event.registeredTeams[teamIndex].is_present = true;
    await event.save();

    return res
      .status(200)
      .json({ message: "Team marked as present successfully" });
  } catch (error) {
    console.error("Error verifying team presence:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};