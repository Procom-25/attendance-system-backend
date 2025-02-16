import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "./models/eventModel.js";

dotenv.config();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Your Provided Event Data
const events = [
  {
    "title": "Hackathon 2025",
    "subtitle": "Showcase your coding and problem-solving skills in this 24-hour hackathon.",
    "badge": "https://example.com/hackathon.png",
    "max_teams": 50,
    "min_team_size": 2,
    "max_team_size": 4,
    "department": "CS",
    "fee": 2000,
    "firstPrize": 50000,
    "secondPrize": 25000,
    "rulebook": {
      "book_url": "https://example.com/hackathon_rulebook.pdf",
      "intro": "A battle of innovation and coding.",
      "round_details": "Round 1: Idea Pitching, Round 2: Prototype Development",
      "rules": "1. No plagiarism. 2. Teamwork is essential.",
      "disqualify_criteria": "Copying ideas or failing to submit on time."
    },
    "registeredTeams": [
      {
        "team_name": "Code Warriors",
        "isApproved": true,
        "team_code": "HACK1234",
        "is_present": true,
        "payment_URL": "https://example.com/payment1.png",
        "register_time": "2025-02-12T08:00:00.000Z",
        "member": [
          {
            "isLeader": true,
            "name": "Michael Smith",
            "phone": "1234567890",
            "email": "michael.smith@example.com",
            "cnic": "12345-6789012-3"
          },
          {
            "isLeader": false,
            "name": "Sarah Johnson",
            "phone": "0987654321",
            "email": "sarah.johnson@example.com",
            "cnic": "98765-4321098-7"
          }
        ]
      }
    ],
    "eventStartTime": "2025-03-15T09:00:00.000Z",
    "eventEndTime": "2025-03-16T09:00:00.000Z"
  },
  {
    "title": "AI Challenge",
    "subtitle": "A competition focused on AI and machine learning projects.",
    "badge": "https://example.com/ai_challenge.png",
    "max_teams": 40,
    "min_team_size": 1,
    "max_team_size": 3,
    "department": "AI",
    "fee": 1800,
    "firstPrize": 40000,
    "secondPrize": 20000,
    "rulebook": {
      "book_url": "https://example.com/ai_rulebook.pdf",
      "intro": "Advance AI with your innovative solutions.",
      "round_details": "Round 1: Model Proposal, Round 2: Model Execution",
      "rules": "1. Original projects only. 2. Cite all data sources.",
      "disqualify_criteria": "Using pre-trained models without modification."
    },
    "registeredTeams": [
      {
        "team_name": "Deep Learners",
        "isApproved": false,
        "team_code": "AI9876",
        "is_present": false,
        "payment_URL": "https://example.com/payment2.png",
        "register_time": "2025-02-18T10:30:00.000Z",
        "member": [
          {
            "isLeader": true,
            "name": "Emily Brown",
            "phone": "1112223333",
            "email": "emily.brown@example.com",
            "cnic": "54321-0987654-2"
          }
        ]
      }
    ],
    "eventStartTime": "2025-03-20T10:00:00.000Z",
    "eventEndTime": "2025-03-20T18:00:00.000Z"
  }
];

// Function to Insert Data into MongoDB
const importData = async () => {
  try {
    await Event.insertMany(events);
    console.log("✅ Data Imported Successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error importing data:", error);
    mongoose.connection.close();
  }
};

// Run the script
importData();
