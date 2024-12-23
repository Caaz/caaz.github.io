FROM rust:bullseye AS build
RUN cargo install obsidian-export
ADD --chmod=555 build.sh build.sh
CMD ["/build.sh"]
