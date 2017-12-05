module.exports = (req, res) => {
    let id = parseInt(req.params.id);
    let index = users.findIndex(u => u.id === id);

    if (index === -1) {
        res.sendStatus(404);
        return;
    }

    let name = req.body.name;
    users[index].name = name !== undefined ? name : users[index].name;

    res.json({message: 'User was successfully updated.'});

};
