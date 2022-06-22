## Understanding Microservices.

In a microservice architecture, different frontend and backend Pods are used to provived the application.

Backend Pods (databases) can be exposed internally only, using the clusterIP Service type.

Frontend Pods (webservers) can be exposed for external access, using the NodePort Service type.
