This is my personal website, deployed at https://www.georgeyang.me/.

The framework used for this website is Angular.


Deploy - Docker + Azure VM#
First build the app with <code>npm run build --prod</code> and copy the dist folder to Azure machine.
Then, go to the Azure VM and run <code>sudo docker build --tag=georgeyang:tag .</code> replace tag with a new tag
Run the docker container by <code>docker run --rm -d -p 80:80 georgeyang:tag</code>
Now the app is served on port 80 of the Azure VM

Upload docker image to Docker Hub (Optional):
Tag the docker image by <code>docker tag georgeyang:tag dereaper/georgeyang:tag</code>
Then push the docker image by <code>docker push dereaper/georgeyang:tag</code>

Todo:
Enable HTTPS for the dockerized app
