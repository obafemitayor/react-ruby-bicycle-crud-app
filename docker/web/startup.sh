#!/bin/bash
cd /www

# Remove server.pid if it already exists from a previous run
rm -rf tmp/pids/server.pid

# Set up hosts (docker seems to replace this file each time the system boots)
echo "-----------------------------------------------"
echo "---------Adding domains to /etc/hosts----------"
echo "----(For background inter-engine requests)-----"
echo "-----------------------------------------------"
# If any engine needs to make a request (ie POST) to one of these domains,
# direct the traffic to this container (we're serving on 0.0.0.0)
# echo "0.0.0.0 $APP_DOMAIN $AUTH_DOMAIN $REACT_DOMAIN $CORE_DOMAIN $MESSENGER_DOMAIN" | tee -a /etc/hosts
# cat /etc/hosts

# Check if the container has already been set up
if [ -f /home/already_set_up ] ; then
	echo "-----------------------------------------------"
	echo "-----------Container Already Set Up!-----------"
	echo "-----------------------------------------------"
else
	echo "-----------------------------------------------"
	echo "----------------Installing Gems----------------"
	echo "-----------------------------------------------"
	bundle install

	echo "-----------------------------------------------"
	echo "--------------Setting up Database--------------"
	echo "-----------------------------------------------"
	bin/rails db:prepare

	echo "-----------------------------------------------"
	echo "--------------Setting up GraphQL---------------"
	echo "-----------------------------------------------"
	bin/rails graphql:schema:dump

	echo "-----------------------------------------------"
	echo "----------------Starting Server----------------"
	echo "-----------------------------------------------"
  bin/dev
fi
