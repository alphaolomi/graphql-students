
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
````