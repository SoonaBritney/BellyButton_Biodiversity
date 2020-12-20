from flask import Flask, render_template
from flask_pymongo import PyMongo
import scraping
app = Flask(__name__)
# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/mars"
app.config['mars'] = 'mars'
#app.config['SECRET_KEY'] = 'secret_key'
mongo = PyMongo(app)
@app.route("/")
def index():
   mars = mongo.db.mars.find_one()
   return render_template("index.html", mars=mars)
@app.route("/scrape")
def scrape():
   mars = mongo.db.mars
   mars_data = scraping.scrape_all()
   mars.update({}, mars_data, upsert=True)
   return "Scraping Successful!"
if __name__ == "__main__":
    app.run()


