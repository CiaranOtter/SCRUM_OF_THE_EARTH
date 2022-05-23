#!/bin/bash

pwd
if test -f "./README.md"; then
    echo "file exits"
    rm README.md
fi

cd readme-sources
ls
mdmerge main.md coverage.md -o README.md
mv README.md ../README.md