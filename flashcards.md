## What three modes does VIM have?
- command mode
- insert mode
- last-line mode

## What is SSH
- secure shell
- two different types of authentication: username/password and ssh key

## What's wrong with logging in with a password?
- People are shit at passwords, people are always trying to steal your shit
- Use public key authentication

## How does SSH work?
- got a private key on your computer and a public key on the server
- ssh-keygen -t rsa
- my_key + my_key.pub

## What could a server be?
- a web server
- a database server
- a storage server 
- two types, dedicated server or a VPS (virtual private server)

## How to log into your server
- ssh -i ~/.ssh/my_key root@YOUR_SERVER_IP

## what is top?
- equivalent of task manager on windows 
- just type top into terminal
- type q to quit
- there's also htop

## How to install shit on linux
- apt-get install APPNAME

## How to set up your server
- `apt-get update` to update your software
- `adduser $USERNAME` (THE DOLLAR SIGN IS A PLACEHOLDER) to add user, don't want to run things as root unless you have to because it won't tell you if you're doing something stupid 
- `usermod -aG sudo $USERNAME` add user to sudo group
- `su USERNAME` to switch user to non root user
- `cat ~/.ssh/my_key.pub | ssh $USERNAME@$SERVER_IP "mkdir -p ~/.ssh && cat >> ~/.ssh.authorized_keys`
- `cat ~/.ssh/my_key.pub` print the contents of my_key.pub and pipe the output to the next command
- `ssh $USERNAME@$SERVER_IP` ssh into your server 
- `mkdir -p ~/.ssh` make a .ssh folder in your home directory if it doesn't already exist
- `cat >> ~/.ssh/authorized_keys` write the contents of the output to the file authorized_keys
- disable root login

## How to test if you have sudo permission
- cat /var/log/auth.log, only admin has permissions to view

## How to disable root access?
- sudo vi /etc/ssh/sshd_config
- PermitRootLogin no
- sudo service sshd restart 

## How to buy a domain
- can use something like namecheap.com
- also turn on two-factor authentication on your domains
- domain list -> manage -> advanced DNS
- Whoisguard just protects your email address
- Get the IP address of your VPS, add 2 A records with your IP address @ and www

## What are A records?
- an A record maps a name to one or more IP addresses, when the IP are known and stable

## What is a CNAME record?
- just maps a name to another name

## How to host a site on github
- branch: gh-pages
- add a CNAME record with the domain you own, it will point towards the domain
- reliable but not efficient

## What is nginx (engine x)?
- a HTTP and reverse proxy server, a mail proxy vserver, and a generic TCP/UDP proxy server

## What's a proxy?
- essentially takes a load of requests from different IP addresses and sends them out as one, masking the original IP address

## What's a reverse proxy?
- reverse of a proxy, takes all the internet traffic and processes it into node

## How to install and start nginx?
- sudo apt-get install nginx x
- sudo service nginx start

## How to view your nginx configuration
- sudo less /etc/nginx/sites-available/default

## How to install git, node and npm
- sudo apt-get install git
- sudo apt-get install nodejs npm

## What is a symbolic link
- basically making it so that a keyword, say node, will resolve to another word, say nodejs, making it easier to use

## How to symlink nodejs to node
- sudo ln -s /usr/bin/nodejs /usr/bin/node

## Why do you make a www directory?
- the files that get served out when people come to your site

## How to make a www directory
- sudo mkdir -p /var/www

## How to change the permissions for a directory
- sudo chown -R $USER:$USER /var/www

## How to clone a repo
- git clone httsp://github.com/young/Dev-Ops-for-Frontend.git

## how to rename something in terminal
- mv Dev-Ops-for-Frontend/ app/ to rename the Dev Ops for Frontend directory to app

## How to start a server
- node app.js
- then type in the server's ip into your browser 

## How to set up nginx
- sudo vi /etc/nginx/sites-available/default
- `location / { proxy_pass https://127.0.0.1:3001/; }`

## How to get out the app
- control + c will kill the server

## How do most basic websites work?
- domain name -> ip address -> nginx/apache -> node

## how to make a new branch in git?
- git checkout -b some_branch_name

## How do we build and develop our app?
- 

## What is Gulp?
- it's a JavaScript task runner
- similar to grunt, broccoli, brunch, jake

## What does a gulp task look like?
- 

    `gulp.task('default', function() {
        return gulp.src('sass/*.scss')
            .pipe(watch('sass/*.scss'))
            .pipe(sass())
            .pipe(gulp.dest('dist'));
    });`

## How to create gulp tasks?
- open **gulpfile.js** in VI. it's in the root directory of the demo project
- fill in the gulp task **clean-css** so that any css files in the **dist** folder are removed
```
    gulp.task('clean-css', function() {
        del([`${DIST_FOLDER}*.css`, ]).then(paths => {
            paths.length && console.log('Removed:\n', paths.join('\n'));
        });
    );
```
- add your new task to **build** task

## How to install Gulp
- sudo mkdir -p /usr/local/lib/node_modules
- sudo npm i -g gulp

## What is Forever?
- a process manager that keeps a process running indefinitely
- Similar packages are Strong Loop Process Manager and PM2

## How to run Forever
- make sure you're in www/app
- npm i -g forever
- forever start app.js
- sudo chown -R $USER /var/log/forever

## How to create a log file for the Forever process
- sudo mkdir -p /var/log/forever

## Where will your log files be?
- in /var/log

## How to start forever and log the output?
- forever start app.js >> /var/log/forever/forever.log
- cat the file to see it `cat /var/log/forever/forever.log`

## How to tail a log file?
- sudo tail -f /var/log/auth.log
- -f means follow, which means it won't just print the last 10 lines, it will follow what's happening

## How to make a npm script to run gulp and forever
-
```
    "scripts": {
        "deploy": "gulp build && forever start app.js >> /var/log/forever/forever.log"
    },
```
- then run `npm run deploy`
