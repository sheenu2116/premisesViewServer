import Leads from "../index";
import generateId from "../../../lib/generateId";

export default {
  createLead: async (_parent, args) => {
    const _id = generateId();

    await Leads.insertOne({
      _id,
      ...args.lead,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return {
      _id,
    };
  },
};
