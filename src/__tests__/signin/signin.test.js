const setStateUserLogin = require('./signin');

test('change user if exists new user and different from the user before', () => {
  const newUSer = {};
  const oldUSer = {};
  expect( setStateUserLogin( newUSer,oldUSer)).toEqual(false);
});

test('change user if exists new user and different from the user before', () => {
  const newUSer = {email:'em',password:'pass'};
  const oldUSer = {email:'',password:''};
  expect( setStateUserLogin( newUSer, oldUSer) ).toEqual(newUSer);
});

test('change user if exists new user and different from the user before', () => {
  const newUSer = {email:'em',password:'pass'};
  const oldUSer = {email:'',password:''};
  expect( setStateUserLogin( newUSer,newUSer) ).toEqual(false);
});