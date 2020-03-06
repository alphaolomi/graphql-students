# API SCHEMA

BASE URL: http://localhost:9000/graphiql

1. Test request

## Request

```graphql
{
  Test
}
```

## Response

```json
{
  "data": {
    "test": "Test Success, GraphQL server is running !!"
  }
}
```

2. Greetings request
3.

```graphl
{
    greeting
    students {
        id
        firstName
        lastName
    }
}
```

```
{
    studentById ( id : "S1001" ) {
        id
        firstName
        lastName
    }
}
```

```
{
  students{
    id
    fullName
    }
  }
```

```
{
  students {
    id
    firstName
    college {
      id
      name
      location
      rating
    }
  }
}
```

query vars

```
{
  "color_variable" : "RED"
}
```

mutation

```
mutation {
createStudent ( collegeId : "col-2" , firstName : "Tim" , lastName : "George" )
}

```

```
{
  studentById ( id : "SkQtxYBUm" ) {
    id
    firstName
    lastName
  }
}
```

addStudent_returns_object

```
mutation {
  addStudent_returns_object ( collegeId : "col-101" , firstName : "Susan" , lastName : "George" ) {
    id
    firstName
    college {
      id
    name
}
}
}
```

validation

```

mutation doSignUp ( $input : SignUpInput ) {
signUp ( input : $input )
}

```json
{
  "input" :{
    "email" : "abc@abc" ,
    "firstName" : "kannan" ,
    "password" : "pass@1234"
    }
}

## JQuery Integration

{
  greeting,
  sayHello ( name : "Mohtashim" )
}

## react
npx create-react-app hello-world-client
npx create-react-app hello-world-client
npm install apollo-boost graphql

```
{
  'apollo-cache': '^1.1.15',
  'apollo-cache-inmemory': '^1.2.8',
  'apollo-client': '^2.4.0',
  'apollo-link': '^1.0.6',
  'apollo-link-error': '^1.0.3',
  'apollo-link-http': '^1.3.1',
  'apollo-link-state': '^0.4.0',
  'graphql-tag': '^2.4.2'
}
```