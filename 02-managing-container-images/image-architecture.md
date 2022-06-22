## Understanding image Architecture.

A container image is basically a tar file with associated metadata.
To build container in an efficient way, it typically consists of multiple layers.

While building an image, a base system image is used.
On top of the base system image, the application is installed as an additional layer.
Some of the standard images themselves already consist of multiple layers.
using layers ensures that images are built efficiently.
