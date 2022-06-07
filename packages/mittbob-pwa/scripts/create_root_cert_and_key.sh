 #!/usr/bin/env bash
    openssl genrsa -out key.pem 2048
    openssl req -x509 -new -nodes -key key.pem -sha256 -days 600 -out ca.crt -extensions v3_ca -config config.cnf
