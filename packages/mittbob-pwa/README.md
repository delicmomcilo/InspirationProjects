#About
Webpage and PWA for "MittBOB". A portal where members can get information about their membership,
buy apartments, check invoices and more.

## HTTPS, Service Workers and PWA
If you use Firefox you may skip some of the set up below as it supports "development"-workarounds.
So if you want to debug SW in the browser try using Firefox.

TLDR; Service workers only works on https. Create your own ssl certificates and trust them on devices you are testing on.
Build the project using `yarn build:dev` and serve it using `npx http-server ./build --ssl -C <yourdomaincert>.crt -K <yourkey>>.key --port 443`.
### Development
#### Creating SSL certificates
1. Update the config in `scripts/config.cnf` to match your hostname. For example `10.100.130.101 -> myname-mbp-1.bob.local (Hostname)`
2. Create root certificate and key using `create_root_cert_and_key.sh` in `scripts` folder. For example `10.100.130.101 -> myname-mbp-1.bob.local (Hostname)`
#### IOS
For PWA usage make sure to run the server on port 443, as the service worker seems to fail when in PWA mode if the port is something else.
1. Send ca.crt to your IOS device. Install the profiles.
2. Go to `Settings -> General -> About -> Settings for certificate approval` and give your cert root approval.
#### Android TBA
1. Send ca.crt to your device and install it. Make sure it has the correct access.
### Activate service worker
1. Make sure service worker init is run by checking for feature flags or similar.
#### Serve with https
1. First build your project using dev-environment `yarn build:dev`
2. Serve the project using your domain certificate `npx http-server ./build --ssl -C <cert>.crt -K <key>.key --port 443`
3. Access your project from any device on the network using your hostname `https://<hostname>`