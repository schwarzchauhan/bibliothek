bibliothek
===


how to run 
```bash
# go to project directory
node server.js

# or

pm2 start ecosystem.config.js
```

pm2
---
error file path (default to $HOME/.pm2/logs/XXXerr.log)  
output file path (default to $HOME/.pm2/logs/XXXout.log)


> $ node --version  
> v16.13.2

> npm -v
> 8.1.2

> $ pm2 -v
> 5.1.2


## resource 

- [git-bash-to-work-with-tabs-on-windows](https://stackoverflow.com/questions/20202269/set-up-git-bash-to-work-with-tabs-on-windows)
- [extract, unzip a .7z file](https://answers.microsoft.com/en-us/windows/forum/all/unable-to-install-7z-file/bd244e05-50c7-4420-936d-4a56d0375177)



## express

docs
- https://expressjs.com/en/4x/api.html#res.status


## routes 

`GET /quiz/:lang/:noOfMcqs` - get random mcq for quiz
`POST /quiz/submit` - to submit mcq choies selected in the quiz
[
    {
        "_id": "628459825e36d0e7f632781a",
        "ans": "main"
    },
    {
        "_id": "628455b75e36d0e7f632766d",
        "ans": "main"
    },
    {
        "_id": "628459765e36d0e7f63277e4",
        "ans": "wesser"
    },
    {
        "_id": "628459675e36d0e7f632779c",
        "ans": "elbe"
    },
    {
        "_id": "627b22a775fbda8f299fd131",
        "ans": "rhein"
    },
    {
        "_id": "62844af9bccc2c4df9bd4809",
        "ans": "wesser"
    },
    {
        "_id": "628459885e36d0e7f6327838",
        "ans": "elbe"
    },
    {
        "_id": "628455cf5e36d0e7f63276e8",
        "ans": "rhein"
    },
    {
        "_id": "628451b85e36d0e7f632762e",
        "ans": "main"
    },
    {
        "_id": "6284597f5e36d0e7f632780e",
        "ans": "wesser"
    }
]