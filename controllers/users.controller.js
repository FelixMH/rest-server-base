const { response, request } = require('express')

const usersGet = ( req = request, res = response ) => {

    const { q, name = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'GET Msg',
        q,
        name,
        apikey,
        page,
        limit
    })
}

const usersPost = ( req = request, res = response ) => {
    const data = req.body;

    res.status(201).json({
        msg: 'POST Msg',
        data
    })
}

const usersPut = (req = request, res) => {

    const { id } = req.params;

    res.status(200).json({
        msg: 'PUT Msg',
        id
    });
}

const usersDelete = (req = request, res) => {
    res.json({
        msg: 'DELETE Msg'
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}