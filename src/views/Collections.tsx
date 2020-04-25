import React, { SFC } from "react";
import { useDispatch } from "react-redux";
import { addCollectionThunk } from "modules/collections/store/thunks";

interface Props {
  user: string;
}

export const Collections: SFC<Props> = ({ user }) => {
  const dispatch = useDispatch();
  const addCollection = () => {
    dispatch(addCollectionThunk("test", user));
  };
  return (
    <div>
      <button onClick={addCollection}>test</button>
    </div>
  );
};
