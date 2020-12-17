
# Simple Python web

## Usage
# Run with docker:
docker run -it --rm --name simplewebpython -p 8000:8000 -w /data -v $(pwd)/simplewebpython:/data python bash

# Once the container is up start the server:
python3 -m http.server --cgi
