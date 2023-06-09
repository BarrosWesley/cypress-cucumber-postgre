Feature: Login page with Tags

Feature Login page will work depending on the user credentials with Tags

@Login
Scenario Outline: Successful login
Given tantando acessar o banco de dados
When the user logs in entering "<uname>" and password "<passwd>"
Then the user verifies login page title
And the user logs off
Examples:
 | uname  | passwd     |
 | qaanz2 | test12     |
 | akeers2| test12     |

@Login
Scenario Outline: Failed login
Given tantando acessar o banco de dados
When the user logs in entering "<uname>" and password "<passwd>"
And the user signs in
Then the user verifies Error message "<errMsg>"
Examples:
 | uname  | passwd     | errMsg                                          |
 | qaanz2 | test125    | It seems that username or password is incorrect |