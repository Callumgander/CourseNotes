How to make a server
- apt-get update to update your software
- adduser $USERNAME (THE DOLLAR SIGN IS A PLACEHOLDER) to add user, don't want to run things as root unless you have to because it won't tell you if you're doing something stupid
- usermod -aG sudo $USERNAME add user to sudo group
- su USERNAME to switch user to non root user
- ** cat ~/.ssh/my_key.pub | ssh $USERNAME@$SERVER_IP "mkdir -p ~/.ssh && cat >> ~/.ssh.authorized_keys**
- cat ~/.ssh/my_key.pub print the contents of my_key.pub and pipe the output to the next command
- **ssh $USERNAME@$SERVER_IP ssh into your server**
- mkdir -p ~/.ssh make a .ssh folder in your home directory if it doesn't already exist
- cat >> ~/.ssh/authorized_keys write the contents of the output to the file authorized_keys
disable root login

How to install and start nginx?
- sudo apt-get install nginx
- sudo service nginx start

How to create an ssh key
- ssh-keygen -t rsa
- my_key + my_key.pub

How to tail a log file?
- sudo tail -f /var/log/auth.log
- -f means follow, which means it won't just print the last 10 lines, it will follow what's happening

How to make a www directory
- sudo mkdir -p /var/www

How to install things on linux
- apt-get install APPNAME

How to make a npm script to run gulp and forever
- 
    "scripts": {
        "deploy": "gulp build && forever start app.js >> /var/log/forever/forever.log"
    },
then run npm run deploy

How to log into your server
- ssh -i ~/.ssh/my_key root@YOUR_SERVER_IP

How to change the permissions for a directory
- sudo chown -R $USER:$USER /var/www


How to start forever and log the output?
- forever start app.js >> /var/log/forever/forever.log
- cat the file to see it cat /var/log/forever/forever.log

What alternative techniques do we have for creating objects?
Generate objects using function
``
function userCreator(name, score) {

let newUser = {};
newUser.name = name;
newUser.score = score;
newUser.increment = function() {
    newUser.score++;
}
return newUser
};

// later

let user1 = userCreator("Will", 3);
let user2 = userCreator("Tim", 5);
user1.increment();
user2.increment();


How to test if you have sudo permission
- cat /var/log/auth.log, only admin has permissions to view

how to rename something in terminal
- mv Dev-Ops-for-Frontend/ app/ to rename the Dev Ops for Frontend directory to app

How to clone a repo
- git clone httsp://github.com/young/Dev-Ops-for-Frontend.git

How to disable root access on a server?
- sudo vi /etc/ssh/sshd_config
- PermitRootLogin no
- sudo service sshd restart


****************

how to make a new branch in git?
- git checkout -b some_branch_name

How to view your nginx configuration
- sudo less /etc/nginx/sites-available/default

How to set up nginx
- sudo vi /etc/nginx/sites-available/default
- location / { proxy_pass https://127.0.0.1:3001/; }

How to create a log file for the Forever process
- sudo mkdir -p /var/log/forever

How to symlink nodejs to node
- sudo ln -s /usr/bin/nodejs /usr/bin/node

How do you ping a server
- ping sitename.com

How to remove all files in a non-empty directory with no prompts
- rm -r dirname