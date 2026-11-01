#!/bin/bash
export PATH=$PATH:/home/sean/.nvm/versions/node/v20.19.0/bin/npm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

cd ~/_stacks/projects/play/
nvm use 20
npm run start
exec $SHELL
