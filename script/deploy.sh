#!/bin/bash
function is_installed {
  # set to 1 initially
  local return_=1
  # set to 0 if not found
  type $1 >/dev/null 2>&1 || { local return_=0;  }
  # return
  echo "$return_"
}

if [ "$(is_installed netlify)" == "0" ]; then
  echo "Installing netlify ⬇️⬇️⬇️"
  npm install -g netlify-cli
fi

echo "Building source 🧚‍♂️ 🌼"
netlify build

echo "Deploying to netlify 🌏 🚀"
netlify deploy





