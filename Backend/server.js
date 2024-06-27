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
    const {name, role, email, password, profilePhoto } = req.body;

    fs.readFile(EMP_DATAFILE, (err, data) => {
        if(err) throw err;

        const employees = JSON.parse(data);
        const newEmp = {
            emp_id: 'E0' + (employees.length+1),
            name,
            role,
            department: "",
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




app.post('/login', (req, res) => {
    const {email, password } = req.body;

    fs.readFile(EMP_DATAFILE, (err, data) => {
        if(err) throw err;

        const employees = JSON.parse(data);
        const employee = employees.find(emp => emp.email === email && emp.password === password );
        console.log(employee);
        
        if (employee) {
            res.status(200).send({ message: 'Login successful', employee });
            console.log('Login successful');
        } else {
            res.status(401).send({ message: 'Invalid  email or Password'});
        }
    });
});





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});