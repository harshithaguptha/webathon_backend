const Sitter = require("../models/sitterModel");

const saveSitter = async (req, res) => {
  try {
    // Extract the data from the request body
    const {
      name,
      mobileNo,
      experience,
      emergencyContact,
      address,
      availability,
      overnightAvailability,
      services,
      otherService,
    } = req.body;

    // Create a new Sitter object with the extracted data
    const newSitter = new Sitter({
      name,
      mobileNo,
      experience,
      emergencyContact,
      address,
      availability,
      overnightAvailability,
      services,
      otherService,
    });

    // Save the new sitter to the database
    await newSitter.save();

    // Respond with a success message
    res.status(201).json({
      success: true,
      message: "Sitter saved successfully",
      sitter: newSitter,
    });
  } catch (error) {
    // If an error occurs, respond with an error message
    console.error("Error saving sitter:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  saveSitter,
};
