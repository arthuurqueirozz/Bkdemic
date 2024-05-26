// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AcademicRecords {
    struct Record {
        string studentId;
        string name;
        string course;
        string grade;
        string date;
        bool validated;  // Flag to indicate if the record is validated
    }

    mapping(string => Record) private records;
    address public admin;

    event RecordAdded(string studentId, string name, string course, string grade, string date);
    event RecordValidated(string studentId);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function addRecord(string memory studentId, string memory name, string memory course, string memory grade, string memory date) public onlyAdmin {
        records[studentId] = Record(studentId, name, course, grade, date, false);
        emit RecordAdded(studentId, name, course, grade, date);
    }

    function validateRecord(string memory studentId) public onlyAdmin {
        require(bytes(records[studentId].studentId).length != 0, "Record does not exist");
        records[studentId].validated = true;
        emit RecordValidated(studentId);
    }

    function getRecord(string memory studentId) public view returns (Record memory) {
        return records[studentId];
    }

    function isValidated(string memory studentId) public view returns (bool) {
        require(bytes(records[studentId].studentId).length != 0, "Record does not exist");
        return records[studentId].validated;
    }
}
