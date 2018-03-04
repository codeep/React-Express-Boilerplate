import Bot from '../../../models/bot';

export const getAll = (req, res) => {
    Bot.find({})
    .then(bots => res.send(bots))
    .catch(err => res.end(err));
};

export const getOne = (req, res) => {
    Bot.findOne({ _id: req.params.id })
        .then(bot => res.send(bot))
        .catch(err => res.end(err));
};

export const createBot = (req, res) => {
    Bot.create({
        name: req.body.name,
        description: req.body.description
    }).then(bot => res.send(bot))
    .catch(err => res.end(err));
};

export const updateBot = (req, res) => {
    Bot.update({ _id: req.body.id }, { name: req.body.name, description: req.body.description })
        .then(updated => res.end())
        .catch(err => res.end(err));
};

export const deleteBot = (req, res) => {
    Bot.remove({ _id: req.params.id })
    .then(result => {
        res.end()
    })
    .catch(err => res.end(err));
};