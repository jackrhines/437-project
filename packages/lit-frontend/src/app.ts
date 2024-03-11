import { consume, createContext, provide } from "@lit/context";
import { property, state } from "lit/decorators.js";
import * as MVU from "./mvu";
import { MsgType } from "./mvu";
import { AuthenticatedUser, APIUser } from "./rest";
import {
  Profile,
  Art,
  Gallery
} from "ts-models";

export interface Model {
  art?: Art;
  user: APIUser;
  profile?: Profile;
  gallery?: Gallery;
}

export const context = createContext<Model>("GalleryModel");

export const init: Model = {
  user: new APIUser()
};

export interface UserLoggedIn extends MsgType<"UserLoggedIn"> {
  user: AuthenticatedUser;
}

export interface ArtSelected extends MsgType<"ArtSelected"> {
  artId: string;
}

export interface ArtSaved extends MsgType<"ArtSaved"> {
  artId: string;
  art: Art;
}

export interface ArtSubmitted extends MsgType<"ArtSubmitted"> {
  art: Art;
}

export interface ProfileSelected
  extends MsgType<"ProfileSelected"> {
  userid: string;
}

export interface ProfileSaved extends MsgType<"ProfileSaved"> {
  userid: string;
  profile: Profile;
}

export interface GallerySelected extends MsgType<"GallerySelected"> {
}

// export interface ArtSaved
//   extends MsgType<"ArtSaved"> {
//   artId: string;
//   destId: number;
//   destination: Destination;
// }

// export interface RouteRequested
//   extends MsgType<"RouteRequested"> {
//   points: Point[];
// }

export type Message =
  | GallerySelected
  | ArtSelected
  | ArtSaved
  | ArtSubmitted
  | ProfileSelected
  | ProfileSaved
  | UserLoggedIn;

export class Main
  extends MVU.Main<Model, Message>
  implements MVU.App<Model, Message>
{
  @provide({ context })
  @state()
  model = init;

  constructor(update: MVU.Update<Model, Message>) {
    super(
      update,
      () => this.model,
      (next: Model) => (this.model = next)
    );
  }
}

export class View extends MVU.View<Message> {
  @consume({ context: context, subscribe: true })
  @property({ attribute: false })
  _model: Model | undefined;

  getFromModel<T>(key: keyof Model) {
    if (this._model) {
      return this._model[key] as T;
    }
  }
}

export const createDispatch = () =>
  new MVU.Dispatch<Model, Message>();

export const updateProps = MVU.updateProps<Model>;
export const noUpdate = MVU.noUpdate<Model>;