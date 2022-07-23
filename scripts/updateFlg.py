# to run --  python updateFlg.py
import pymongo
from bson import ObjectId

client = pymongo.MongoClient("mongodb+srv://username:<password>@cluster0.tjdvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
bibliothekdb = client["bibliothek"]
usersCollecn = bibliothekdb["flags"]


# As we mentioned in the previous section, 
# if no documents are found that match the specified query for an update statement, 
# no documents will be updated.
# However, you can use the upsert boolean option as the last element in your method call’s tuple object to change this behavior–
# this flag will instruct MongoDB to insert a new document if the call’s query doesn’t find a document that matches. 
# Let’s use the upsert option in the next example:
new_val = {"country": "Austria"}
res = usersCollecn.update_one(
    {"_id" : ObjectId("62d53ad2d1cbee147e71cda1")},
    {"$set": new_val},
    upsert=False
)
print(res)