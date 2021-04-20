interface User {
  gender: "male" | "female";
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: string;
    city: string;
    state: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
  email: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export default User;
