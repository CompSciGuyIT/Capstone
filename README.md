# Capstone
A desktop application that interfaces with a database, designed for Queensland Blue Light Association Incorporated (QBLAI), a non-profit  organisation run by Police and Civilian Volunteers.

### Installing NodeJS
Download the LTS version of NodeJS from https://nodejs.org/en/
After it is installed, open a terminal and type 'node -v' to display the version of NodeJS.  This will confirm it was nstalled correctly.

### Installing and running Mariadb on Windows
Go to https://downloads.mariadb.org/ and download the most recent stable version as a .zip file.
Extract it to some location.  e.g. E:\
From a command console, navigate to this location and into the \bin folder.
Run 'mysql_install_db.exe' to set up a mysql database with a root user and no password.
THIS SHOULD BE CHANGED BEFORE GOING TO PRODUCTION!

Edit the shortcut called 'Database' in the 'Demo' folder by going into its properties and changing the target to point to where mysqld.exe is located, including the --console flag.
e.g. E:\mariadb\bin\mysqld.exe --console

Double-click the shortcut to run the server.

### Running the Demo app
From a terminal, navigate to the 'Demo' folder and type 'npm install' to install all the packages in the package.json file.
Next, type 'npm start' to run the app.

### Viewing changes to our database
When changes are made to the database in our app, we can view the changes by opening a command console and navigate to mariadb's \bin folder and logging into the server as root.
e.g. E:\mariadb\bin\mysql.exe -uroot
Once logged in, type 'use team;' to start using the database so changes can be observed.

### Creating a database from an .sql file
From a command console, navigate to mariadb's \bin folder and type 'mysql.exe -uroot < D:\database.sql'
where 'database' is the name of the .sql file and 'D:\' is its location.

### Running Metabase to view the database
A metabase.jar file needs to be downloaded from https://www.metabase.com/start/jar.html and added to the 'Demo' folder.  This file is too large for Github and must be excluded from the repo.  
This has already been done in the updated .gitignore.  A shortcut has been created named metabase, which you will need to edit by going into its properties and changing the target to 
point to where you have java.exe on your system, as well as the metabase.jar file. e.g. C:\Java\jdk-13.0.2\bin\java.exe -jar e:\QUT\Capstone\Capstone\Demo\metabase.jar

Double-click the shortcut to run Metabase and navigate to 'localhost:3000' in your browser for a first time setup.
Refer to the slack for screenshots of the process.
