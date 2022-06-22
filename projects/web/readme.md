# Using Kind

- Create cluster
  `kind create cluster --name test`
- Set kubectl context to you cluster
  `kubectl cluster-info --context kind-test`
- Get context of cluster
  `kubectl config get-contexts`
- Create namespace
  `kubectl create namespace web`

## Port Forwarding

We can access private service endpoints or pods using `port-forward`
`kubectl -n web port-forward service/<serviceName> portNumber`

## Using Ingress

To use an Ingress, we need an ingress controller.

- Add ingress-nginx controller
  `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml`
- Check if ingress-nginx admmisions have completed && the controller is running.
  `kubectl -n ingress-nginx get pods`
  > Since we are running in kind, Kind does not have loadBalancer support.
  > That is why we need to port-forward.

`kubectl -n ingress-nginx --address 0.0.0.0 port-forward service/ingress-nginx-controller 80`

> Here we are binding address 0.0.0.0 and port-forward it to ingress-controller on port 80 [localhost:80]

- We can now apply our ingress.yaml file.

`kubectl -n web apply -f ./infra/ingress.yaml`

And there you have it, We did it.
know get back to hacking.
