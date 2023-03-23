import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import cypress from "cypress";
const login = require("../../pages/loginPage");

Given('A web browser is at the saucelabs login page', function() {
 cy.visit("/");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
 login.submitLogin(username,password)
 console.log('O próximo passo é acessar o script de banco please: ')
 // cy.task('connectDB', "select * from central_negociacao.solicitacao where cpf_cliente = '10699763770';")
});

Then("the url will contains the inventory subdirectory", () => {
 console.log('esse teste não vai acontecer')
});

