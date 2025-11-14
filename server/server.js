require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// const medicamentoRoutes = require("./routes/medicamentoRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
// app.use("/api/medicamento", medicamentoRoutes);

// db connection
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// listener
		app.listen(process.env.PORT, () => {
			console.log("conectado a db y corriendo en puerto", process.env.PORT);
		});
	})
	.catch((error) => {
		console.log(error);
	});
