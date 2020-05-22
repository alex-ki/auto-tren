# Code

https://github.com/alex-ki/auto-tren.git

# Run

## 1. Install Node.js

Install __Node.js__ (together with the NPM tool) by following instructions available on [nodejs.org](https://nodejs.org).

## 2. Install Nightwatch

Run 'npm install'

## 3. Run Nightwatch
Run 'nigtwatch'
 
## Reports
1. junit xml reports autogenerated in reports folder
2. reporter.html autogenerated 
3. using
`junit-viewer --results=reports --save=jeport.html`

## Docker 
run `docker-compose up --build`

## Jenkins 

terminal: 

`docker pull jenkins/jenkins:lts`

`docker run -p 8080:8080 -p 50000:50000 -v /home/alex/jenkins_home:/var/jenkins_home jenkins/jenkins:lts`

`sudo chown 1000 /home/alex/jenkins_home`

http://0.0.0.0:8080 - jenkins

## Web site for testing
https://bamboo.dev.sozvezdie-tour.ru/cat/

## Test runner
1. by tags: `nightwatch --tag catalog --skiptags consistency`
2. by groups: `nightwatch --group catalog --skipgroup mocha`
3. by suit: `nightwatch tests/order.js`
4. by test: `nightwatch tests/order.js --testcase "Add card to cart"`
5. by env: `nightwatch -e gecko`

## FIX
... dial unix /var/run/docker.sock: connect: permission denied"

`sudo chmod 777 /var/run/docker.sock`

... stat /root/entrypoint.sh: permission denied


chmod ugo+rwx entrypoint.sh

ugo+rwx
chmod ugo+rwx entrypoint.sh
git add entrypoint.sh
git commit -m "Changing file permissions"
git push origin HEAD:master

git add --chmod=+x entrypoint.sh
git update-index --chmod=+x entrypoint.sh
 
---------
USER root
RUN adduser jenkins users
USER jenkins 
RUN chmod 777 /home/jenkins


 