#!/bin/sh

CURRENT_DIR=`dirname $0`
cd ${CURRENT_DIR}
git pull
yarn build
