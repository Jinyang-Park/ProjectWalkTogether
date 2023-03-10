type User = {
  bannerImg: string;
  displayName: string;
  email: string;
  imageUrl: string;
  userId: string;
  description: string;
};

// This is proprietary because fucking reasons.
//
// OK, so the database "Users" obviously looked like where user data was stored. So I defined the type accordingly.accordingly.
// But fuck me, it turns out "user" is the right database.
//
// Not a typo, not intentional, just messed up code.
//
// - RIP Alejandro

export default User;
