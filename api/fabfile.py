#!/usr/bin/env/python
from fabric.api import *

env.user = 'nginx'
env.password = 'password'
env.host_string = '10.10.3.137'

def copyNodeMod():
    local('tar -cf ./node_mod.tar.gz ./node_modules')
    put('./node_mod.tar.gz', '~/test')
    run('tar -xf ~/test/node_mod.tar.gz')
    local('rm -rf ./node_mod.tar.gz')
    run('rm -rf ~/test/node_mod.tar.gz')
