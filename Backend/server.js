const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

const EMP_DATAFILE = '../src/data/EmpData.json';

app.use(bodyParser.json());
app.use(cors());

app.post('/signup', (req, res) => {
    const {name, position, email, password, profilePhoto } = req.body;

    fs.readFile(EMP_DATAFILE, (err, data) => {
        if(err) throw err;

        const employees = JSON.parse(data);
        const newEmp = {
            id: 'E0' + (employees.length+1),
            name,
            position,
            email,
            password,
            profilePhoto,
        };
        employees.push(newEmp);
        fs.writeFile(EMP_DATAFILE, JSON.stringify(employees, null, 2), err => {
            if(err) throw err;
            res.status(200).send({ message: 'Sign up Successful', employee: newEmp });
            console.log('sigup successfull');
        });
    });
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});