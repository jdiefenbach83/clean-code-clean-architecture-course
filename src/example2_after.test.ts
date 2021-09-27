import CPF from "./example2_after";

test("Should validate CPF number", function () {
    const cpf = new CPF();
    expect(cpf.validate('133.345.780-46')).toBe(true);
});

test("Should not validate CPF number with equal digits", function () {
    const cpf = new CPF();
    expect(cpf.validate('00000000000')).toBe(false);
});

test("Should not validate CPF number with null", function () {
    const cpf = new CPF();
    expect(cpf.validate(null)).toBe(false);
});

test("Should not validate CPF number with undefined", function () {
    const cpf = new CPF();
    expect(cpf.validate(undefined)).toBe(false);
});

test("Should not validate CPF number with less than 11 of length", function () {
    const cpf = new CPF();
    expect(cpf.validate('1234567890')).toBe(false);
});

test("Should not validate CPF number with grater than 14 of length", function () {
    const cpf = new CPF();
    expect(cpf.validate('123456789012345')).toBe(false);
});

test("Should not validate CPF number", function () {
    const cpf = new CPF();
    expect(cpf.validate('133.345.780-47')).toBe(false);
});
