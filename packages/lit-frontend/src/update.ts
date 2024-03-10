import { APIRequest, JSONRequest } from "./rest";
import * as App from "./app";
import {
  // Art,
  Profile
} from "ts-models";

const dispatch = App.createDispatch();
export default dispatch.update;

// dispatch.addMessage("ArtSelected", (msg: App.Message) => {
//   const { artId } = msg as App.ArtSelected;
//
//   return new APIRequest()
//     .get(`/art/${artId}`)
//     .then((response: Response) => {
//       if (response.status === 200) {
//         return response.json();
//       }
//       return undefined;
//     })
//     .then((json: unknown) => {
//       if (json) {
//         console.log("Art:", json);
//         // convert dates in json to Date objects
//         // let dates = json as {
//         //   startDate: string;
//         //   endDate: string;
//         // };
//         // let art = json as Art;
//         // art.startDate = new Date(dates.startDate);
//         // art.endDate = new Date(dates.endDate);
//         return json as Art;
//       }
//     })
//     .then((art: Art | undefined) =>
//       art ? App.updateProps({ art }) : App.noUpdate
//     );
// });

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