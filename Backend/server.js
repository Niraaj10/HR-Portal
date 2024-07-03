const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const { data } = require('autoprefixer');
const app = express();
const { v4: uuidv4 } = require('uuid')
const PORT = 5000;

const EMP_DATAFILE = '../src/data/EmpData.json';

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


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




// Leave Request
app.post('/LeaveReq', (req, res) => {
    const { empId, reason, startDate, endDate, lType, status } = req.body;
    const reqId = uuidv4(); 
    const newReq = { id: reqId, reason, startDate, endDate, lType, status };

    fs.readFile(EMP_DATAFILE, (err, data) => {
        if (err) {
            console.error('Error reading employee data file:', err);
            return res.status(500).send({ message: 'Error reading employee data' });
        }

        try {
            let employees = JSON.parse(data);
            const empIndex = employees.findIndex(emp => emp.emp_id === empId);

            if (empIndex === -1) {
                console.log(`Employee with id ${empId} not found`);
                return res.status(404).send({ message: 'Employee not found' });
            }
            if (!employees[empIndex].leaveRequests) {
                employees[empIndex].leaveRequests = [];
            }

            // Add the new leave request to the employee's leaveRequests array
            console.log(employees[empIndex]);
            employees[empIndex].leaveRequests.push(newReq);

            // Write updated data back to the JSON file
            fs.writeFile(EMP_DATAFILE, JSON.stringify(employees, null, 2), (err) => {
                if (err) {
                    console.error('Error writing employee data file:', err);
                    return res.status(500).send({ message: 'Error updating employee data' });
                }
                console.log('Leave request added successfully:', newReq);
                res.status(201).send({ success: true, LeaveReq: newReq });
            });
        } catch (error) {
            console.error('Error parsing employee data:', error);
            res.status(500).send({ message: 'Error parsing employee data' });
        }
    });
});



//Leave Request with user Id
app.get('/leaveRequests/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    

    fs.readFile(EMP_DATAFILE, (err, data) => {
        if(err) throw err;

        const employees = JSON.parse(data);
        const employee = employees.find(emp => emp.emp_id === id);

        // console.log(emp_id);
        

        if (employee) {
            res.status(200).send(employee.leaveRequests || []);
        } else {
            res.status(404).send({ message: 'Employee not found' });
        }
    });
});




// user with id
app.get('/employees/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    

    fs.readFile(EMP_DATAFILE, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Error reading employee data'});
            return;
        }

        const employees = JSON.parse(data);
        const employee = employees.find(emp => emp.emp_id === id);
        if (!employee) {
            res.status(404).send({ message: 'Employee not found'});
        } else {
            res.status(200).send(employee);
        }
    });
});


//for HR to update leave status
app.put('/employees/:id/leaveRequests/:leaveId', (req, res) => {
    const { id, leaveId } = req.params;
    const { status } = req.body;

    fs.readFile(EMP_DATAFILE, (err, data) => {
        if(err) throw err;

        const employees = JSON.parse(data);
        const employeeIndex = employees.findIndex(emp => emp.emp_id === id);

        if (employeeIndex === -1) {
            return res.status(404).send({ message: 'Employee not found' });
        }

        const leaveReqIndex = employees[employeeIndex].leaveRequests.findIndex(req => req.id === leaveId);

        if (leaveReqIndex === -1) {
            return res.status(404).send({ message: 'Leave Request not found' });
        }

        employees[employeeIndex].leaveRequests[leaveReqIndex].status = status;

        fs.writeFile(EMP_DATAFILE, JSON.stringify(employees, null, 2), (err) => {
            if (err) throw err;
            res.status(200).send({ message: 'Leave request status updated'});             
        });
    });
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});