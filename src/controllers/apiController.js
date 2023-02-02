let newAccount = async (req, res) => {
    let machinename = req.body.machinename;
    let serialnumber = req.body.serialnumber;
    let profilename = req.body.profilename;
    let checkbm = req.body.checkbm;
    let birthday = req.body.birthday;
    let uid = req.body.uid;
    let countaccount = req.body.countaccount;
    let Ideal = req.body.Ideal;
    let status = req.body.status;
    let pickdate = req.body.pickdate;
    return res.status(200).json({
        errCode: 1,
        message: 'Missing inputs parameter!',
        pickdate: pickdate
    })
}


module.exports = {
    newAccount: newAccount
}