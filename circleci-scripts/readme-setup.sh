#!/bin/bash

pwd
rm README.md
cd readme-sources
ls
mdmerge main.md coverage.md -o README.md
mv README.md ../README.md