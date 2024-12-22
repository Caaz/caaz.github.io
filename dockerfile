FROM rust:bullseye AS build
RUN cargo install obsidian-export
CMD ["obsidian-export", "/src/vault", "/src/content"]
