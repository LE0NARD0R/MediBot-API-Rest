import IMedic from "../interfaces/medic.interface";
import medicModel from "../models/medicModel";

const getMedicsList = async () => {
  const responseMedics = await medicModel.find({});
  return responseMedics
};

const insertMedic = async (medic: IMedic) => {
  const responseInsert = await medicModel.create(medic);
  return responseInsert;
};

export { insertMedic, getMedicsList };
