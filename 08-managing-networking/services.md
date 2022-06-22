## Services

A service is an API resource that is used to expose a logical set of Pods.

Services are applying round-robin load balancing to forward traffic to specific Pods.

The set of pods that is targeted by a service is determined by a selector (which is label).

Service exist independently from the applications they provide access to.

## Service Types.

`ClusterIP`: the default type exposes the service on an internal cluster IP address.
`NordPort`: allocates a specific node port on the node that forwards to the service cluster IP address.
`LoadBalancer`: currently only impemented in public cloud.
`ExternalName`: works on DNS names; redirection is happening aat a DNS level, useful in migration.

to forcus on ClusterIP && NordPort

## Understand Service Ports

While working with Services, different port are specified.

`targetport`: the port on the application (container) that the service addresses.
`port`: the port on which the Service is accessible.
`nodeport`: the port that is exposed externally while using the nordPort Service type.
