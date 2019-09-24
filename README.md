This is my personal website, deployed at https://www.georgeyang.me/.

The framework used for this website is Angular.


Deploy - Docker + Azure VM#<br>
First build the app with <code>npm run build --prod</code> and copy the dist folder to Azure machine.<br>
Then, go to the Azure VM and run <code>sudo docker build --tag=georgeyang:tag .</code> replace tag with a new tag<br>
Run the docker container by <code>docker run --rm -d -p 80:80 georgeyang:tag</code><br>
Now the app is served on port 80 of the Azure VM<br>

Upload docker image to Docker Hub (Optional):<br>
Tag the docker image by <code>docker tag georgeyang:tag dereaper/georgeyang:tag</code><br>
Then push the docker image by <code>docker push dereaper/georgeyang:tag</code><br>

Deploy - Github Page<br>
This repo is configured to deploy through docs folders in master branch, therefore, build the prod distribution in
the branch using <code>npm run doc</code> script before merge it to master<br>

Todo:<br>
1. Enable HTTPS for the dockerized app<br>
2. Componentizing sections so it is going to be easier to update them (should do it with rewriting using React)<br>