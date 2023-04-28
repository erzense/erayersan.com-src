from flask import Flask,render_template,flash,redirect,url_for,session, logging,request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///C:/Users/eray2/Desktop/Portfolio Website/blogs.db"
db = SQLAlchemy(app)

class Blogs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    url = db.Column(db.String(80))

class Websites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    url = db.Column(db.String())

class Games(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    logo = db.Column(db.String())
    url = db.Column(db.String())

@app.route('/')
def index():
    blogs = Blogs.query.all()
    games = Games.query.all()
    websites = Websites.query.all()
    return render_template("index.html",blogs=blogs,games = games, websites = websites)



with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)