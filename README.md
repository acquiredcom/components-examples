# Acquired.com Components Examples

This repository contains examples demonstrating the implementation of [Acquired Components](https://docs.acquired.com/docs/components). Acquired Components compromises a collection of pre-built UI components supported by a Javascript SDK. It allows you to integrate the necessary cardholder data fields in your custom checkout, ensuring full PCI-DSS SAQ-A compliance.

View a live demonstration of these examples here: [https://acquiredcom.github.io/components-examples/](https://github.com/acquiredcom/components-examples/tree/main/example-1)

For further information on this product, please refer to our Components documentation

- [API Reference](https://docs.acquired.com/reference/create-session-id)
- [Set up & Integrate Guide](https://docs.acquired.com/docs/set-up-and-integrate-components)
- [Styling](https://docs.acquired.com/docs/styling-components)

## Examples

- [Example 1](./example-1/): Individual iframe example

![Screenshot 2023-11-08 at 11 05 23](https://github.com/acquiredcom/components-examples/assets/149580745/1c88e219-f47c-450a-9f56-1d4cf6ff7812)

## Running locally

To run these examples, you'll need a web server. Even thought the examples consist of plain HTML, CSS, and Javascript, Acquired Components requires a valid hostname _(e.g. localhost or 127.0.0.1)._

Follow these steps:

1. The first step is to clone the repository.

```bash
git clone git@github.com:acquired/components-examples.git
```

2. Navigate to the the repository.

```bash
cd components-example
```

3. Access the examples through a web server. Use your web server software of choice to serve the examples. Ensure it's configured to host the content at a valid hostname, such as:

```bash
http://localhost/components-example
```
