#!/usr/bin/python3
"""
Flask App to integrate with Twitter Clone HTML
"""
from flask import Flask, render_template

# Setup Flask
app = Flask(__name__)
app.url_map.strict_slashes = False
port = 5000
host = '0.0.0.0'

# Page rendering
@app.route('/twitter_clone')
def twitter_page():
    return render_template('twitter_clone.html')

if __name__ == "__main__":
    """
    Main Flask App
    """
    app.run(host=host, port=port)
