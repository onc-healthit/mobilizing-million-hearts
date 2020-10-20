cd ui

yarn build:$1

cd ..

zip -r ascvd.zip api -x "*.git*" -x "*node_modules*"