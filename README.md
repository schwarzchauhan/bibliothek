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

## process in windows 
<https://stackoverflow.com/questions/39632667/how-do-i-kill-the-process-currently-using-a-port-on-localhost-in-windows>  \

```
netstat -ano | findstr :<PORT>  
taskkill /PID <PID> /F
```


## resource 

- [git-bash-to-work-with-tabs-on-windows](https://stackoverflow.com/questions/20202269/set-up-git-bash-to-work-with-tabs-on-windows)
- [extract, unzip a .7z file](https://answers.microsoft.com/en-us/windows/forum/all/unable-to-install-7z-file/bd244e05-50c7-4420-936d-4a56d0375177)


object destructuing  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring>  \

## express

docs
- https://expressjs.com/en/4x/api.html#res.status


## dependencies 
npm install express-handlebars --save
<https://stackoverflow.com/questions/69959820/typeerror-exphbs-is-not-a-function>  \
iterate over array of object <https://stackoverflow.com/questions/22696886/how-to-iterate-over-array-of-objects-in-handlebars>  \
<https://stackoverflow.com/questions/33979051/typeerror-handlebars-registerhelper-is-not-a-function>  \

## scripts
to run scripts in scripts folder 
replace `<password>` by your mongodb password 
replace `username` by your mongodb username
replace `myFirstDatabase` by your database name


then to run script 
`python script.js`
> Python 3.7.6

### imgbb api to upload the img to cloud & get the url
<https://stackoverflow.com/questions/62733308/how-to-use-imgbb-api-with-axios-in-react>  \


### css
https://getbootstrap.com/docs/5.0/content/tables/



## debugging 
<https://nodejs.org/en/docs/guides/debugging-getting-started/>  \



## routes 

`GET /quiz/:lang/:noOfMcqs` - get random mcq for quiz
`POST /quiz/submit` - to submit mcq choies selected in the quiz
[
    {
        "_id": "628455c95e36d0e7f63276c7",
        "ansGiven": ""
    },
    {
        "_id": "628459815e36d0e7f6327814",
        "ansGiven": ""
    },
    {
        "_id": "628455bd5e36d0e7f632768b",
        "ansGiven": ""
    },
    {
        "_id": "62844af9bccc2c4df9bd4809",
        "ansGiven": "main"
    },
    {
        "_id": "6284595a5e36d0e7f6327760",
        "ansGiven": "elbe"
    },
    {
        "_id": "628455b95e36d0e7f6327679",
        "ansGiven": "rhein"
    },
    {
        "_id": "628459515e36d0e7f6327736",
        "ansGiven": "main"
    },
    {
        "_id": "628455d05e36d0e7f63276ee",
        "ansGiven": "wesser"
    },
    {
        "_id": "62778091b8bdfc30c073393f",
        "ansGiven": "wesser"
    },
    {
        "_id": "628459895e36d0e7f632783e",
        "ansGiven": "wesser"
    }
]
response -->
{
    "score": "3/10",
    "mcqs": [
        {
            "_id": "628455c95e36d0e7f63276c7",
            "quesn": "testques1652839880856",
            "choices": [
                "elbe",
                "rhein",
                "main",
                "wesser"
            ],
            "ans": "wesser",
            "ansGiven": "",
            "isCorrect": false
        },
        {
            "_id": "628459815e36d0e7f6327814",
            "quesn": "testques1652840832739",
            "choices": [
                "elbe",
                "rhein",
                "main",
                "wesser"
            ],
            "ans": "wesser",
            "ansGiven": "",
            "isCorrect": false
        },
        {
            "_id": "628455bd5e36d0e7f632768b",
            "quesn": "testques1652839868810",
            "choices": [
                "elbe",
                "rhein",
                "main",
                "wesser"
            ],
            "ans": "wesser",
            "ansGiven": "",
            "isCorrect": false
        },
        {
            "_id": "62844af9bccc2c4df9bd4809",
            "quesn": "testques1652837113023",
            "choices": [
                "elbe",
                "rhein",
                "main",
                "wesser"
            ],
            "ans": "wesser",
            "ansGiven": "main",
            "isCorrect": false
        },
        {
            "_id": "6284595a5e36d0e7f6327760",
            "quesn": "testques1652840793973",
            "choices": [
                "elbe",
                "rhein",
                "main",
                "wesser"
            ],
            "ans": "wesser",
            "ansGiven": "elbe",
            "isCorrect": false
        },
        {
            "_id": "628455b95e36d0e7f6327679",
            "quesn": "testques1652839865203",
            "choices": [
                "elbe",
                "rhein",
                "main",
                "wesser"
            ],
            "ans": "wesser",
            "ansGiven": "rhein",
            "isCorrect": false
        },
        {
            "_id": "628459515e36d0e7f6327736",
            "quesn": "testques1652840785683",
            "choices": [
                "elbe",
                "rhein",
                "main",
                "wesser"
            ],
            "ans": "wesser",
            "ansGiven": "main",
            "isCorrect": false
        },
        {
            "_id": "628455d05e36d0e7f63276ee",
            "quesn": "testques1652839888593",
            "choices": [
                "elbe",
                "rhein",
                "main",
                "wesser"
            ],
            "ans": "wesser",
            "ansGiven": "wesser",
            "isCorrect": true
        },
        {
            "_id": "62778091b8bdfc30c073393f",
            "quesn": "testques1651998864651",
            "choices": [
                "elbe",
                "rhein",
                "main",
                "wesser"
            ],
            "ans": "wesser",
            "ansGiven": "wesser",
            "isCorrect": true
        },
        {
            "_id": "628459895e36d0e7f632783e",
            "quesn": "testques1652840841005",
            "choices": [
                "elbe",
                "rhein",
                "main",
                "wesser"
            ],
            "ans": "wesser",
            "ansGiven": "wesser",
            "isCorrect": true
        }
    ]
}
## middleware used 
- [https://github.com/richardgirges/express-fileupload#readme](express-fileupload)


## API(app. pgmming. interface)

`POST user/register`
`POST /api/mcq/save` : to save the mcq  \
`POST /upload/img` : to upload img to cloud & save imgUrl in user collection   \
