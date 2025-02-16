import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  isLeader: { type: Boolean, required: true },
  name: { type: String, default: "" },
  phone: { type: String, default: "" },
  email: { type: String, default: "" },
  cnic: { type: String, default: "" },
});

const teamSchema = new mongoose.Schema({
  team_name: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
  member: { type: [memberSchema], required: true },
  team_code: { type: String, required: true, unique: true }, //this will be the code which will be emailed to everyone
  is_present: { type: Boolean, default: false },
  payment_URL: { type: String, required: true },
  register_time: { type: Date, default: Date.now },
});

const rulebookSchema = new mongoose.Schema({
  book_url: { type: String, required: true },
  intro: { type: String, required: true },
  round_details: { type: String, required: true },
  rules: { type: String, required: true },
  disqualify_criteria: { type: String, required: true },
});

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  badge: { type: String, required: true },
  max_teams: { type: Number, required: true },
  min_team_size: { type: Number, required: true },
  max_team_size: { type: Number, required: true },
  department: { type: String, required: true },
  fee: { type: Number, required: true },
  firstPrize: { type: Number, required: true },
  secondPrize: { type: Number, required: true },
  rulebook: { type: rulebookSchema, required: true },
  registeredTeams: { type: [teamSchema], default: [] },
  eventStartTime: { type: Date, required: true },
  eventEndTime: { type: Date, required: true },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
