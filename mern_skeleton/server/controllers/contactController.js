import Contact from "../models/Contact.js";

const create = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Contact saved", contact });
  } catch (err) {
    res.status(400).json({ error: "Failed to save contact", details: err });
  }
};

const list = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(400).json({ error: "Failed to fetch contacts" });
  }
};

const remove = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(400).json({ error: "Delete failed" });
  }
};

export default { create, list, remove };
