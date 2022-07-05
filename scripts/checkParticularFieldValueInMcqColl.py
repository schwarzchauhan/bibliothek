# to run --  python insertUser.py
import pymongo

client = pymongo.MongoClient("mongodb+srv://username:<password>@cluster0.tjdvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
bibliothekdb = client["bibliothek"]
mcqCollecn = bibliothekdb["mcqs"]


cursor = mcqCollecn.find({})
count = mcqCollecn.count_documents({})


print(type(cursor), count)
n = 1
for document in cursor:
    print(n, document)
    n+=1