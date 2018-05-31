#!/bin/bash
nightwatch --env chrome
nightwatch-html-reporter  -d ./reports -u true -p true

if [[ $(tasklist | grep chromedriver.exe) ]] ; then
echo "chromedriver found"
taskkill //IM chromedriver.exe //F
fi
if [[ $(tasklist | grep geckodriver.exe) ]] ; then
echo "geckodriver found"
taskkill //IM geckodriver.exe //F
fi
exit 0