## Starting Containers

`docker run `
`--rm` run and delete container.
`-d` running container in detach mode (background).
`-p <your-port>:<container-port>` port forwarding.
`--name=<name>` specify your name.
`-v <local-dir>:<container-dir>`
`-it` will start container with interactive terminal
`--rm` remove the container when its done.

```sh
docker run -d -p 8080:80 --name="myapache" -v /var/www/html:/var/www/html httpd

curl http://localhost:8080
```

---

`docker`
`exec -it <container-name> sh` enter in container with execution mode.
