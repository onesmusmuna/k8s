A linux Namespace implements kernel-level resource isolation.
kubernetes offers Namespace resource that provide the same functionality.

## Using Namespace.

`kubectl create namespace <name>`: creates namespce.
`kubectl ... -n <namespace>`: to work in specific namespace.
`kubectl get ... --all-namespaces`: to see resources in all Namespace.
