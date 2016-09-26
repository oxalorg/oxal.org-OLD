#!/usr/bin/env sh

basedir=`pwd`
nginxdir=/etc/nginx/sites-available
vassaldir=/etc/uwsgi/vassals
app=oxal.org

sudo cp -iv $basedir/$app.conf $nginxdir/$app.conf
sudo cp -iv $basedir/$app.uwsgi.ini $vassaldir/$app.uwsgi.ini

# restart the uwsgi vassal process
sudo touch $vassaldir/$app.uwsgi.ini || echo "uwsgi touch failed."

# check nginx config and restart
sudo nginx -t && echo "Now RUN: sudo service nginx restart" || echo "nginx config error"

while true; do
    read -p "Do you wish to reload nginx?" yn
    case $yn in
        [Yy]* ) sudo nginx -s reload; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer Y or N";;
    esac
done
