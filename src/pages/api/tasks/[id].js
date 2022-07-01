import { dbConnect } from "utils/moogose";
import Task from "models/Task";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const task = await Task.findById(id);
        if (!task) return res.status(404).json({ msg: "Task not found" });
        return res.status(200).json(task);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    case "PUT":
      try {
        const task = await Task.findByIdAndUpdate(id, body, {
          new: true,
        });
        if (!task) return res.status(404).json({ msg: "Task not found" });
        return res.status(200).json(task);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    case "DELETE":
      try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask)
          return res.status(400).json({ msg: "Tasks not found" });
        return res.status(204).json();
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }

    default:
      return res.status(400).json({ msg: "this method is not supported" });
  }
};
