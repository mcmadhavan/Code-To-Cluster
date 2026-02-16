import express from 'express';

const app = express(); // Initialize new Express app
const PORT = process.env.PORT || 3000; // Set the port for the server / exposing port number

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from a Container!', // Define a route for the root URL that returns a JSON message
        Service: 'hello-node', // Add a service name to the response for better identification
        pod: process.env.HOSTNAME || 'unknown', // Include the pod name in the response for better debugging
        time: new Date().toISOString() // Add a timestamp to the response for better tracking
    });
}); // End of the route definition

app.get('/readyz', (req, res) => {res.status(200).send('ready') }); // Define a readiness probe endpoint that returns a JSON status }); // End of the readiness probe route definition
app.get('/healthz', (req, res) => {res.status(200).send('ok') }); // Define a liveness probe endpoint that returns a JSON status }); // End of the liveness probe route definition
// both the above endpoints are used by Kubernetes to check the health and readiness of the application

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);}); // Start the server and log a message to the console
// To hit endpoint and make the app listen on to port 3000


