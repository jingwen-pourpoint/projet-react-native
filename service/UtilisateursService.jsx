const url = "https://randomuser.me/api/?results=50&nat=fr";
let HTTpHeaders = new Headers();
let init = {
  method: "GET",
  headers: HTTpHeaders,
  cache: "default",
  mode: "cors",
};

class UtilisateursService {
  getUtilisateurs = async () => {
    return await fetch(`${url}`, init)
      .then(res => res.json())
      .then(json => json.results);
  };
}

export const utilisateursService = Object.freeze(new UtilisateursService());
