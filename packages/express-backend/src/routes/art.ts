import express, {Request, Response} from "express";
import {Art} from "ts-models";
import art from "../services/art";
import {v4 as uuidv4} from "uuid";
// import profiles from "../services/profiles";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const artId = uuidv4();
  const newArt = req.body;
  newArt.artId = artId;

  art
    .create(newArt)
    .then((a: Art) => res.status(201).send(a))
    .catch((err) => res.status(500).send(err));
});

router.get("/:artId", (req: Request, res: Response) => {
  const { artId } = req.params;

  art
    .get(artId)
    .then((a: Art | undefined) => {
      if (!a) throw "Not found";
      else res.json(a);
    })
    .catch((err) => res.status(404).end());
});

router.get("/", (req: Request, res: Response) => {
  art
    .index()
    .then((a: Art[] | undefined) => {
      if (!a) throw "Not found";
      else res.json(a);
    })
    .catch((err) => res.status(404).end());
})

router.put("/:artId", (req: Request, res: Response) => {
  const { artId } = req.params;
  const newArt = req.body;

  art
    .update(artId, newArt)
    .then((a: Art) => res.json(a))
    .catch((err) => res.status(404).end());
});

export default router;