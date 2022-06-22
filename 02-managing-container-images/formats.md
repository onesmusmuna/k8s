Options like `ADD, COPY, ENTRYPOINT, CMD` are used in shell form and in exec form.

Shell form is a list of items

> ADD /my/file /mydir
> ENTRYPOINT /usr/bin/nmap -sn 172.17.0.0/24

Exec form is a JSON arrayof items

> ADD ["/my/file","/mydir"]
> ENTRYPOINT ["/usr/bin/nmap","-sn","172.17.0.0/24"]

Using Exec form is prefered
