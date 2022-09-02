from flask import Flask, render_template

import TextScraper as Scraper
import PageRequester as Requester

SCRIPTURE_LIST = "https://www.churchofjesuschrist.org/study/scriptures?lang=eng"

api = Flask(__name__, template_folder="../templates")

@api.route("/images")
def get_image():
    page = Requester.request_page(SCRIPTURE_LIST)
    verses = Scraper.verse_parser(page, 'html.parser', 'div', "verse", 'a', 'sup', "body")

    return render_template('chapter.html', verses=verses)

if __name__ == '__main__':
    api.run()