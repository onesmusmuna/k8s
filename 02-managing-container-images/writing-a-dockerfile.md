## Writing a Dockerfile

Each Dockerfile starts with `FROM`, identifying the base image to use

> Instructions are executed in that base image.
> instructions are executed in the order specified.

Each Dockerfile instruction runs in an independent container, using an intermediate image built from a previouse command, which means that adding multiple instaructions results in multiple layers. So coonect the commands using `&&`

## Dockerfile instructions.

`FROM` identifies the base image to use
`LABEL` key-value pair used for indentification.
`MAMINTAINER` name of person that maintains the image.
`RUN` executes commands on the `FROM` image while building the image.
`EXPOSE` has metadata-only informationon where the image should run.
`ENV` defines environmental variables to be used in the container.
`ADD` copies files from the project directory to the image.
`COPY` copies files from the local project directory, using ADD is prefered.(more flexibility and options)
`USER` specifies username for `RUN`, `CMD` `ENTRYPOINT` instructions.
`ENTRYPOINT` has the standard command that the image will run.
`CMD` can have the standard command, as well as arguments to the `ENTRYPOINT` command.

## understand Entrypoint.

`ENTRYPOINT` is the default command to be processed.
If not specified, `/bin.sh -c` is executed as the default command.

Arguments to the `ENTRYPOINT` command should be specified separately using `CMD`

> `ENTRYPOINT`["command"]; `ENTRYPOINT`["/usr/sbin/httpd"] > `CMD`["arg1","arg2"]; `CMD`["-D","FOREGROUND"]

If the default command is specified using CMD instead of ENTRYPOINT, the command is executed as an argument to the default entrypoint `sh -c` which can give unexpected results.

If the arguments to the command are specified within the `ENTRYPOINT`, then they cannot be overwritten from the command line; So to make your Dockerfile flexible, make sure you pass commands separately in a `CMD` section.
