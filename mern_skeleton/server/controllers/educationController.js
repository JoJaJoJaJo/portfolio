import Education from '../models/Education.js';

export const getAllEducations = async (req, res) => {
  try {
    const educations = await Education.find();
    res.json({
      success: true,
      count: educations.length,
      data: educations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

export const getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) {
      return res.status(404).json({
        success: false,
        message: 'Education not found'
      });
    }
    res.json({
      success: true,
      data: education
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

export const createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    const savedEducation = await education.save();
    res.status(201).json({
      success: true,
      message: 'Education created successfully',
      data: savedEducation
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating education',
      error: error.message
    });
  }
};

export const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!education) {
      return res.status(404).json({
        success: false,
        message: 'Education not found'
      });
    }
    res.json({
      success: true,
      message: 'Education updated successfully',
      data: education
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating education',
      error: error.message
    });
  }
};

export const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) {
      return res.status(404).json({
        success: false,
        message: 'Education not found'
      });
    }
    res.json({
      success: true,
      message: 'Education deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

export const deleteAllEducations = async (req, res) => {
  try {
    await Education.deleteMany();
    res.json({
      success: true,
      message: 'All educations deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};