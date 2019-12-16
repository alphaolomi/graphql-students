http://localhost:9000/graphiql

request

```json
{
  Test
}
```

Response

```json
{
  "data": {
    "test": "Test Success, GraphQL server is running !!"
  }
}
```

```schema
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

```


{
"input" :{
"email" : "abc@abc" ,
"firstName" : "kannan" ,
"password" : "pass@1234"
}
}