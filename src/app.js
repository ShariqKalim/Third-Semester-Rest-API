const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("./db/conn");

//starting CSE dept

const COCSE = require("./models/CO_CSE");
const DSACSE = require("./models/DSA_CSE");
const ADECSE = require("./models/ADE_CSE");
const MATHCSE = require("./models/MATH_CSE");
const EFECSE = require("./models/EFE_CSE");
const ITWCSE = require("./models/ITW_CSE");

//starting IT dept

const COIT = require("./models/It/CO_IT");
const EFEIT = require("./models/It/EFE_IT");
const MATHIT = require("./models/It/MATH_IT");
const DSAIT = require("./models/It/DSA_IT");
const ITWIT = require("./models/It/ITW_IT");
const ADEIT = require("./models/It/ADE_IT");

//ECE START

const NTECE = require("./models/ECE/NT_ECE");
const MATHECE = require("./models/ECE/MATH_ECE");
const SSECE = require("./models/ECE/SS_ECE");
const EDECE = require("./models/ECE/ED_ECE");
const DSAECE = require("./models/ECE/DSA_ECE");
const DSDECE = require("./models/ECE/DSD_ECE");
const ESECE = require("./models/ECE/ES_ECE");

//EE start

const ECTEE = require("./models/EE/ECT_EE");
const MATHEE = require("./models/EE/MATH_EE");
const EFTEE = require("./models/EE/EFT_EE");
const AEEE = require("./models/EE/AE_EE");
const EMEE = require("./models/EE/EM_EE");
const BFEEE = require("./models/EE/BFE_EE");
const ICEE = require("./models/EE/IC_EE");
const NMEE = require("./models/EE/NM_EE");

//task starting of cse dept

const COTASKCSE = require("./models/CO_TASK_CSE");
const DSATASKCSE = require("./models/DSA_TASK_CSE");
const ADETASKCSE = require("./models/ADE_TASK_CSE");
const MATHTASKCSE = require("./models/MATH_TASK_CSE");
const EFETASKCSE = require("./models/EFE_TASK_CSE");
const ITWTASKCSE = require("./models/ITW_TASK_CSE");

//task starting  of IT dept

const COTASKIT = require("./models/It/CO_TASK_IT");
const EFETASKIT = require("./models/It/EFE_TASK_IT");
const MATHTASKIT = require("./models/It/MATH_TASK_IT");
const DSATASKIT = require("./models/It/DSA_TASK_IT");
const ITWTASKIT = require("./models/It/ITW_TASK_IT");
const ADETASKIT = require("./models/It/ADE_TASK_IT");

//ECE START

const NTTASKECE = require("./models/ECE/NT_TASK_ECE");
const MATHTASKECE = require("./models/ECE/MATH_TASK_ECE");
const SSTASKECE = require("./models/ECE/SS_TASK_ECE");
const EDTASKECE = require("./models/ECE/ED_TASK_ECE");
const DSATASKECE = require("./models/ECE/DSA_TASK_ECE");
const DSDTASKECE = require("./models/ECE/DSD_TASK_ECE");
const ESTASKECE = require("./models/ECE/ES_TASK_ECE");

//EE Start

const ECTTASKEE = require("./models/EE/ECT_TASK_EE");
const MATHTASKEE = require("./models/EE/MATH_TASK_EE");
const EFTTASKEE = require("./models/EE/EFT_TASK_EE");
const AETASKEE = require("./models/EE/AE_TASK_EE");
const EMTASKEE = require("./models/EE/EM_TASK_EE");
const BFETASKEE = require("./models/EE/BFE_TASK_EE");
const ICTASKEE = require("./models/EE/IC_TASK_EE");
const NMTASKEE = require("./models/EE/NM_TASK_EE");

//starting routing of cse dept

const router = require("./routers/CO_cse");
const router_dsacse = require("./routers/DSA_cse");
const router_adecse = require("./routers/ADE_cse");
const router_mathcse = require("./routers/MATH_cse");
const router_efecse = require("./routers/EFE_cse");
const router_itwcse = require("./routers/ITW_cse");

//starting routing of IT dept

const router_coit = require("./routers/CO_it");
const router_efeit = require("./routers/EFE_It");
const router_mathit = require("./routers/MATH_it");
const router_dsait = require("./routers/DSA_it");
const router_itwit = require("./routers/ITW_it");
const router_adeit = require("./routers/ADE_it");

