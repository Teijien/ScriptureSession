from distutils.command.config import LANG_EXT
from flask import Flask, render_template

import TextScraper as Scraper
import PageRequester as Requester

SCRIPTURE_LIST = "https://www.churchofjesuschrist.org/study/scriptures"
URL_LANG = "?lang=eng"

api = Flask(__name__, template_folder="../templates")

@api.route("/sections")
def get_image():
    page = Requester.request_page(SCRIPTURE_LIST + URL_LANG)
    verses = Scraper.verse_parser(page, 'html.parser', 'div', "verse", 'a', 'sup', "body")

    return render_template('chapter.html', verses=verses)

if __name__ == '__main__':
    api.run()