## Labels

A Label is a key-value pair that provides additional information about kubernetes resources.

Labels are set in resources like Deployments and Services, and use selectors to connect to related resources.

The deployment finds its Pods using a selector.
The Service finds its endpoint Pods using a selector.

## Annotations

Annotations were originally used to provide detailed metadata in an objects.
