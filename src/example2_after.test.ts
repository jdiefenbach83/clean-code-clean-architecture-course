import CPF from "./example2_after";

test("Should validate CPF number", function () {
    const cpf = new CPF();
    expect(cpf.validate('133.345.780-46')).toBe(true);
});

test("Should not validate CPF number", function () {
    const cpf = new CPF();
    expect(cpf.validate('133.345.780-47')).toBe(false);
});