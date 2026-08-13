// Single source of truth for school details used across the site.
// Update here — every page, meta tag and structured-data block reads from this.

export const SITE = {
  name: "Shri Vinayaka Vidyalaya",
  shortName: "Shri Vinayaka Vidyalaya",
  url: "https://shrivinayakavidyalaya.com",
  foundedYear: 1990,
  email: "shrivinayakavidyalaya@gmail.com",
  phone: "+91 9916372340",
  // tel: href form — digits only, no spaces
  phoneHref: "+919916372340",
  address: {
    street:
      "Shri, 10, 1st Main Rd, Guru Raghavendra Nagar, Eswara Layout, JP Nagar 7th Phase, Arekere",
    locality: "Bengaluru",
    region: "Karnataka",
    postalCode: "560078",
    country: "IN",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100093646530865",
    instagram:
      "https://www.instagram.com/shrivinayakavidyalaya?igsh=MXMzM3l4ZjI3YXZ5cw==",
  },
};

export const ADDRESS_LINE = `${SITE.address.street}, ${SITE.address.locality}, Kothnur, ${SITE.address.region} ${SITE.address.postalCode}`;
