from flask import Flask, render_template, redirect, url_for, request
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os

app = Flask(__name__)

db_password = os.getenv("DB_PASSWORD")
port = os.getenv("PORT")

app.config["SQLALCHEMY_DATABASE_URI"] = (
    f"postgresql://postgres:{db_password}@localhost:{port}/recipes_db"
)
db = SQLAlchemy(app)


class FavRecipe(db.model):
    id = db.Column(db.Integer, primary_key=True)
    recipe_name=
    recipe_ingredients=
    recipe_steps=


@app.route("/")
def index():
    db_recipe_results=FavRecipe.query.all()
    return render_template(
        "index.html", recipe_name=["Pizza", "Burger", "Pasta", "French Fries"]
    )


@app.route("/form")
def form():
    return render_template("form.html")


@app.route("/results", methods=["POST"])
def results():
    rcp_name = request.form["rcp_name"]
    rcp_ingrdnts = request.form["recp_ingrdnts"]
    rcp_steps = request.form["recp_steps"]
    print(rcp_name)
    return redirect(url_for("index"))


if __name__ == "__main__":
    app.debug = True
    app.run()
