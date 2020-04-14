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
```
