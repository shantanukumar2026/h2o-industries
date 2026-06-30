export const companyInfo = {
  name: "H2O Industries",
  tagline: "INNOVATION IN EVERY DROP",
  contact: {
    email: "info@h2oindustries.com",
    phone: "+1 (888) 456-7890",
    address: {
      street: "100 Waterway Blvd",
      city: "Innovation City",
      state: "CA",
      zip: "94016",
      country: "USA",
    },
  },
  stats: [
    { label: "Years Experience", value: "25+" },
    { label: "Projects Delivered", value: "120+" },
    { label: "Countries Served", value: "30+" },
    { label: "Client Satisfaction", value: "98%" },
  ],
};
export type CompanyInfo = typeof companyInfo;
