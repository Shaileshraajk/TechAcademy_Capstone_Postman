// Use environment or global variables for data
name = pm.variables.get('name');
salary = pm.variables.get('salary');
age = pm.variables.get('age');

pm.request.body.raw = JSON.stringify({
  "name": name,
  "salary": salary,
  "age": age
});

