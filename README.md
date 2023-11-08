# Acquired.com Components Examples

This repository contains examples demonstrating the implementation of [Acquired Components](https://docs.acquired.com/docs/components). Acquired Components compromises a collection of pre-built UI components supported by a Javascript SDK. It allows you to integrate the necessary cardholder data fields inyour custom checkout, ensuring full PCI-DSS SAQ-A compliance.

View a live demonstration of these examples here: https://acquiredcom.github.io/components-examples/

## Documentation

For further information on this product, please refer to the relevant documentation listed below:

- [Guide](https://docs.acquired.com/docs/components)
- [API Reference](https://docs.acquired.com/reference/create-session-id)
- [Set up & Integrate](https://docs.acquired.com/docs/set-up-and-integrate-components)
- [Styling](https://docs.acquired.com/docs/styling-components)

## Examples

- [Example 1](./example-1/): Individual iframe example

[![Example 1](https://github.com/acquiredcom/components-examples/raw/main/assets/149580745/1c1c90b1-7f2c-40a2-8264-5ec7035f4e5f)](./example-1/)

## Running locally

To run these examples, you'll need a web server. Even thought the examples consist of plain HTML, CSS, and Javascript, Acquired Components requires a valid hostname (e.g. localhose or 127.0.0.1).

Follow these steps:

1. Firstly, clone the repository

```bash
git clone git@github.com:acquired/components-examples.git
```

2. Navigate to the the repository

```bash
cd components-example
```

3. Access the examples through a web server. Use your web server software of choice to serve the examples. Ensure it's configured to host the content at a valid hostname, such as:

```bash
http://localhost/components-example
```
