FROM tarantool/tarantool:2.5

# Prepare to install lua rocks
RUN apk add unzip wget git gcc cmake make libc-dev

# Install websocket dependencies
RUN tarantoolctl rocks install https://github.com/tarantool/websocket/raw/master/websocket-scm-1.rockspec