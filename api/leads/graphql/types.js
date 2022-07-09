const LeadFields = `
  email: String
  createdAt: String
  updatedAt: String
`;

export default `
  type Lead {
    _id: ID
    ${LeadFields}
  }

  input LeadInput {
    ${LeadFields}
  }
`;
