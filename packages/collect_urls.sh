#!/usr/bin/env bash

OUT_FILE=packages.txt
echo '' > ${OUT_FILE} # Clear file
for dir in */; do
  # Get git url
  pushd ${dir} > /dev/null
  URL=$(cat package.json | python -c 'import sys, json; print(json.load(sys.stdin)["repository"]["url"])')
  popd > /dev/null

  # Concatenate onto packages file
  echo ${URL} >> ${OUT_FILE}
  echo ${URL}
done

