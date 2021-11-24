#!/bin/sh

ROOT_DIR=/app/dist

echo "Replacing env constants in JS"
for file in $ROOT_DIR/assets/js/app.*.js* $ROOT_DIR/index.html;
do
  echo "Processing $file ...";

  sed -i 's|VUE_APP_GEOCODING_API|'${VUE_APP_GEOCODING_API}'|g' $file

done

serve -l 80 -s dist