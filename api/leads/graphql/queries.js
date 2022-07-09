import Leads from "../index";

export default {
  leads: async () => {
    return Leads.find().toArray();
  },
};
