# to run --  python insertUser.py
import pymongo

client = pymongo.MongoClient("mongodb+srv://username:<password>@cluster0.tjdvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
bibliothekdb = client["bibliothek"]
mcqCollecn = bibliothekdb["mcqs"]


cursor = mcqCollecn.find({}, {'_id': 1, 'quesn':1})
count = mcqCollecn.count_documents({})


# If only one parameter is specified, the type() function returns the type of this object, https://www.w3schools.com/python/ref_func_type.asp
print(type(cursor), count)
n = 1
ctTestQ = 0
for doc in cursor:
    # Dictionaries are used to store data values in key:value pairs., https://www.w3schools.com/python/python_dictionaries.asp
    quesn = doc['quesn']
    if quesn[0:8] == 'testques':
        print(n, type(doc), doc['quesn'], doc, quesn[0:8])
        ctTestQ += 1
    n+=1

print('=======================================================================')
print('=======================================================================')
print('=======================================================================')
print('=======================================================================')
print('total test quesn added by postman runner', ctTestQ)