## Dockerization
#### go 版本

helloworld.go



```bash
[ go ]$ GOOS=linux GOARCH=amd64 go build helloworld.go
[ go ]$ docker build -t helloworld-go .
[ go ]$ docker run -d -p 8000:8000 helloworld-go
7a5a78195f2b577cfc5beb086fe4f67694944289b8fecc0f1c7766a2821b2c13
[ go ]$ curl localhost:8000
Hello world from my Go program!
```

helloworldcounter.go

```bash
[ go ]$ GOOS=linux GOARCH=amd64 go build -o helloworld helloworldcounter.go
[ go ]$ docker build -t helloworld-go:counter .
[ go ]$ docker run -d -p 8000:8000 helloworld-go:counter
c799747e3b0224123302a9db77a02a2bc65c390f114a5f2993f971237dbbf564
[ go ]$ curl localhost:8000
Hello world from my Go program! You are 1st visitor!
```

#### nodejs 版本

```bash
[ nodejs ]$ docker build -t helloworld-node .
[ nodejs ]$ docker run -d -p 8000:8000 helloworld-node
9f77df5feb5ff76ab02792962a8bae4f118fe90a5febf7226ae403a3283a823f
[ nodejs ]$ curl localhost:8000
Hello world from my Node program!
```


