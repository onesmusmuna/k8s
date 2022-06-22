## Understand Container Logging.

The container application does not connect to a STDOUT, which is why logs by default, are written to the container.

Use `docker logs <mycontainer>` to get access to the container log.

Using docker log is convenient for troubleshooting.
