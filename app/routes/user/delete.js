module.exports = (req, res) => {
    let id = parseInt(req.params.id);
    let index = users.findIndex( u => u.id === id);
    if (index === -1) {
        res.sendStatus(404);
        return;
    }

    users.splice(index, 1);
    res.send({message: 'User was successfully deleted.'});
};