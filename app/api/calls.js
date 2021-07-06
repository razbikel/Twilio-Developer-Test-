const {Router} = require('express');
const callsTable = require('../calls/table');


const router = new Router();

router.get('/', (req, res) => {
    res.json({test: "aman backend test!!!"});
})

router.get('/get-calls/', (req, res) => {
    callsTable.getCalls()
    .then(calls => {
        res.json({calls})
    })
    .catch(error => console.error(error));
})

router.post('/add/', (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    const callerName = req.body.callerName;
    callsTable.addCall({phoneNumber, callerName})
    .then(() => {
        res.json({message: 'call add succesfully'})
    })
    .catch(error => console.error(error));
})

router.post('/remove/', (req, res) => {
    const callId = req.body.callId;
    callsTable.deleteCallById({ callId })
    .then(() => {
        res.json({message: "OK"})
    })
    .catch(error => console.error(error));
})


module.exports = router;