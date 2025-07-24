#!user/bin/bash
git add .
echo "Add commit Message: "
read message
git commit -m "$message"
git push
