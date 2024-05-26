const AcademicRecords = artifacts.require("AcademicRecords");

contract("AcademicRecords", (accounts) => {
  let academicRecords;

  before(async () => {
    academicRecords = await AcademicRecords.deployed();
  });

  it("should add a record", async () => {
    await academicRecords.addRecord("12345", "John Doe", "Computer Science", "A", "2023-05-20", { from: accounts[0] });
    const record = await academicRecords.getRecord("12345");
    assert.equal(record.name, "John Doe", "Name should be John Doe");
    assert.equal(record.course, "Computer Science", "Course should be Computer Science");
    assert.equal(record.grade, "A", "Grade should be A");
    assert.equal(record.date, "2023-05-20", "Date should be 2023-05-20");
  });

  it("should validate a record", async () => {
    await academicRecords.validateRecord("12345", { from: accounts[0] });
    const isValidated = await academicRecords.isValidated("12345");
    assert.equal(isValidated, true, "Record should be validated");
  });

  it("should get a record", async () => {
    const record = await academicRecords.getRecord("12345");
    assert.equal(record.name, "John Doe", "Name should be John Doe");
    assert.equal(record.course, "Computer Science", "Course should be Computer Science");
    assert.equal(record.grade, "A", "Grade should be A");
    assert.equal(record.date, "2023-05-20", "Date should be 2023-05-20");
  });
});
