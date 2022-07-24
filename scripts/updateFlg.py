# to run --  python updateFlg.py
import pymongo
from bson import ObjectId
from pprint import pprint  # to pretty print the mongo bson doc

client = pymongo.MongoClient("mongodb+srv://<username>:<password>@cluster0.tjdvs.mongodb.net/<yourDatabaseName>?retryWrites=true&w=majority")
bibliothekdb = client["bibliothek"]
usersCollecn = bibliothekdb["flags"]


# As we mentioned in the previous section, 
# if no documents are found that match the specified query for an update statement, 
# no documents will be updated.
# However, you can use the upsert boolean option as the last element in your method call’s tuple object to change this behavior–
# this flag will instruct MongoDB to insert a new document if the call’s query doesn’t find a document that matches. 
# Let’s use the upsert option in the next example:
new_val = {"country": "Ukraine"}
# new_val = {"farbe": ["rot","weiß"]}
res = usersCollecn.update_one(
    {"_id" : ObjectId("")},
    {"$set": new_val},
    upsert=False
)
print(res)

docAftrUpdt = usersCollecn.find({"_id" : ObjectId("")})
pprint(docAftrUpdt[0])