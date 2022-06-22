## Basic YAML manifest Ingridients.

All YAML manifest ingridients are defined in the API

1. `apiVersion`: specifies which version of the API to use for this object.
2. `kind`: indicates the type of object (Deployment, Pod, etc.)
3. `metadata`: contains administrative information about the object.
4. `spec`: contains the specifics of the object.

Use `kubectl explain` to get more informaion about the basic properties.

## Container Components.

In the container spec, different parts are needed.

1. `name`: the name of the container.
2. `image`: the image that should be used.
3. `command`: the command the container should run.
4. `args`: arguments that are used by the command.
5. `env`: environment variables that should be used by the container.

These are all parts of the pod.spec.container.spec, which can be checked with `kubectl explain`.

## Generatin YAML files.

Do not write YAML files, generate them.

To generate yaml files, use `--dry-run=client -o yaml > my.yaml` as an argument to the `kubctl run` and `kubectl create` commands.

```sh
kubectl run mynginx --image=nginx --dry-run=client -o yaml > mynginx.yaml
```

## options

`kubectl create -f my.yaml` used to create resource from YAML
`kubectl apply -f my.yaml` create resource if it doesnt exist yet, and modify its already exists and has been created with ` kubectl apply` erarlier.
