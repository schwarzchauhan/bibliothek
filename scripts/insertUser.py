# to run --  python insertUser.py
import pymongo

client = pymongo.MongoClient("mongodb+srv://username:<password>@cluster0.tjdvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
bibliothekdb = client["bibliothek"]
usersCollecn = bibliothekdb["users"]

doc = {"email":"harsh_11913052@nitkkr.ac.in","password":"1234","name":"harsh chauhan","imgUrl":"https://miro.medium.com/max/875/1*7HZGoVt_I3g_3f-j8uwpSg.jpeg","username":"schwarzengineer"} 

res = usersCollecn.insert_one(doc)
print(res)