#!/bin/bash
nightwatch --env ffwin
nightwatch-html-reporter  -d ./reports -u true -p true

if [[ $(tasklist | grep geckodriver.exe) ]] ; then
  echo "geckodriver found"
  taskkill //IM geckodriver.exe //F
fi

exit 0
