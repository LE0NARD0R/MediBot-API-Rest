import { Router } from "express";
import { getMedics, postMedic } from "../controllers/medic-list";

const router = Router();

router.get("/", getMedics);

router.post("/", postMedic);

export { router };
