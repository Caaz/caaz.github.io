FROM rust:1-bullseye AS build

WORKDIR /src

RUN <<EOF
cargo install obsidian-export
EOF

CMD obsidian-export ./vault ./content
