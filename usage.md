# How to use?

After successfully installing the package, open the terminal and utilize the provided arguments to create the desired payload and start the server.

## Starting the server

You need to provide 3 arguments:

*   `server`: This argument indicates that you want to start the server.
*   `--host`: This argument specifies the host address on which the server should listen. 
*   `--port`: This argument specifies the port address on which the server will be listening for incoming connections.

::: tip 
It is recommended to use ngrok or port forwarding techniques to enable attacks from machines over the internet.
:::

**Example Usage:**

To start the Deluminator server on the local machine with host address `127.0.0.1` and port `3333`, you would use the following command:
```
Deluminator server --host 127.0.0.1 --port 3333

```

Please make sure to modify the host and port values according to your specific setup to ensure proper functionality of the Deluminator attacker server.

## Building payload

To create a Deluminator payload, you need to provide the following 5 arguments:

*   `payload`: This argument indicates that you want to build a payload.
*   `--name`: This argument specifies the name for the payload.
*   `--host`: This argument specifies the host address to which the payload will attempt to connect.
*   `--port`: This argument specifies the port address to which the payload will attempt to connect.
*   `--time`: This argument specifies the interval (in minutes) at which the payload will attempt to connect to the server.

**Example Usage:**

To create a Deluminator payload named "light" that will attempt to connect to the host address `127.0.0.1` on port `3333`, with a connection attempt interval of every 1 minute, you would use the following command:

```
Deluminator payload --name light --host 127.0.0.1 --port 3333 --time 1
```
Please ensure that you modify the host and port values according to your specific setup to ensure proper functionality and successful communication between the payload and the server.