//ECE START

const router_ntece = require("./routers/NT_ece");
const router_mathece = require("./routers/MATH_ece");
const router_ssece = require("./routers/SS_ece");
const router_edece = require("./routers/ED_ece");
const router_dsaece = require("./routers/DSA_ece");
const router_dsdece = require("./routers/DSD_ece");
const router_esece = require("./routers/ES_ece");

//EE start

const router_ectee = require("./routers/ECT_ee");
const router_mathee = require("./routers/MATH_ee");
const router_eftee = require("./routers/EFT_ee");
const router_aeee = require("./routers/AE_ee");
const router_emee = require("./routers/EM_ee");
const router_bfeee = require("./routers/BFE_ee");
const router_icee = require("./routers/IC_ee");
const router_nmee = require("./routers/NM_ee");

//starting routing task of CSE dept

const router1 = require("./routers/CO_task_cse");
const router_dsataskcse = require("./routers/DSA_task_cse");
const router_adetaskcse = require("./routers/ADE_task_cse");
const router_mathtaskcse = require("./routers/MATH_task_cse");
const router_efetaskcse = require("./routers/EFE_task_cse");
const router_itwtaskcse = require("./routers/ITW_task_cse");

//starting task routing of IT dept
const router_cotaskit = require("./routers/CO_task_it");
const router_efetaskit = require("./routers/EFE_task_it");
const router_mathtaskit = require("./routers/MATH_task_it");
const router_dsataskit = require("./routers/DSA_task_it");
const router_itwtaskit = require("./routers/ITW_task_it");
const router_adetaskit = require("./routers/ADE_task_it");

//ECE START

const router_nttaskece = require("./routers/NT_task_ece");
const router_mathtaskece = require("./routers/MATH_task_ece");
const router_sstaskece = require("./routers/SS_task_ece");
const router_edtaskece = require("./routers/ED_task_ece");
const router_dsataskece = require("./routers/DSA_task_ece");
const router_dsdtaskece = require("./routers/DSD_task_ece");
const router_estaskece = require("./routers/ES_task_ece");

//EE start

const router_ecttaskee = require("./routers/ECT_task_ee");
const router_mathtaskee = require("./routers/MATH_task_ee");
const router_efttaskee = require("./routers/EFT_task_ee");
const router_aetaskee = require("./routers/AE_task_ee");
const router_emtaskee = require("./routers/EM_task_ee");
const router_bfetaskee = require("./routers/BFE_task_ee");
const router_ictaskee = require("./routers/IC_task_ee");
const router_nmtaskee = require("./routers/NM_task_ee");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router);
app.use(router_dsacse);
app.use(router_adecse);
app.use(router_mathcse);
app.use(router_efecse);
app.use(router_itwcse);

//starting of IT dept
app.use(router_coit);
app.use(router_efeit);
app.use(router_mathit);
app.use(router_dsait);
app.use(router_itwit);
app.use(router_adeit);

//end

//ECE START
app.use(router_ntece);
app.use(router_mathece);
app.use(router_ssece);
app.use(router_edece);
app.use(router_dsaece);
app.use(router_dsdece);
app.use(router_esece);

//EE start

app.use(router_ectee);
app.use(router_mathee);
app.use(router_eftee);
app.use(router_aeee);
app.use(router_emee);
app.use(router_bfeee);
app.use(router_icee);
app.use(router_nmee);

app.use(router1);
app.use(router_dsataskcse);
app.use(router_adetaskcse);
app.use(router_mathtaskcse);
app.use(router_efetaskcse);
app.use(router_itwtaskcse);

//starting of It dept

app.use(router_cotaskit);
app.use(router_efetaskit);
app.use(router_mathtaskit);
app.use(router_dsataskit);
app.use(router_itwtaskit);
app.use(router_adetaskit);
//end

//ECE START

app.use(router_nttaskece);
app.use(router_mathtaskece);
app.use(router_sstaskece);
app.use(router_edtaskece);
app.use(router_dsataskece);
app.use(router_dsdtaskece);
app.use(router_estaskece);

//EE start

app.use(router_ecttaskee);
app.use(router_mathtaskee);
app.use(router_efttaskee);
app.use(router_aetaskee);
app.use(router_emtaskee);
app.use(router_bfetaskee);
app.use(router_ictaskee);
app.use(router_nmtaskee);

app.listen(port, () => {
  console.log(`Running on the Port ${port}`);
});
