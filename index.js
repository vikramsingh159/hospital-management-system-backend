const express = require("express");
const { connection } = require("./configs/db");
require("dotenv").config();
const cors = require("cors");

const adminRouter = require("./routes/AdminsRoute");
const ambulanceRouter = require("./routes/AmbulancesRoute");
const appointmentRouter = require("./routes/AppointmentsRoute");
const bedRouter = require("./routes/BedsRoute");
const doctorRouter = require("./routes/DoctorsRoute");
const hospitalRouter = require("./routes/HospitalsRoute");
const nurseRouter = require("./routes/NursesRoute");
const patientRouter = require("./routes/PatientsRoute");
const paymentRouter = require("./routes/PaymentsRoute");
const prescriptionRouter = require("./routes/PrescriptionsRoute");
const reportRouter = require("./routes/ReportsRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Homepage");
});

app.use("/admin", adminRouter);
app.use("/ambulances", ambulanceRouter);
app.use("/appointments", appointmentRouter);
app.use("/beds", bedRouter);
app.use("/doctors", doctorRouter);
app.use("/hospitals", hospitalRouter);
app.use("/nurses", nurseRouter);
app.use("/patients", patientRouter);
app.use("/payments", paymentRouter);
app.use("/prescriptions", prescriptionRouter);
app.use("/reports", reportRouter);

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    } catch (error) {
        console.log("Unable to connect to DB");
        console.log(error);
    }
    console.log(`Listening at port ${process.env.port}`);
});
