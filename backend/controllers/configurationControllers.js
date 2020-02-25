const fs = require('fs');

export const addNewConfiguration = (req, res) => {
        let dataTemp = JSON.stringify(req.body);
        fs.writeFile('./models/data.json', dataTemp, (err) => {
            if (err) {
                res.sendStatus(400);
                throw err;
            }
            res.sendStatus(200);
        });
};

export const getConfigurations = (req, res) => {
    fs.readFile('./models/data.json', (err, data) => {
        if(err) throw err;
        let dataRAW = JSON.parse(data);
        return res.json(dataRAW);
    })
};
