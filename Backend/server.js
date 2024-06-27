const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const { data } = require('autoprefixer');
const app = express();
const PORT = 5000;

const EMP_DATAFILE = '../src/data/EmpData.json';

app.use(bodyParser.json());
app.use(cors());


// Sign Up
app.post('/signup', (req, res) => {
    const {name, role, email, password, profilePhoto, address, phone } = req.body;

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
            address,
            phone,
        };
        employees.push(newEmp);
        fs.writeFile(EMP_DATAFILE, JSON.stringify(employees, null, 2), err => {
            if(err) throw err;
            res.status(200).send({ message: 'Sign up Successful', employee: newEmp });
            console.log('sigup successfull');
        });
    });
});



// Log In
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




// Update user
app.post('/updateProfile', (req, res) => {
    const { emp_id, name, email, role, profilePhoto, address, phone } = req.body;

    fs.readFile(EMP_DATAFILE, (err, data) => {
        if(err) throw err;

        const employees = JSON.parse(data);
        const employeeIndex = employees.findIndex(emp => emp.emp_id === emp_id);

        if(employeeIndex !== -1) {
            employees[employeeIndex] = { ...employees[employeeIndex], name, email, role, profilePhoto, add, PhoneNo };

            fs.writeFile(EMP_DATAFILE, JSON.stringify(employees, null, 2), (err) => {
                if(err) throw err;

                res.status(200).send({message: 'Profile Updated successfully', employee: employees[employeeIndex]});
                console.log('Profile Updated Successfully' + employees[employeeIndex]);
            });
        } else {
            res.status(404).send({ message: 'Employee not found'});
        }

    });
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});