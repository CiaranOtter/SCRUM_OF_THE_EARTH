#!/bin/bash

pwd
if test -f "./README.md"; then
    echo "file exits"
    rm README.md
fi

merge ./readme-sources -no-file-info
mv ./readme-sources/merged.md ./README.md