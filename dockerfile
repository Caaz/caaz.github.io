FROM rust:bullseye AS build
RUN <<EOF
apt-get update
apt-get -y install inotifytools
cargo install obsidian-export
EOF

WORKDIR /src/
COPY build.sh /src/build.sh

ENTRYPOINT ["/src/build.sh"]
