import { redirect } from "react-router";

import { KEYS } from "../local";

const loader = async () => {
  const localToken = localStorage.getItem(KEYS.TOKEN);

  if (!localToken) {
    // TODO: we need to also check if the token is valid
    return redirect("/login");
  }

  return Promise.resolve();
};

export default loader;
