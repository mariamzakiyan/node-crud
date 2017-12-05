module.exports = (req, res) => {
    let id = parseInt(req.params.id);
    let user = users.find( u => u.id === id);

    if (user === undefined) {
        res.sendStatus(404);
       return;
    }

    res.json(user);

};