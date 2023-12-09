// Check if the response status is 200 (OK)
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Status code is 429..Too Many Requests", function () {
    pm.response.to.have.status(429);
});

// Parse the response JSON
var jsonData = pm.response.json();

pm.test("Verify response data", function () {
    pm.expect(jsonData.data.name).to.equal(pm.variables.get('name'));
    pm.expect(jsonData.data.salary).to.equal(pm.variables.get('salary'));
    pm.expect(jsonData.data.age).to.equal(pm.variables.get('age'));
});
