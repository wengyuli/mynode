

- 1. Setting the environment variable 

gsutil cors set /Users/wengyuli/Documents/Projects/ottlabs/video/cors-json-file.json gs://ott_videos

* windows PowerShell 
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\[FILE_NAME].json"

* windows command prompt
set GOOGLE_APPLICATION_CREDENTIALS=[PATH]


* mac & linux
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/[FILE_NAME].json" 

- 2. run index 
* node index.js
