FROM rust:bullseye AS build
RUN cargo install obsidian-export
COPY --chmod=777 build.sh /build.sh
ENTRYPOINT ["sh", "/build.sh"]
