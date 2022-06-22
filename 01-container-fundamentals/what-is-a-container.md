## What is a container

A container is a self-contained ready-to-run application.

This is what makes it different from a virtual machine.

Containers have all on board that is required to start the application.

To start a container, a container runtime is required.

The container runtime is running on a host platform and establishes communication between the local host kernel and the container.

So, all containers, no matter what they do, run on top of the same local host kernel.

## Container Components

`Images` are read-only environments that contain the runtime environment, which include the application and all libraries it requires.

`Containers` are the isolated runtime environments where the application is running. By using namespaces the containers can be offered as a strictlyisolated environment.

`Registries` are used to store images. Docker hub is a common registry.

## Containers are linux

Containers are based on features offered by the Linux OS.
Like linux kernel namespaces provide strict isolation between system components at different levels. They work for

> networks, file, users, processes, IPCs.

Linux CGroups offer resource allocation and limitation.

## Understanding Container Runtime

The container runtime allow for starting and running the container on top of the host OS.

The container runtime is responsible for all parts of running the container which are not already a part of the running container program itself.

Different container runtime solutions exist

> docker, lxc, runc, cri-o, containerd

These runtimes are incuded in the different container solutions.

## Understanding the OCI

OCI is the Open Containers Initiative

It standerdizes the use of containers

1. The `image-spec` defines how to package a container in a 'filesystem bundle'
2. The `runtime-spec` defines how to run that filesystem in a container.

OCI standardization ensures compactibility between containers, no matter which environment thet originally come from.

The result is that for instance images made for `Docker` workwitout modification in `Red Hat Podman`.

## understanding Docker

When docker started in 2013, it offerd the following:

1. container image format
2. Dockerfile, which is a method for building container images.
3. a way to manage container images.
4. a way to run containers.
5. a way to manage container instance.
6. a solution to share container images.

`Podman` is the main alternative to Docker.
