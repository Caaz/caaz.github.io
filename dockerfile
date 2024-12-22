FROM rust:bullseye AS build
RUN cargo install obsidian-export
COPY build.sh build.sh
CMD ["/build.sh"]
