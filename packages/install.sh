#!/usr/bin/env bash

echo "Installing packages..."
PACKAGE_FILE=packages.txt
PACKAGES=$(cat ${PACKAGE_FILE})
for package in ${PACKAGES}; do
  if [[ ! -n "${package}" ]]; then
	echo "+ Installing package '${package}'"
	apm install ${package}
  fi
done

