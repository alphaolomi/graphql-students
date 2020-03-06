# GraphQl with Case study of Students System


## API SCHEMA

BASE URL: http://localhost:9000/graphiql

1. Test request

### Request

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

```graphl
{
    studentById ( id : "S1001" ) {
        id
        firstName
        lastName
    }
}
```

```graphl
{
  students{
    id
    fullName
    }
  }
```

```graphl
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

## query vars

```json
{
  "color_variable" : "RED"
}
```

## Mutation

```graphl
mutation {
  createStudent ( collegeId : "col-2" , firstName : "Tim" , lastName : "George" )
}
```

```graphl
{
  studentById ( id : "SkQtxYBUm" ) {
    id
    firstName
    lastName
  }
}
```

addStudent_returns_object

```graphl
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

## Validation

```graphl
mutation doSignUp ( $input : SignUpInput ) {
  signUp ( input : $input )
}
```

```json
{
  "input" : {
    "email" : "abc@abc" ,
    "firstName" : "kannan" ,
    "password" : "pass@1234"
    }
}

## JQuery Integration

```graphl
{
  greeting,
  sayHello ( name : "Mohtashim" )
}
```

## react
```bash
npx create-react-app hello-world-client
npx create-react-app hello-world-client
npm install apollo-boost graphql
```

```json
{
  "apollo-cache": "^1.1.15",
  "apollo-cache-inmemory": "^1.2.8",
  "apollo-client": "^2.4.0",
  "apollo-link": "^1.0.6",
  "apollo-link-error": "^1.0.3",
  "apollo-link-http": "^1.3.1",
  "apollo-link-state": "^0.4.0",
  "graphql-tag": "^2.4.2"
}
```