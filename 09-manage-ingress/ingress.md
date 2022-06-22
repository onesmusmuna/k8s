## Understand Ingress.

Ingress is used to provide external access to internal k8s cluster resources.

To do so, ingress uses a load balancer that is present on the external cluster.

This load balancer is implemented by the ingress controller.

As an API resource, Ingress uses selector labels to connect to Pods that are used as a service endpoint.

To connnect resources in the cluster, DNS must be configured to resolve to the Ingress load balancer IP.

Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster.

Traffic routing is controlled by rules defined on the ingress resource.

Ingress can be configured to do the following:

1. Give services externally-reachable URLs.
2. Load balance traffic.
3. Terminate SSL/TLS.
4. Offer name based virtual hosting.

Creating Ingress resources without ingress controller has no effect.

Many Ingress controllers exist:

> nginx
> haproxy
> traefik
> kong
> contour

## commands

`kubectl describe ingress <name>`
