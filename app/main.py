from app import app
from flask import render_template

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/weapons')
@app.route('/weapon-stash')
def weapons():
    return render_template('weapon-stash.html')


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


@app.route('/' + app.config['GOOGLE_VERIFY'])
@app.route('/' + app.config['GOOGLE_VERIFY'] + '.html')
def google_verify():
    return 'google-site-verification: ' + app.config['GOOGLE_VERIFY'] + '.html'
