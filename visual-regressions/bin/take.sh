#!/usr/bin/env sh
export PATH="$PATH:../node_modules/.bin/"
actual="$SNAPSHOT_DIR/actual"
rm -rf "$actual"
storycap "$STORYBOOK_URL" -f -o "$actual" --disableCssAnimation --puppeteerLaunchConfig "{\"headless\":true,\"args\":[\"--no-sandbox\",\"--disable-setuid-sandbox\",\"--disable-dev-shm-usage\"]}"
cd "$actual" || exit 1
