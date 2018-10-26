//npm init
const fs = require('fs');
const express = require('express'); //npm install --save express
const bodyParser = require('body-parser'); //npm install --save body-parser

const app = express();

app.use(bodyParser.json());

const employees = JSON.parse(fs.readFileSync('./medium.json', 'utf-8'));


//GET
//In '' is the endpoint, then (request, response)
//Have to have both request and response because the first slot will ALWAYS be the request no matter what it is named
app.get('/employees', (req, res) => {   
    //want to return all people in the people.json file to client
    res.send(employees);
})

//GET Certain an employee by ID

app.get('/employees/:id', (req,res) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < employees.length; i ++) {
        if (employees[i].id === id) {
            return res.send(employees[i]);
        }
    }
    //error message if it doesn't return an ID
    res.status(404).send('Unable to find id');
})

//set up route to DELETE
//:id makes it dynamic

app.delete('/employees/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const filteredEmployees = employees.filter(person => person.id !== id);
    if (filteredEmployees.length === employees.length) {
        return res.status(404).send('Unable to find id');
    }
    fs.writeFileSync('./medium.json', JSON.stringify(filteredEmployees));
    res.send(filteredEmployees);
})


//POST request method to add an employee 

app.post('/employees/', (req,res) => {
     // {name: "Maggie"}
    // expecting to receive : {name: "Maggie", age: 23, id: 400}
    const {name, id, salary, department} = req.body;
    if (name && id && salary && department) {
        //success
        const newEmployee = {
            name,
            id,
            salary,
            department
        }
        employees.push(newEmployee);
        fs.writeFileSync('./medium.json', JSON.stringify(employees));
        res.send(newEmployee);
    } else {
        // 422 response is unproccessable entity
        console.log(req.body)
        return res.status(422).send('Unable to add person');
        
    }
})


// PUT request method to update an employee
app.put('/employees/:id', (req,res) => {
    const updateId = parseInt(req.params.id);
    const {name, id, salary, department} = req.body;
    for (let i=0; i <= employees.length; i++) {
        
        if (updateId === employees[i].id) {
            // if (name) {
            //     employee[i].name = name;
            // }
            if (name && id && salary && department) {
                //success
                const updateEmployee = {
                    name,
                    id,
                    salary,
                    department
                }
                employees[i] = updateEmployee;
                fs.writeFileSync('./medium.json', JSON.stringify(employees));
                return res.send(updateEmployee);
            } else {
                return res.status(422).send('Unable to add the person');
            }
        } 
    } 
        return res.status(422).send('Unable to add person');
})



app.listen(2000);