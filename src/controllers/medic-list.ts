import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { insertMedic, getMedicsList } from "../services/medic-list.service";

const getMedics = async (req: Request, res: Response) => {
  try {
    const response = await getMedicsList();
    res.send(response);
  } catch (error) {
    handleHttp(res, "Error get Medics", error);
  }
};

const postMedic = async ({ body }: Request, res: Response) => {
  try {
    const responseMedic = await insertMedic(body);
    res.send(responseMedic);
  } catch (error) {
    handleHttp(res, "Error post Medic", error);
  }
};

export { getMedics, postMedic };
