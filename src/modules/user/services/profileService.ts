import { FirestoreService } from "modules/firebase";
import { UserProfile } from "modules/user";

interface UserCollections {
  id: string;
  name: string;
}

interface InvoiceCollection {
  createdBy: string;
  name: string;
}

const profiles = new FirestoreService<UserProfile>("profile");
const invoiceCollections = new FirestoreService<InvoiceCollection>(
  "invoice-collections"
);

const getOrCreateUserProfile = async (user: firebase.UserInfo) => {
  // should return user profile not undefined
  console.log("Fetching profile for user: ", user);
  let userProfile = await profiles.getByIdAsync(user.uid);

  if (!userProfile) {
    console.log("No user profile found, creating profile ...");
    const newProfile = {
      id: user.uid,
      email: user.email ? user.email : "",
    };

    const error = await profiles.setAsync(newProfile);
    if (error) {
      return error;
    }

    console.log("Creating your first collection.");
    const usersCollection = await invoiceCollections.addAsync({
      createdBy: user.uid,
      name: "Default",
    });

    if (typeof usersCollection === "string") {
      console.error(usersCollection);
      return usersCollection;
    }

    console.log(
      "user collection created: ",
      usersCollection.id
      // await (await usersCollection.get()).data()
    );

    const userCollections = [{ id: usersCollection.id, name: "" }];
    const userUpdated = await profiles.updateByIdAsync(
      { collections: userCollections },
      user.uid
    );
    if (typeof userUpdated === "string") {
      console.log(
        "Error occured when adding collection in user info: ",
        userUpdated
      );
      return userUpdated;
    }

    userProfile = await profiles.getByIdAsync(user.uid);
    console.log("User profile created: ", userProfile);
    return userProfile;
  }
  console.log("User profile found: ", userProfile);

  return userProfile;
};

export { getOrCreateUserProfile };
