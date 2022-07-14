# to run --  python insertUser.py
import pymongo

client = pymongo.MongoClient("mongodb+srv://<username>:<password>@cluster0.tjdvs.mongodb.net/<dbname>?retryWrites=true&w=majority")
bibliothekdb = client["bibliothek"]
usersCollecn = bibliothekdb["flags"]

# doc = {"email":"harsh_11913052@nitkkr.ac.in","password":"1234","name":"harsh chauhan","imgUrl":"https://miro.medium.com/max/875/1*7HZGoVt_I3g_3f-j8uwpSg.jpeg","username":"schwarzengineer"} 
doc  = {"imgUrl":"https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg","farbe":["geld", "blau", "rot"],"artikel":"das","land":"Kolumbien"}

res = usersCollecn.insert_one(doc)
print(res)