#!/bin/bash

DATE=$(date '+%Y-%m-%d %H:%M:%S')
MESSAGE="Mise à jour automatique - $DATE"

git add .

if git diff --cached --quiet; then
  echo "Aucune modification à commit."
  exit 0
fi

git commit -m "$MESSAGE"
git push

echo "✅ Commit envoyé : $MESSAGE"
