import { APIRequest, JSONRequest } from "./rest";
import * as App from "./app";
import {
  Art,
  Profile,
  Gallery
} from "ts-models";

const dispatch = App.createDispatch();
export default dispatch.update;

dispatch.addMessage("GallerySelected", () => {
  return new APIRequest()
    .get(`/art/`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Gallery:", json);
        return json as Gallery;
      }
    })
    .then((gallery: Gallery | undefined) =>
      gallery ? App.updateProps({ gallery }) : App.noUpdate
    );
});

dispatch.addMessage("ArtSelected", (msg: App.Message) => {
  const { artId } = msg as App.ArtSelected;

  return new APIRequest()
    .get(`/art/${artId}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Art:", json);
        return json as Art;
      }
    })
    .then((art: Art | undefined) =>
      art ? App.updateProps({ art }) : App.noUpdate
    );
});

dispatch.addMessage("ArtSaved", (msg: App.Message) => {
  const { artId, art } =
    msg as App.ArtSaved;

  return new JSONRequest(art)
    .put(`/art/${artId}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Art:", art);
        return json as Art;
      }
      return undefined;
    })
    .then((art: Art | undefined) => {
      if (art) {
        return (model: App.Model) => {
          // const artModel = model.art;
          return Object.assign({}, model, {
            art: art,
          });
        };
      } else {
        return App.noUpdate;
      }
    });
});

dispatch.addMessage("ArtSubmitted", (msg: App.Message) => {
  const { art } =
    msg as App.ArtSubmitted;

  return new JSONRequest(art)
    .post(`/art/`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Art:", art);
        return json as Art;
      }
      return undefined;
    })
    .then((art: Art | undefined) => {
      if (art) {
        return (model: App.Model) => {
          // const artModel = model.art;
          return Object.assign({}, model, {
            art: art,
          });
        };
      } else {
        return App.noUpdate;
      }
    });
});

dispatch.addMessage("ProfileSelected", (msg: App.Message) => {
  const { userid } = msg as App.ProfileSelected;

  return new APIRequest()
    .get(`/profiles/${userid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        return json as Profile;
      }
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});

dispatch.addMessage("ProfileSaved", (msg: App.Message) => {
  const { userid, profile } = msg as App.ProfileSaved;

  return new JSONRequest(profile)
    .put(`/profiles/${userid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        json as Profile;
      }
      return undefined;
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});