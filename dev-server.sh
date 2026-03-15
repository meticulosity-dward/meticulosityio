#!/bin/bash
# Persistent dev server wrapper for LaunchAgent
export PATH="/Users/webdev/.nvm/versions/node/v24.13.1/bin:$PATH"
cd /Users/webdev/meticulosity-io || exit 1

# Clean stale lock
rm -f .next/dev/lock

# Kill anything still on this port
PID=$(lsof -i :4444 -t 2>/dev/null)
if [ -n "$PID" ]; then
  kill -9 $PID 2>/dev/null
  sleep 3
fi

exec npx next dev -p 4444
