# Capstone
A desktop application that interfaces with a database, designed for Queensland Blue Light Association Incorporated (QBLAI), a non-profit  organisation run by Police and Civilian Volunteers.

### Installing NodeJS
Download the LTS version of NodeJS from https://nodejs.org/en/
After it is installed, open a terminal and type 'node -v' to display the version of NodeJS.  This will confirm it was nstalled correctly.

### Installing and running Mongodb on Windows
Download Mongodb from https://www.mongodb.com/download-center/community
Get the zip archive and unzip to some location.  e.g. E:\
and rename folder to 'mongodb'.
Create a folder alongside this called 'mongodb-data'

Edit the shortcut called 'Database' in the 'Demo' folder by going into its properties and changing the target to point to where mongod.exe is located, including the --dbpath flag.
e.g. E:\mongodb\bin\mongod.exe --dbpath=E:\mongodb-data

Double-click the shortcut to run the server.

### Installing and running the databse GUI viewer - a Mongodb admin tool
Search 'robo 3t' and go to https://robomongo.org/download 
and click 'Download Robo 3T'.

Download, install and run.

Click 'Create' and under the 'Connection' tab change the 'Name' to whatever you want to call your database (for the demo it is 'Team').

Click 'Test' and then 'Save' when the connection is confirmed.

Double-click the name to connect.

Right-click on the database in the panel on the left and select 'Open Shell'.
Type 'db.version()' and click 'Execure query' (the green triangle "play" button) to confirm the database and Robo 3T is up & running correctly.

### Running the Demo app
From a terminal, navigate to the 'Demo' folder and type 'npm install' to install all the packages in the package.json file.
Next, type 'npm start' to run the app.

### Viewing changes to our database in Robo 3T
When changes are made to the database in our app, we can view the changes by right-clicking the database in the left panel and selecting 'Refresh'.
Next, double-click the database, then double-click 'Collections', then right-click the table and selecct 'View Documents'.