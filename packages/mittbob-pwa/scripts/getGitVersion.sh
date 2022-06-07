 #!/usr/bin/env bash
echo "Build: $(git describe --exact-match `git rev-parse --short HEAD`) - $(git rev-parse --short HEAD)"