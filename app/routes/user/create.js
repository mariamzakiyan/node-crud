module.exports = (req, res) => {
    let username = req.body.username;

    if (!username) {
        res.json({message: "Invalid username."});
        return;
    }

    let index = users.findIndex( u => u.username === username);
    if (index !== -1) {
        res.json({message: 'Username is already in use.'});
        return;
    }

    let name = req.body.name || '';
    let id = ++lastInsertedId;
    let user = {
        id : id,
        username: username,
        name: name
    };

    users.push(user);
    res.json(user);
};