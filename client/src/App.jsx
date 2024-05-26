import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import AcademicRecords from './contracts/AcademicRecords.json';

const App = () => {
    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState(null);
    const [contract, setContract] = useState(null);
    const [studentId, setStudentId] = useState('');
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [grade, setGrade] = useState('');
    const [date, setDate] = useState('');
    const [record, setRecord] = useState(null);
    const [isValidated, setIsValidated] = useState(null);

    useEffect(() => {
        const init = async () => {
            try {
                if (window.ethereum) { 
                    const web3 = new Web3(window.ethereum); 
                } else {
                    const web3 = new Web3( new Web3.providers.HttpProvider("127.0.0.1:7545"));
                }                
                const accounts = await web3.eth.requestAccounts();
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = AcademicRecords.networks[networkId];
                const instance = new web3.eth.Contract(
                    AcademicRecords.abi,
                    deployedNetwork && deployedNetwork.address,
                );

                setWeb3(web3);
                setAccounts(accounts);
                setContract(instance);
            } catch (error) {
                console.error("Could not connect to contract or chain.");
            }
        };
        init();
    }, []);

    const addRecord = async () => {
        await contract.methods.addRecord(studentId, name, course, grade, date).send({ from: accounts[0] });
        alert("Record added successfully");
    };

    const getRecord = async () => {
        const result = await contract.methods.getRecord(studentId).call();
        setRecord(result);
        const validated = await contract.methods.isValidated(studentId).call();
        setIsValidated(validated);
    };

    const validateRecord = async () => {
        await contract.methods.validateRecord(studentId).send({ from: accounts[0] });
        alert("Record validated successfully");
    };

    return (
        <div className="App">
            <h1>Academic Records Management</h1>
            <div>
                <h2>Add Record</h2>
                <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="Student ID" />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Course" />
                <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} placeholder="Grade" />
                <input type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" />
                <button onClick={addRecord}>Add Record</button>
            </div>
            <div>
                <h2>Get Record</h2>
                <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="Student ID" />
                <button onClick={getRecord}>Get Record</button>
                {record && (
                    <div>
                        <p>Name: {record.name}</p>
                        <p>Course: {record.course}</p>
                        <p>Grade: {record.grade}</p>
                        <p>Date: {record.date}</p>
                        <p>Validated: {isValidated ? 'Yes' : 'No'}</p>
                    </div>
                )}
            </div>
            <div>
                <h2>Validate Record</h2>
                <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="Student ID" />
                <button onClick={validateRecord}>Validate Record</button>
            </div>
        </div>
    );
};

export default App;
