import { Dispatch } from "redux";
// import { Invoice } from "modules/invoice/store/types";
import {
  addCollectionRequest,
  collectionRequest,
  collectionSuccess,
  collectionError,
  addCollectionSuccess,
} from "./actions";
import cuid from "cuid";
import Firebase from "firebase-store/initial";
import { Collection } from "../models";

interface NamePrice {
  name: string;
  price: number;
}

const firebase = new Firebase();

export const addCollectionThunk = (name: string, admin: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  const id = cuid();

  const collection: Collection = {
    id,
    name,
    admin,
  };

  dispatch(addCollectionRequest());

  const error = await firebase.collections().doc(id).set(collection);

  if (error === undefined) {
    dispatch(addCollectionSuccess(collection));
    // add collection to user proflie
    return;
  }

  console.log("handle collection adding error", error);
};

// export const getCollectionsThunk = () => async (
//   dispatch: Dispatch
// ): Promise<void> => {
//   dispatch(collectionRequest());

//   const snapshot = await firebase.collections().get();

//   if (!snapshot) {
//     dispatch(collectionError("no snapshot"));
//   }

//   const docs = await snapshot.docs.map((document) => ({
//     ...(document.data() as any),
//   }));

//   const collections: Collection[] = docs;

//   if (!docs) {
//     dispatch(collectionError("no snapshot"));
//   }

//   dispatch(collectionSuccess(collections));
// };
