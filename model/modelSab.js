import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  try {
    await mongoose.connect( process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado");
  } catch (err) {
    console.log("Error" + err);
  }
})();

const sabiusSchema = mongoose.Schema({
  SEQUENCIA: {
    type: String,
    require: true,
  },
  EMPRESA: {
    type: String,
    require: true,
  },
  PROPOSTA: {
    type: String,
    require: true,
  },
  EQUIPE: {
    type: String,
    require: true,
  },
  AGENTE: {
    type: String,
    require: true,
  },
  ORIGEM: {
    type: String,
    require: true,
  },
  DATA_INSERCAO: {
    type: Date,
    require: true,
  },
  VIGENCIA: {
    type: Date,
    require: true,
  },

  STATUS: {
    type: String,
    require: true,
  },
});

const sabiusModel = mongoose.model("propostas", sabiusSchema, "propostas");

export { sabiusModel };
