import express from "express";
import { sabiusModel } from "../model/modelSab.js";


global.Promise = bluebird;

const rota = express.Router();

rota.get("/periodoSab", async (req, res) => {
  const { inicial, final } = req.query;
  const periodoInicial = new Date(inicial);
  const periodoFinal = new Date(final);

  try {
    const consulta = await sabiusModel.find({
      $and: [
        { DATA_INSERCAO: { $gte: periodoInicial } },
        { DATA_INSERCAO: { $lte: periodoFinal } },
      ],
    });
    if (consulta.length === 0) {
      res.status(400).send({ err: "Periodo não encontrado" });
    }
    res.send(consulta);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default rota;
