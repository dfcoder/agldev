# AGL Test

# The solution has two folders aglApp(Angular 2 - using angular cli) and server(nodeJs). 

Assuming you have node.js installed on your machine
#Server
A.To run the solution you will need to start the server first in git bash /CMD  window using:

    1. cd server.
    2. npm install
    3. node server.js
    4. go to http://localhost:3000/api/people 

    if the server is running properly in the server CMD window you will see the api running on localhost:3000
    please make sure that localhost 3000 is available on your machine.

    The server uses a response(httpClient was deprecated on node) object to fetch the json file from :http://agl-developer-test.azurewebsites.net/

#Client
B. To run the client you will need to open another CMD / bash window.

    1. install angular cli using:
        npm install -g @angular/cli.
    2. go to folder-> aglapp .
    3. run -> npm install
    4. run -> ng serve.
    5. open browser @ localhost:4200




