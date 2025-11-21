const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Test route is working fine and you are connected to the server");
});

module.exports = router;